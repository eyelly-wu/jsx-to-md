/* eslint-disable @typescript-eslint/no-explicit-any */
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { exec } from 'shelljs'
import { Config } from 'src/types'
import { getConfig } from './config'
import { TEMP_DIR, ROOT_EXECUTE_FILE_NAME } from './constant'
import { getFilePathInfo, writeFile } from './utils'

export function generateTSConfig(testWorkingDir?: string) {
  const workingDir = testWorkingDir || process.cwd()
  const sourceTsConfigPath = join(workingDir, 'tsconfig.json')

  const isExist = existsSync(sourceTsConfigPath)
  if (!isExist) return

  const tsConfig = require(sourceTsConfigPath)

  tsConfig.compilerOptions.baseUrl = workingDir

  if (Array.isArray(tsConfig.include) && tsConfig.include.length > 0) {
    tsConfig.include = tsConfig.include.map((item) => {
      return workingDir + '/' + item
    })
  }

  tsConfig['ts-node'] = {
    require: ['tsconfig-paths/register'],
  }

  writeFile(
    join(__dirname, '.temp'),
    'tsconfig.json',
    JSON.stringify(tsConfig, null, 2),
  )
}

export function generateRenderFileAndGetFilenames(props: {
  config: Config
  targetPath: string
}) {
  const { config, targetPath } = props

  const filenames = config?.source?.reduce((res, configItem) => {
    const { entry, output, params = {} } = configItem
    const { filenameWithoutExtension } = getFilePathInfo(output)
    const paramsStr = JSON.stringify(params)
    const originFilename = `render${filenameWithoutExtension}`
    const filename = `${originFilename}.tsx`
    const IS_TEST = (global as any).IS_TEST
    const relativeLibPath = IS_TEST ? '../../../../src/lib' : '../../lib/'
    const relativeBinPath = IS_TEST ? '../../../../src/bin/utils' : '../utils'

    const runScript = `
import { existsSync } from 'node:fs'
import Doc from '${entry}'
import React, { renderAsync } from '${relativeLibPath}'
import { writeFileWithPath } from '${relativeBinPath}'

export default async function(){
  const res = await renderAsync(<Doc {...(${paramsStr}) as any}/>)

  try {
    const isExist = existsSync('${output}')
    writeFileWithPath('${output}', res)
    console.log(new Date().toLocaleTimeString() + \` ${output} has been ${'${ isExist?"updated":"created" }'} \`)
  } catch (err) {
    console.error(err)
  }
}`
    // Generate temp script file
    writeFile(targetPath, filename, runScript)

    res.push(originFilename)
    return res
  }, [])

  return filenames
}

export function generateRootExecuteFile(props: {
  targetPath: string
  renderFilenames: string[]
}) {
  const { targetPath, renderFilenames: filenames } = props

  const runScript = `${filenames
    .map((item, index) => {
      return `import f${index} from './${item}'\n`
    })
    .join('')}

const funcs = [\n  ${filenames
    .map((item, index) => `f${index}`)
    .join(',\n  ')}\n]

;(async ()=>{
  for(let i=0; i<${filenames.length}; i++) {
    try{
      await funcs[i]()
    }catch(e){
      console.error(e)
    }
  }
})()
`
  writeFile(targetPath, ROOT_EXECUTE_FILE_NAME, runScript)
}

export function run(params: { '--watch'?: boolean; testTargetPath?: string }) {
  const { ['--watch']: watch = true, testTargetPath } = params
  const targetPath = testTargetPath || join(__dirname, TEMP_DIR)
  const config = getConfig()

  if (config?.source?.length == 0) {
    console.log('no config')
    return
  }

  generateTSConfig()

  // HACK https://github.com/vitest-dev/vitest/issues/1436
  // vitest can't use process.chdir in test
  !testTargetPath && process.chdir(join(__dirname))

  const renderFilenames = generateRenderFileAndGetFilenames({
    config,
    targetPath,
  })

  generateRootExecuteFile({
    targetPath,
    renderFilenames,
  })

  exec(
    `npx ts-node-dev -r tsconfig-paths/register --files --respawn ${watch} ${join(
      targetPath,
      ROOT_EXECUTE_FILE_NAME,
    )}`,
  )
}
