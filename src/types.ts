export type Element = {
  type: ((props: any) => JSX.Element) | string
  props: null | Record<string, any>
  children?: Array<JSX.Element>
}

type Source = {
  entry: string
  output: string
  params: Record<string, unknown>
}

export type Config = {
  source: Source[]
}
