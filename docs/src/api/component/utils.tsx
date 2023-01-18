import { Column } from '@lib'
import { readFileSync } from 'node:fs'

export function getComponentColumns() {
  const columns: Column[] = [
    {
      title: i18n('属性名'),
      fieldName: 'name',
      align: 'center',
    },
    {
      title: i18n('类型'),
      fieldName: 'type',
      align: 'center',
    },
    {
      title: i18n('是否必须'),
      fieldName: 'required',
      align: 'center',
    },
    {
      title: i18n('默认值'),
      fieldName: 'default',
      align: 'center',
    },
    {
      title: i18n('说明'),
      fieldName: 'description',
    },
  ]
  return columns
}

export function getCodeString(path: string) {
  const code = readFileSync(path, { encoding: 'utf8' })
  const nestedRegExp = />(\s*)\{i18n\((['"])(.+?)\2\)\}(\s*)</g
  const propRegExp = /=\{i18n\((['"])(.+?)\1\)\}/g
  const commentRegExp = /\*\*\$\{i18n\((['"])(.+?)\1\)\}\*/g
  const bracketsRegExp = /\{i18n\((['"])(.+?)\1\)\}/g
  const normalRegExp = /i18n\((['"])(.+?)\1\)/g

  return code
    ?.replace('@lib', 'jsx-to-md')
    ?.replace(
      nestedRegExp,
      (wholeText, whitespace1, quote, text, whitespace2) => {
        return `>${whitespace1}${i18n(text)}${whitespace2}<`
      },
    )
    .replace(commentRegExp, (wholeText, quote, text) => {
      return `** ${i18n(text)} *`
    })
    .replace(propRegExp, (wholeText, quote, text) => {
      return `="${i18n(text)}"`
    })
    .replace(bracketsRegExp, (wholeText, quote, text) => {
      return `${i18n(text)}`
    })
    .replace(normalRegExp, (wholeText, quote, text) => {
      return `'${i18n(text)}'`
    })
}
