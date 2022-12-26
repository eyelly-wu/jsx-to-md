import React from '../index'

type CodeBlockProps = {
  isInline: boolean
  children: unknown
  langType?: string
}

function Code(props: CodeBlockProps) {
  const { children } = props
  return <>{`\`${children}\``}</>
}

export const InlineCode = ({
  children,
}: Omit<CodeBlockProps, 'isInline' | 'langType'>) => (
  <Code isInline children={children} />
)

export const CodeBlock = ({
  code,
  langType = 'js',
}: Omit<CodeBlockProps, 'isInline' | 'children'> & { code: string }) => {
  code = code?.replace(/^\n*/, '')?.replace(/\n*$/, '')

  return (
    <>
      {`\n\`\`\`${langType}\n`}
      {code}
      {`\n\`\`\`\n`}
    </>
  )
}
