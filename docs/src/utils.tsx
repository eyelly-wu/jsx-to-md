import { initI18n as originInitI18n } from 'i18n-pro'
import en from '../../i18n/en.json'
import packageInfo from '../../package.json'
import { getAnchor } from '@lib'

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

export function getDocHref(filename: string, anchorProp?: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { version, codeNameMap } = packageInfo as any
  let name = codeNameMap[global.docLocale]
  name = name ? `_${name}` : ''
  const anchor = anchorProp ? getAnchor(anchorProp) : ''

  const res = `https://github.com/eyelly-wu/jsx-to-md/blob/v${version}/docs/dist/${filename}${name}.md${anchor}`

  return res
}
