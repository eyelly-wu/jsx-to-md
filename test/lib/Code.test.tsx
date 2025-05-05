import React, { InlineCode, CodeBlock, render } from '../../src/lib'

describe('Code', () => {
  it('Inline Code', () => {
    const strs = ['Javascript', 'HTML', 'CSS']
    const strs2 = ['a', 'b', 'c', 'd', 'e', 'f']

    const res = render(
      <>
        {strs.map((item) => (
          <InlineCode>{item}</InlineCode>
        ))}
        {strs2.map((item) => (
          <InlineCode>{item}</InlineCode>
        ))}
      </>,
    )

    expect(res).toBe([...strs, ...strs2].map((item) => `\`${item}\``).join(''))
  })

  it('Code Block', () => {
    const res = render(
      <>
        <CodeBlock
          code={`

function Foo(){
}

foo()


`}
        />
      </>,
    )

    const expectRes = `\n\`\`\`js
function Foo(){
}

foo()
\`\`\`\n`
    expect(res).toBe(expectRes)
  })
})
