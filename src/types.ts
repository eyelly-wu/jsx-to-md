export type Element = {
  type: (props: any) => JSX.Element
  props: null | Record<string, any>
  children?: Array<JSX.Element>
}

export type Config = {
  entry: string
  output: string
  params: Record<string, unknown>
}
