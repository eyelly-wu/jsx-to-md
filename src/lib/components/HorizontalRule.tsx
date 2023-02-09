import React from '../index'

export type HorizontalRuleProps = {
  mark?: '-' | '*' | '_'
}

export default function HorizontalRule(props: HorizontalRuleProps) {
  const { mark = '_' } = props
  return (
    <>
      {'\n'}
      {mark.repeat(3)}
      {'\n'}
    </>
  )
}
