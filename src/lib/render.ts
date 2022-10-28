import { Element } from '../types'

const noEndNodes = ['br']

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
  props: Record<string, unknown> = {},
  children: any[],
) {
  const propsStr = Object.entries(props || {}).reduce(
    (res, [name, value], index) => {
      if (index == 0) {
        res += ' '
      }
      switch (name) {
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
        // eslint-disable-next-line no-fallthrough
        default:
          res += `${name}="${value}" `
          break
      }
      return res
    },
    '',
  )

  const preffix = `<${type}${propsStr}>`
  const suffix = `</${type}>`
  const childrenStr = children.reduce((res, item) => {
    res += renderImpl(item)
    return res
  }, '')

  if (noEndNodes.includes(type)) {
    return preffix.replace('>', '/>')
  }

  return `${preffix}\n${childrenStr}\n${suffix}`
}

function renderImpl(
  element: Element,
  params?: {
    ref: {
      skipRenderChildren: boolean
    }
  },
): string {
  // console.log({ currentElement: element, children: element?.children })
  const { ref = { skipRenderChildren: false } } = params || {}

  if (!element) return ''
  if (['string', 'number'].includes(typeof element)) return element + ''
  if (typeof element === 'object' && element == null) return ''

  let res = ''
  const { type, props, children } = element
  const isRenderChildFromProp = !!props?.children
  const currentChildren = getChildren(
    isRenderChildFromProp ? props.children : children,
  )

  if (typeof element.type === 'string') {
    return renderHtmlNode(type as string, props, children)
  }

  ref.skipRenderChildren = isRenderChildFromProp

  const currentParams = {
    ref: {
      skipRenderChildren: false,
    },
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
