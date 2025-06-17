import React, { BlockQuote, render } from '../../src/lib'

describe('BlockQuote', () => {
  it('single line', () => {
    const res = render(
      <>
        <BlockQuote>Block Quote</BlockQuote>
      </>,
    )
    expect(res).toBe(`
> Block Quote<br/>`)
  })

  it('single line nest', () => {
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
> Block Quote Text<br/>
>> Nest Block Quote Text1<br/>
>>> Nest Block Quote Text2<br/>
>>>> Nest Block Quote Text3<br/>`)
  })

  it('multiple line', () => {
    const res = render(
      <>
        Text
        <BlockQuote>
          {`first line
second line
third line          `}
        </BlockQuote>
      </>,
    )
    expect(res).toBe(`Text
> first line<br/>
> second line<br/>
> third line          <br/>`)
  })

  it('multiple line nest', () => {
    const res = render(
      <>
        Text
        <BlockQuote>
          {`first line
second line
third line`}
          <BlockQuote>
            {`nested first line
nested second line
nested third line           `}
          </BlockQuote>
        </BlockQuote>
      </>,
    )
    expect(res).toBe(`Text
> first line<br/>
> second line<br/>
> third line<br/>
>> nested first line<br/>
>> nested second line<br/>
>> nested third line           <br/>`)
  })
})
