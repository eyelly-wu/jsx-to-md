import { Column } from '@lib'
import { readFileSync } from 'node:fs'

export function getComponentColumns() {
  const columns: Column[] = [
    {
      title: t('属性名'),
      fieldName: 'name',
      align: 'center',
    },
    {
      title: t('类型'),
      fieldName: 'type',
      align: 'center',
    },
    {
      title: t('是否必须'),
      fieldName: 'required',
      align: 'center',
    },
    {
      title: t('默认值'),
      fieldName: 'default',
      align: 'center',
    },
    {
      title: t('说明'),
      fieldName: 'description',
    },
  ]
  return columns
}

export function getCodeString(path: string) {
  const code = readFileSync(path, { encoding: 'utf8' })
  const nestedRegExp = />(\s*)\{t\((['"])(.+?)\2\)\}(\s*)</g
  const propRegExp = /=\{t\((['"])(.+?)\1\)\}/g
  const commentRegExp = /\*\*\$\{t\((['"])(.+?)\1\)\}\*/g
  const bracketsRegExp = /\{t\((['"])(.+?)\1\)\}/g
  const normalRegExp = /t\((['"])(.+?)\1\)/g

  return code
    ?.replace('@lib', 'jsx-to-md')
    ?.replace(
      nestedRegExp,
      (wholeText, whitespace1, quote, text, whitespace2) => {
        return `>${whitespace1}${t(text)}${whitespace2}<`
      },
    )
    .replace(commentRegExp, (wholeText, quote, text) => {
      return `** ${t(text)} *`
    })
    .replace(propRegExp, (wholeText, quote, text) => {
      return `="${t(text)}"`
    })
    .replace(bracketsRegExp, (wholeText, quote, text) => {
      return `${t(text)}`
    })
    .replace(normalRegExp, (wholeText, quote, text) => {
      return `'${t(text)}'`
    })
}
