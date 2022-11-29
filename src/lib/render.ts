import { Element } from '../types'

const blockNodes = [
  'div',
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'table',
  'tbody',
  'tr',
  'th',
  'td',
]
const noEndNodes = ['br', 'input', 'img', 'hr', 'meta']

function getChildren(children: JSX.Element[]) {
  const res = children?.reduce?.((res, child) => {
    if (Array.isArray(child)) {
      res.push(...child)
    } else {
      res.push(child)
    }
    return res
  }, [])

  return res
}

function renderHtmlNode(
  type: string,
  props: Record<string, unknown>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any[],
  htmlLevel: number,
) {
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

  const preffix = `<${type}${propsStr}>`
  const suffix = `</${type}>`
  const preffixSpace = ' '.repeat(htmlLevel * 2)
  const suffixsSpace = ' '.repeat((htmlLevel - 1) * 2)
  const childrenStr = children.reduce((res, item, index) => {
    let extra = ''
    if (
      typeof item.type === 'string' &&
      blockNodes.includes(item.type) &&
      index > 0
    ) {
      extra = '\n' + preffixSpace
    }
    res +=
      extra +
      renderImpl(item, {
        htmlLevel: htmlLevel + 1,
      })
    return res
  }, '')

  if (noEndNodes.includes(type)) {
    return preffix.replace('>', ' />')
  }

  if (childrenStr === '') {
    return `${preffix}${suffix}`
  }

  if (
    (childrenStr?.includes?.('<') && childrenStr?.includes?.('>')) ||
    childrenStr?.includes?.('\\n') ||
    childrenStr?.includes?.('\n')
  ) {
    const currentPreffixSpace = type === 'pre' ? '' : preffixSpace
    return `${preffix}\n${currentPreffixSpace}${childrenStr}\n${suffixsSpace}${suffix}`
  }

  return `${preffix}${childrenStr}${suffix}`
}

function renderImpl(
  element: Element,
  params?: {
    ref?: {
      skipRenderChildren: boolean
    }
    htmlLevel: number
  },
): string {
  // console.log({ currentElement: element, children: element?.children })
  const { ref = { skipRenderChildren: false }, htmlLevel = 1 } = params || {}

  if (!element) return ''
  if (['string', 'number'].includes(typeof element)) return element + ''

  let res = ''
  const { type, props, children } = element
  const isRenderChildFromProp = !!props?.children
  const currentChildren = getChildren(
    isRenderChildFromProp ? props.children : children,
  )

  if (typeof element.type === 'string') {
    return renderHtmlNode(type as string, props, children, htmlLevel)
  }

  ref.skipRenderChildren = isRenderChildFromProp

  const currentParams = {
    ref: {
      skipRenderChildren: false,
    },
    htmlLevel: 1,
  }

  if (typeof type === 'function') {
    const renderRes = type({
      ...(props || {}),
      children: currentChildren,
    })
    res += renderImpl(renderRes, currentParams)
  }

  // console.log({
  //   element,
  //   isRenderChildFromProp,
  //   skipRenderChildren: currentParams.ref.skipRenderChildren,
  //   res,
  // })

  if (!isRenderChildFromProp && !currentParams.ref.skipRenderChildren) {
    currentChildren?.forEach?.((child) => {
      res += renderImpl(child)
    })
  }

  return res
}

export default function render(element: Element) {
  return renderImpl(element)
}
