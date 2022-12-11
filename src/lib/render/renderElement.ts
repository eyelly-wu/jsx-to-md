import { AsyncNode, Element, HTMLElement, InnerRenderProps } from 'src/types'
import { H1 } from '../components/Header'
import TableOfContents from '../components/TableOfContents'
import {
  FUNC_HEADINGS,
  STRING_HEADINGS,
  TABLE_OF_CONTENTS_PLACEHOLDER,
} from '../constant'
import renderHTMLElement from './renderHTMLElement'
import AsyncWrapper from '../components/AsyncWrapper'

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

export default function renderElement(
  element: Element,
  params: InnerRenderProps,
): string {
  // console.log({ currentElement: element, children: element?.children })
  const {
    skipRenderChildren = [],
    headingNodes,
    renderTOCState,
    asyncNodes,
  } = params || {}

  if (!element) return ''
  if (['string', 'number'].includes(typeof element)) return element + ''

  let res = ''
  const { type, props, children } = element
  const isRenderChildFromProp = !!props?.children
  const currentChildren = getChildren(
    isRenderChildFromProp ? props.children : children,
  )

  if (typeof type === 'string') {
    const currentRes = renderHTMLElement(element as HTMLElement, params)
    if (STRING_HEADINGS.includes(type) && !props?.skip) {
      headingNodes.push({
        type,
        content: currentRes,
      })
    }
    return currentRes
  }

  skipRenderChildren.push(isRenderChildFromProp)

  const currentParams = {
    ...params,
    skipRenderChildren: [],
  }

  if (typeof type === 'function') {
    const renderRes = type({
      ...(props || {}),
      children: currentChildren,
    })
    let currentRes = renderElement(renderRes, currentParams)
    if (FUNC_HEADINGS.includes(type) && !props?.skip) {
      headingNodes.push({
        type: H1,
        content: currentRes,
      })
    } else if (type === TableOfContents && !renderTOCState[0]) {
      renderTOCState[0] = true
      renderTOCState[1] = {
        text: props?.text as string,
        open: props?.open as boolean,
        indent: (props?.indent as string[])?.join('') || undefined,
      }
      currentRes = TABLE_OF_CONTENTS_PLACEHOLDER
    } else if (type === AsyncWrapper) {
      const tag = '\nAsyncWapper:' + Math.random().toString(32).slice(2) + '\n'
      asyncNodes.push({
        tag,
        data: props?.data as AsyncNode['data'],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        renderer: children?.[0] as any,
      })
      currentRes += tag
    }

    res += currentRes
  }

  // console.log({
  //   element,
  //   isRenderChildFromProp,
  //   skipRenderChildren: currentParams.ref.skipRenderChildren,
  //   res,
  // })

  if (!isRenderChildFromProp && !currentParams.skipRenderChildren[0]) {
    currentChildren?.forEach?.((child) => {
      res += renderElement(child, {
        headingNodes,
        renderTOCState,
        asyncNodes,
      })
    })
  }

  return res
}
