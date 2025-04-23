import { join } from 'node:path'
import { readFileSync, unlinkSync, existsSync } from 'node:fs'
import {
  changeProcessArgv,
  binIndex,
  binRun,
  binConfig,
  binUtils,
  binConstant,
} from './utils'
import { getPosixPath } from '../../src/bin/utils'

const { executeCommand } = binIndex
const { CONFIG_NAME, INIT_CONFIG_CONTENT } = binConstant
const { getFilePathInfo, getArgs } = binUtils
const { generateTSConfig, generateRenderFileAndGetFilenames, run } = binRun
const { getConfig } = binConfig

describe('command', () => {
  beforeAll(() => {
    global.IS_TEST = true
  })
  afterAll(() => {
    global.IS_TEST = false
  })

  function removeFiles(filepaths: string[]) {
    filepaths.forEach((item) => {
      if (existsSync(item)) {
        unlinkSync(item)
      }
    })
  }

  describe('bin', () => {
    it('init', () => {
      changeProcessArgv('init')
      const initConfig = vi.spyOn(binConfig, 'initConfig')
      initConfig.mockImplementationOnce(() => undefined)
      executeCommand()
      expect(initConfig).toHaveBeenCalledOnce()
    })

    it('run', () => {
      changeProcessArgv('run')
      const run = vi.spyOn(binRun, 'run')
      run.mockImplementationOnce(() => undefined)
      executeCommand()
      expect(run).toHaveBeenCalledOnce()
    })

    it('unknown command', () => {
      changeProcessArgv('xxx')
      const log = vi.spyOn(console, 'log')
      log.mockImplementationOnce(() => undefined)
      executeCommand()
      expect(log).toHaveBeenCalledTimes(1)
      expect(log).toHaveBeenCalledWith('no match command found')
    })
  })

  describe('init implementation', () => {
    it('init config', () => {
      const targetPath = join(__dirname, '.temp', CONFIG_NAME)
      changeProcessArgv('init', '--path', join(__dirname, '.temp', CONFIG_NAME))
      executeCommand()
      const content = readFileSync(targetPath, 'utf8')
      expect(content).toBe(INIT_CONFIG_CONTENT)
      unlinkSync(targetPath)
    })

    it('getConfigPath', () => {
      const expectPath = join(__dirname, '../../', CONFIG_NAME)
      const path = binConfig.getConfigPath()
      expect(expectPath).toBe(path)
    })
  })

  describe('run implementation', () => {
    describe('generateTSConfig', () => {
      const targetPath = join(__dirname, '../../src/bin/tsconfig.json')

      it('tsconfig exist', () => {
        const isExist = existsSync(targetPath)
        if (isExist) {
          unlinkSync(targetPath)
        }
        expect(existsSync(targetPath)).toBe(false)
        generateTSConfig()
        expect(existsSync(targetPath)).toBe(true)
        unlinkSync(targetPath)
      })

      it('tsconfig not exist', () => {
        const isExist = existsSync(targetPath)
        if (isExist) {
          unlinkSync(targetPath)
        }
        expect(existsSync(targetPath)).toBe(false)
        generateTSConfig('classic', './temp.sj')
        expect(existsSync(targetPath)).toBe(false)
      })
    })

    it('generateRenderFileAndGetFilenames', () => {
      const config = {
        source: [
          {
            entry:
              '/Users/Program/Git/MINE_LIB_SOURCING/jsx-to-md/docs/src/api',
            output:
              '/Users/Program/Git/MINE_LIB_SOURCING/jsx-to-md/docs/dist/API.md',
          },
          {
            entry:
              '/Users/Program/Git/MINE_LIB_SOURCING/jsx-to-md/docs/src/api',
            output:
              '/Users/Program/Git/MINE_LIB_SOURCING/jsx-to-md/docs/dist/API_zh-CN.md',
            params: { locale: 'zh' },
          },
        ],
      }

      const targetPath = join(
        __dirname,
        '.temp',
        new Date().toLocaleTimeString(),
      )

      const originFileNames = config.source.map(
        (item) => getFilePathInfo(item.output).filenameWithoutExtension,
      )

      const targetFilePaths = originFileNames.map((item) =>
        join(targetPath, `render${item}.tsx`),
      )

      removeFiles(targetFilePaths)

      const filenames = generateRenderFileAndGetFilenames({
        config,
        targetPath,
      })

      targetFilePaths.forEach((item) => {
        expect(existsSync(item)).toBe(true)
      })

      removeFiles(targetFilePaths)

      filenames.forEach((item, index) => {
        expect(item).toBe(`render${originFileNames[index]}`)
      })
    })

    describe('run', () => {
      it('without config', () => {
        const mockConfig = vi.spyOn(binConfig, 'getConfig')
        const mockLog = vi.spyOn(console, 'log')

        mockConfig.mockImplementationOnce(() => ({
          source: [],
        }))

        run({})

        expect(mockLog).toHaveBeenCalledOnce()
        expect(mockLog).toHaveBeenCalledWith('no config')
      })

      it('with config', () => {
        const targetPath = join(
          __dirname,
          '.temp',
          new Date().toLocaleTimeString(),
        )

        const config = getConfig()

        const originFileNames = config.source.map(
          (item) => getFilePathInfo(item.output).filenameWithoutExtension,
        )

        const targetFilePaths = originFileNames.map((item) =>
          join(targetPath, `render${item}.tsx`),
        )

        run({
          '--watch': false,
          testTargetPath: targetPath,
        })

        targetFilePaths.forEach((item) => {
          expect(existsSync(item)).toBe(true)
        })

        removeFiles(targetFilePaths)
      })
    })
  })

  describe('test utils', () => {
    it('getArgs', () => {
      expect(getArgs([])).toMatchObject({})
      expect(getArgs(['--a'])).toMatchObject({ '--a': true })
      expect(getArgs(['--a', 'abc'])).toMatchObject({ '--a': 'abc' })
      expect(getArgs(['--a', '--b'])).toMatchObject({
        '--a': true,
        '--b': true,
      })
      expect(getArgs(['--a', 'abc', '--b'])).toMatchObject({
        '--a': 'abc',
        '--b': true,
      })
    })

    describe('getFilePathInfo', () => {
      it('mock windows', () => {
        const mockProcess = vi.spyOn(process, 'platform', 'get')
        mockProcess.mockReturnValue('win32')
        const path = getPosixPath('c:\\windows\\Program Files\\temp.text')
        const { dirpath, filename, filenameWithoutExtension } =
          getFilePathInfo(path)

        expect(dirpath).toBe('c:/windows/Program Files')
        expect(filename).toBe('temp.text')
        expect(filenameWithoutExtension).toBe('temp')
      })

      it('not windows', () => {
        const mockProcess = vi.spyOn(process, 'platform', 'get')
        mockProcess.mockReturnValue('linux')
        const path = '/windows/Program Files/temp.text'
        const { dirpath, filename, filenameWithoutExtension } =
          getFilePathInfo(path)

        expect(dirpath).toBe('/windows/Program Files')
        expect(filename).toBe('temp.text')
        expect(filenameWithoutExtension).toBe('temp')
      })
    })
  })
})
