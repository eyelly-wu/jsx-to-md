import React, { H1, H2, H3, H4, H5, H6, render } from '../../src/lib'

describe('Header', () => {
  it('normal', () => {
    const title = 'Hello World!'
    const res = render(
      <>
        <H1>{title}</H1>
        <H2>{title}</H2>
        <H3>{title}</H3>
        <H4>{title}</H4>
        <H5>{title}</H5>
        <H6>{title}</H6>
      </>,
    )

    const expectRes = Array(6)
      .fill(0)
      .reduce((res, item, i) => {
        res += `\n${Array(i + 1)
          .fill('#')
          .join('')} ${title}\n`
        return res
      }, '')

    expect(res).toBe(expectRes)
  })

  it('with id', () => {
    const title = 'Hello World!'
    const res = render(
      <>
        <H1 id="1">{title}</H1>
        <H2 id="2">{title}</H2>
        <H3 id="3">{title}</H3>
        <H4 id="4">{title}</H4>
        <H5 id="5">{title}</H5>
        <H6 id="6">{title}</H6>
      </>,
    )

    const expectRes = Array(6)
      .fill(0)
      .reduce((res, item, i) => {
        const number = i + 1
        res += `\n<h${number} id="${number}">${title}</h${number}>\n`
        return res
      }, '')

    expect(res).toBe(expectRes)
  })
})
