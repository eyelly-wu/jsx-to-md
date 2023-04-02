export function jsx(type, props) {
  const { children = [], ...restProps } = props

  return {
    type,
    props: restProps,
    children: Array.isArray(children) ? children : [children],
  }
}
