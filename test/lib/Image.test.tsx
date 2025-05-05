import React, { Image, render } from '../../src/lib'

describe('Image', () => {
  const label = 'npm'
  const url = 'https://img.shields.io/npm/v/jsx-to-md.svg?style=flat-square'

  it('Single', () => {
    const res = render(
      <>
        <Image alt={label} src={url} />
      </>,
    )

    const expectRes = `![${label}](${url})`

    expect(res).toBe(expectRes)
  })

  it('Multiple', () => {
    const res = render(
      <>
        {Array(10)
          .fill(0)
          .map(() => (
            <Image alt={label} src={url} title={label} />
          ))}
      </>,
    )

    const expectRes = Array(10)
      .fill(0)
      .map(() => `![${label}](${url} "${label}")`)
      .join('')

    expect(res).toBe(expectRes)
  })
})
