import { getAnchor } from '@lib'
import packageInfo from '../../../package.json'

export default function getDocHref(
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
