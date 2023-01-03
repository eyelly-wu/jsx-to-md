import { HTMLElement, InnerRenderProps } from 'src/types'
import { BLOCK_NODES, NO_END_NODES, STRING_HEADINGS } from '../constant'
import renderElement from './renderElement'

export default function renderHTMLElement(
  element: HTMLElement,
  params: InnerRenderProps,
) {
  const { type, props: propsProp, children = [] } = element
  const { htmlLevel = 1, ...restParams } = params

  const props = { ...(propsProp || {}) }

  if (STRING_HEADINGS.includes(type)) {
    delete props?.skip
  }

  const propsStr = Object.entries(props || {}).reduce(
    (res, [name, value], index) => {
      if (index == 0) {
        res += ' '
      }
      switch (name) {
        case 'href':
          if (type === 'a' && (value as string)?.startsWith?.('#')) {
            value = (value as string)?.toLowerCase?.()?.replace(' ', '-')
          }
          break
        case 'style':
          // eslint-disable-next-line no-case-declarations
          const styleStr = Object.entries(value).reduce(
            (styleRes, [styleName, styleValue]) => {
              styleName = styleName
                .replace(/(?<=[a-z])(?=[A-Z])/g, '-')
                .toLowerCase()

              styleValue =
                typeof styleValue === 'number' ? styleValue + 'px' : styleValue

              styleRes += `${styleName}: ${styleValue};`

              return styleRes
            },
            '',
          )
          value = styleStr
          break
      }

      res += `${name}="${value}"`
      return res
    },
    '',
  )

  const prefix = `<${type}${propsStr}>`
  const suffix = `</${type}>`
  const prefixSpace = ' '.repeat(htmlLevel * 2)
  const suffixSpace = ' '.repeat((htmlLevel - 1) * 2)
  const childrenStr = children.reduce((res, item, index) => {
    let extra = ''
    if (
      typeof item?.type === 'string' &&
      BLOCK_NODES.includes(item?.type) &&
      index > 0
    ) {
      extra = '\n' + prefixSpace
    }
    res +=
      extra +
      renderElement(item, {
        htmlLevel: htmlLevel + 1,
        ...restParams,
      })
    return res
  }, '')

  if (NO_END_NODES.includes(type)) {
    return prefix.replace('>', ' />')
  }

  if (childrenStr === '') {
    return `${prefix}${suffix}`
  }

  if (
    (childrenStr?.includes?.('<') && childrenStr?.includes?.('>')) ||
    childrenStr?.includes?.('\\n') ||
    childrenStr?.includes?.('\n')
  ) {
    const currentPrefixSpace = type === 'pre' ? '' : prefixSpace
    return `${prefix}\n${currentPrefixSpace}${childrenStr}\n${suffixSpace}${suffix}`
  }

  return `${prefix}${childrenStr}${suffix}`
}
