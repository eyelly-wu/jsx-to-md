import React, { H1, renderAsync, AsyncWrapper } from '../../src/lib'

describe('Async Render', () => {
  type Data = {
    name: string
  }
  const asyncData1 = new Promise<Data>((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'jsx-to-md',
      })
    }, 50)
  })

  const asyncData2 = new Promise<Data>((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'jsx-to-md',
      })
    }, 100)
  })

  it('basic', async () => {
    const res = await renderAsync(
      <AsyncWrapper data={asyncData1}>
        {({ name }: Data) => <H1>Hi {name}</H1>}
      </AsyncWrapper>,
    )

    const expectRes = `
# Hi jsx-to-md
`

    expect(res).toBe(expectRes)
  })

  it('nested', async () => {
    const res = await renderAsync(
      <AsyncWrapper data={asyncData1}>
        {({ name }: Data) => (
          <>
            nested test
            <H1>Hi {name}</H1>
            <AsyncWrapper data={asyncData2}>
              {({ name }: Data) => <h2>this is {name}</h2>}
            </AsyncWrapper>
          </>
        )}
      </AsyncWrapper>,
    )

    const expectRes = `nested test
# Hi jsx-to-md
<h2>this is jsx-to-md</h2>`

    expect(res).toBe(expectRes)
  })
})
