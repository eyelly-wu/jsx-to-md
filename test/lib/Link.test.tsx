import React, { Link, render } from '../../src/lib'

describe('Link', () => {
  const label = 'npm'
  const url = 'https://img.shields.io/npm/v/jsx-to-md.svg?style=flat-square'

  it('Single', () => {
    const res = render(
      <>
        <Link title="title" href={url}>
          {label}
        </Link>
      </>,
    )

    expect(res).toBe(`[${label}](${url} "title")`)
  })

  it('Multiple', () => {
    const res = render(
      <>
        {Array(10)
          .fill(0)
          .map(() => (
            <Link title="title" href={url}>
              {label}
            </Link>
          ))}
      </>,
    )

    const expectRes = Array(10)
      .fill(0)
      .map(() => `[${label}](${url} "title")`)
      .join('')

    expect(res).toBe(expectRes)
  })

  it('anchor:Link', () => {
    const res = render(<Link href="#Achor">Anchor</Link>)

    const expectRes = '[Anchor](#achor)'

    expect(res).toBe(expectRes)
  })

  it('anchor:a', () => {
    const res = render(<a href="#Achor">Anchor</a>)

    const expectRes = '<a href="#achor">Anchor</a>'

    expect(res).toBe(expectRes)
  })
})
