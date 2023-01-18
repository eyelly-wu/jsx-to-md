import { setI18N, i18n } from 'i18n-pro'
import en from '../../i18n/en.json'
import packageInfo from '../../package.json'

export function initI18N({ locale }) {
  setI18N({
    locale,
    langs: {
      en,
    },
  })

  global.i18n = i18n
  global.docLocale = locale
}

export function getDocHref(filename: string, anchorProp?: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { version, codeNameMap } = packageInfo as any
  let name = codeNameMap[global.docLocale]
  name = name ? `_${name}` : ''
  let anchor = anchorProp ? `#${anchorProp}` : ''
  anchor = anchor.replace(/ /g, '-').replace('.', '').toLocaleLowerCase()

  const res = `https://github.com/eyelly-wu/jsx-to-md/blob/v${version}/docs/dist/${filename}${name}.md${anchor}`

  return res
}
