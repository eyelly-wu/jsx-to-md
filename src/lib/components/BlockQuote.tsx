import React from '.././index'

type BlockQuoteProps = {
  level?: number
  children: string | unknown
}

export default function BlockQuote(props: BlockQuoteProps) {
  const { level = 1 } = props
  return (
    <>{`
${Array(level).fill('>').join('')}`}</>
  )
}
