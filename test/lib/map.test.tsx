import React, { H1, render } from '../../src/lib'

describe('map render', () => {
  it('simple', () => {
    const arr = ['a', 'b', 'c']

    const Func = (props: { items: string[] }) => (
      <>
        {props.items.map((item) => (
          <H1>{item}</H1>
        ))}
      </>
    )

    const res = render(<Func items={arr} />)

    const expectRes = `
# a

# b

# c
`

    expect(res).toBe(expectRes)
  })

  it('simple2', () => {
    const arr = ['a', 'b', 'c']
    const arrListMap = {
      a: [1],
      b: [4],
      c: [7],
    }

    const Func = (props: { items: string[] }) => (
      <>
        {props.items.map((item) => {
          const list = arrListMap[item]

          if (!list) {
            return <H1>{item}</H1>
          }

          return <Func items={list} />
        })}
      </>
    )

    const res = render(<Func items={arr} />)

    const expectRes = `
# 1

# 4

# 7
`

    console.info({ res, expectRes })

    expect(res).toBe(expectRes)
  })
})
