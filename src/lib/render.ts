import { Element } from '../types'

function getChildren(children: JSX.Element[]) {
  const res = children.reduce((res, child) => {
    if (Array.isArray(child)) {
      res.push(...child)
    } else {
      res.push(child)
    }
    return res
  }, [])

  return res
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
  if (typeof element === 'string') return element
  if (typeof element === 'object' && element == null) return ''

  let res = ''
  const { type, props, children } = element
  const isRenderChildFromProp = !!props?.children
  const currentChildren = getChildren(
    isRenderChildFromProp ? props.children : children,
  )

  ref.skipRenderChildren = isRenderChildFromProp

  const currentParams = {
    ref: {
      skipRenderChildren: false,
    },
  }

  const typeOfType = typeof type
  if (typeOfType === 'function') {
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
