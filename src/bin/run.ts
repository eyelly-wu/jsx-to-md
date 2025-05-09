/* eslint-disable @typescript-eslint/no-explicit-any */
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { exec } from 'shelljs'
import { Config } from 'src/types'
import { getConfig } from './config'
import { TEMP_DIR, ROOT_EXECUTE_FILE_NAME } from './constant'
import { getFilePathInfo, getPosixPath, writeFile } from './utils'

type JSXType = 'classic' | 'automatic'

export function generateTSConfig(jsx: JSXType, testWorkingDir?: string) {
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

  if (jsx === 'automatic') {
    tsConfig.compilerOptions.jsx = 'react-jsx'
    tsConfig.compilerOptions.jsxImportSource = 'jsx-to-md'
  } else {
    if (tsConfig?.compilerOptions?.jsxImportSource) {
      delete tsConfig.compilerOptions.jsxImportSource
    }
    tsConfig.compilerOptions.jsx = 'react'
  }

  tsConfig['ts-node'] = {
    require: ['tsconfig-paths/register'],
  }

  writeFile(__dirname, 'tsconfig.json', JSON.stringify(tsConfig, null, 2))
}

export function generateRenderFileAndGetFilenames(props: {
  config: Config
  targetPath: string
  jsx: JSXType
}) {
  const { config, targetPath, jsx } = props

  const filenames = config?.source?.reduce((res, configItem) => {
    const { entry, output, params = {} } = configItem
    const entryPath = getPosixPath(entry)
    const outputPath = getPosixPath(output)

    const { filenameWithoutExtension } = getFilePathInfo(outputPath)
    const paramsStr = JSON.stringify(params)
    const originFilename = `render${filenameWithoutExtension}`
    const filename = `${originFilename}.tsx`
    const IS_TEST = (global as any).IS_TEST
    const relativeLibPath = IS_TEST ? '../../../../src/lib' : '../../lib'
    const relativeBinPath = IS_TEST ? '../../../../src/bin/utils' : '../utils'

    const jsxAuto = jsx === 'automatic'

    const runScript = `
import { existsSync } from 'node:fs'
import Doc from '${entryPath}'
import ${jsxAuto ? '' : 'React, '}{ renderAsync } from '${relativeLibPath}'
import { writeFileWithPath } from '${relativeBinPath}'
${jsxAuto ? `import { jsx } from '${relativeLibPath}/jsx-runtime'\n` : ''}
export default async function(){
  const res = await renderAsync(${
    jsxAuto
      ? `jsx(Doc, {...(${paramsStr}) as any})`
      : `<Doc {...(${paramsStr}) as any}/>`
  })

  try {
    const isExist = existsSync('${outputPath}')
    writeFileWithPath('${outputPath}', res)
    console.log(new Date().toLocaleTimeString() + \` ${outputPath} has been ${'${ isExist?"updated":"created" }'} \`)
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

export function run(params: {
  '--watch'?: boolean
  testTargetPath?: string
  '--jsx'?: 'classic' | 'automatic'
}) {
  const {
    ['--watch']: watch = true,
    testTargetPath,
    ['--jsx']: jsx = 'automatic',
  } = params
  const targetPath = testTargetPath || join(__dirname, TEMP_DIR)
  const config = getConfig()

  if (config?.source?.length == 0) {
    console.log('no config')
    return
  }

  generateTSConfig(jsx)

  // HACK https://github.com/vitest-dev/vitest/issues/1436
  // vitest can't use process.chdir in test
  !testTargetPath && process.chdir(join(__dirname))

  const renderFilenames = generateRenderFileAndGetFilenames({
    config,
    targetPath,
    jsx,
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
