import React, { BlockQuote, render } from '../../src/lib'

describe('BlockQuote', () => {
  it('basic', () => {
    const res = render(
      <>
        <BlockQuote>Block Quote</BlockQuote>
      </>,
    )
    expect(res).toBe(`
>Block Quote`)
  })
  it('nest', () => {
    const res = render(
      <>
        Text
        <BlockQuote>
          Block Quote Text
          <BlockQuote level={2}>
            Nest Block Quote Text1
            <BlockQuote level={3}>
              Nest Block Quote Text2
              <BlockQuote level={4}>Nest Block Quote Text3</BlockQuote>
            </BlockQuote>
          </BlockQuote>
        </BlockQuote>
      </>,
    )
    expect(res).toBe(`Text
>Block Quote Text
>>Nest Block Quote Text1
>>>Nest Block Quote Text2
>>>>Nest Block Quote Text3`)
  })
})
