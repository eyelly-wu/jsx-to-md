import { initI18n as originInitI18n } from 'i18n-pro'
import en from '../../../i18n/en.json'

export default function initI18N({ locale }) {
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
