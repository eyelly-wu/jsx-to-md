import React, { CodeBlock, Break, render } from '@lib'

export default function CodeDemo(props: {
  code: string
  Component?: React.FC
  isAsync?: boolean
}) {
  const { code, Component, isAsync = false } = props

  const showResult = !!Component

  const renderRes = render(<Component />)
  return (
    <>
      <Break />
      <details open>
        <summary>{t('代码')}</summary>
        <Break />
        <CodeBlock langType="tsx" code={code} />
        {showResult && !isAsync && (
          <details open>
            <summary>{t('生成 Markdown 字符内容')}</summary>
            <Break />
            <Break />
            <CodeBlock
              langType="markdown"
              code={renderRes?.replace(
                /```[^A-z]/g,
                '``` // ' +
                  t('这里为了避免与 Markdown 语法冲突，多添加了此描述'),
              )}
            />
            <Break />
            <Break />
          </details>
        )}
        {showResult && (
          <details open>
            <summary>{t('渲染内容')}</summary>
            <Break />
            <Break />
            {isAsync ? <Component /> : renderRes}
            <Break />
            <Break />
          </details>
        )}
        <Break />
      </details>
      <Break />
      <Break />
    </>
  )
}
