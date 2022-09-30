import { Element } from '../types'

export default function createElement(
  type: Element['type'],
  props: Element['props'],
  ...children: Element[]
) {
  return {
    type,
    props,
    children,
  }
}
