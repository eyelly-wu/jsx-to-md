import { AsyncNode, Element, InnerRenderProps, RenderProps } from '../../types'
import renderAsyncElement from './renderAsyncElement'
import renderElement from './renderElement'
import renderTableOfContents from './renderTableOfContents'

function renderImpl(element: Element, props?: RenderProps) {
  const { asyncNodes = [] } = props || {}

  const headingNodes = []
  const renderTOCState: InnerRenderProps['renderTOCState'] = [false, {}]

  const contents = renderElement(element, {
    headingNodes,
    renderTOCState,
    asyncNodes,
  })

  if (renderTOCState[0]) {
    return renderTableOfContents(headingNodes, contents, renderTOCState[1])
  }

  return contents
}

export function render(element: Element) {
  return renderImpl(element)
}

export async function renderAsync(element: Element) {
  const asyncNodes: AsyncNode[] = []
  const contents = renderImpl(element, { asyncNodes })

  if (asyncNodes.length === 0) return contents
  return renderAsyncElement(asyncNodes, contents)
}
