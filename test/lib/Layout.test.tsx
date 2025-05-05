import React, { Break, render, HorizontalRule } from '../../src/lib'

describe('Layout', () => {
  it('Break', () => {
    const res = render(
      <>
        text1
        <Break />
        text2
      </>,
    )

    expect(res).toBe('text1\ntext2')
  })

  it('Horizontal Rule', () => {
    const res = render(
      <>
        text1
        <HorizontalRule />
        text2
      </>,
    )

    expect(res).toBe('text1\n___\ntext2')
  })
})
