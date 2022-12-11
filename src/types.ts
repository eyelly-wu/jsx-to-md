export type Element = {
  type: ((props?: unknown) => JSX.Element) | string
  props: { [key: string]: unknown; children?: JSX.Element[] } | null
  children?: JSX.Element[]
}

export type HTMLElement = {
  type: string
  props: Record<string, unknown>
  children?: JSX.Element[]
}

type Source = {
  entry: string
  output: string
  params: Record<string, unknown>
}

export type Config = {
  source: Source[]
}

export type HeadingNodeType = {
  type: unknown
  content: string
}

export type RenderTOCProps = {
  text?: string
  indent?: string | undefined
  open?: boolean
}

export type AsyncNode = {
  tag: string
  data: Promise<Record<string, unknown>>
  renderer: (props: Record<string, unknown>) => JSX.Element
}

export type InnerRenderProps = {
  skipRenderChildren?: boolean[]
  htmlLevel?: number
  headingNodes: HeadingNodeType[]
  renderTOCState: [boolean, RenderTOCProps]
  asyncNodes: AsyncNode[]
}

export type RenderProps = {
  asyncNodes: AsyncNode[]
}
