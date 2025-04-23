import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

export function getArgs(args: string[]) {
  const argObject = args.reduce((res, item, index) => {
    if (item?.startsWith('--')) {
      if (index === args.length - 1 || args[index + 1]?.startsWith('--')) {
        res[item] = true
      } else {
        res[item] = args[index + 1]
      }
    }
    return res
  }, {} as any)

  return argObject
}

export function writeFile(path: string, filename: string, content: string) {
  const isExist = existsSync(path)
  if (!isExist) {
    mkdirSync(path, { recursive: true })
  }
  writeFileSync(join(path, filename), content, {
    encoding: 'utf-8',
  })
}

export function getFilePathInfo(path: string) {
  const dirpath = path.slice(0, path.lastIndexOf('/'))
  const filename = path.replace(dirpath, '').replace(/(\\)|(\/)/, '')
  const filenameWithoutExtension = filename.slice(0, filename.lastIndexOf('.'))

  return {
    dirpath,
    filename,
    filenameWithoutExtension,
  }
}

export function writeFileWithPath(path: string, content: string) {
  const { dirpath, filename } = getFilePathInfo(path)
  writeFile(dirpath, filename, content)
}

export function getPosixPath(path: string) {
  return path.replace(/\\/g, '/')
}
