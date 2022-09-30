export type Element = {
  type: (props: any) => JSX.Element
  props: null | Record<string, any>
  children?: Array<JSX.Element>
}
