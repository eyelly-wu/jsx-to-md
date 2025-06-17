import React from '../index'

export interface BreakProps {
  lines?: number
}

export default function Break(props: BreakProps) {
  const { lines = 1 } = props
  return <>{'\n'.repeat(lines)}</>
}
