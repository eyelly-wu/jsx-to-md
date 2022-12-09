import { Element, InnerRenderProps } from '../../types'
import renderElement from './renderElement'
import renderTableOfContents from './renderTableOfContents'

export default function render(element: Element) {
  const headingNodes = []
  const renderTOCState: InnerRenderProps['renderTOCState'] = [false, {}]

  const contents = renderElement(element, {
    headingNodes,
    renderTOCState,
  })

  if (renderTOCState[0]) {
    return renderTableOfContents(headingNodes, contents, renderTOCState[1])
  }

  return contents
}
