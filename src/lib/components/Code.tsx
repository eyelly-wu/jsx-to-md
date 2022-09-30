import React from '../index'

type CodeBlockProps = {
  isInline: boolean
  children: unknown
  langType?: string
}

function Code(props: CodeBlockProps) {
  const { isInline, children, langType = 'js' } = props
  if (isInline) return <>{`\`${children}\``}</>
  return (
    <>
      {`\`\`\`${langType}\n`}
      <>{{ children }}</>
      {`\n\`\`\``}
    </>
  )
}

export const InlineCode = ({
  children,
}: Omit<CodeBlockProps, 'isInline' | 'langType'>) => (
  <Code isInline children={children} />
)

export const CodeBlock = ({
  children,
  langType,
}: Omit<CodeBlockProps, 'isInline'>) => (
  <Code langType={langType} isInline={false} children={children} />
)
