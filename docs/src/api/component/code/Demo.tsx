import React, { H1, InlineCode, CodeBlock } from '@lib'

export default function () {
  return (
    <>
      <H1>{t('行内代码')}</H1>
      <InlineCode>console.log('Hello World!')</InlineCode>
      <H1>{t('代码块')}</H1>
      <CodeBlock
        code={`
function foo(){
  console.log('Hello World!')
}

foo()`}
      />
    </>
  )
}
