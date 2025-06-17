import { initI18n as originInitI18n } from 'i18n-pro'
import en from '../../i18n/en.json'
import packageInfo from '../../package.json'
import React, { Break, getAnchor, Link } from '@lib'
import { langs } from './constants'

export function initI18N({ locale }) {
  const { t } = originInitI18n({
    namespace: Math.random() + '',
    locale,
    langs: {
      en,
    },
  })

  global.t = t
  global.docLocale = locale
}

export function getDocHref(
  filename: string,
  anchorProp?: string,
  localeProp?: string,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { version, codeNameMap } = packageInfo as any
  const locale = localeProp || global.docLocale

  let name = codeNameMap[locale]
  name = name ? `_${name}` : ''
  const anchor = anchorProp ? getAnchor(anchorProp) : ''

  const res = `https://github.com/eyelly-wu/jsx-to-md/blob/v${version}/docs/dist/${filename}${name}.md${anchor}`

  return res
}

export default function renderLanguage(filename: string) {
  const separator = ' | '

  const res = langs.reduce((res, item, index) => {
    const { code, name } = item

    if (global.docLocale == code) {
      res.push(name)
    } else {
      res.push(<Link href={getDocHref(filename, undefined, code)}>{name}</Link>)
    }

    if (index != langs.length - 1) {
      res.push(separator)
    }

    return res
  }, [])
  return (
    <>
      <Break />
      <Break />
      {res}
      <Break />
      <Break />
    </>
  )
}
