import React, { H1, render, TableOfContents } from '../../src/lib'

describe('TableOfContents', () => {
  it('simple', () => {
    const res = render(
      <>
        <TableOfContents />
        <H1>A</H1>
        <h2>B</h2>
      </>,
    )
    const expectRes = `
<details open>
  <summary>Table of Contents</summary>

  [A](#a)<br/>
  &emsp;&emsp;[B](#b)<br/>

</details>

# A
<h2>B</h2>`
    expect(res).toBe(expectRes)
  })

  it('simple with props', () => {
    const res = render(
      <>
        <TableOfContents
          text="custom text"
          open={false}
          indent={['&emsp;', '&ensp;']}
        />
        <H1>A</H1>
        <h2>B</h2>
      </>,
    )
    const expectRes = `
<details >
  <summary>custom text</summary>

  [A](#a)<br/>
  &emsp;&ensp;[B](#b)<br/>

</details>

# A
<h2>B</h2>`
    expect(res).toBe(expectRes)
  })

  it('simple with multiple', () => {
    const res = render(
      <>
        <TableOfContents
          text="custom text"
          open={false}
          indent={['&emsp;', '&ensp;']}
        />
        <H1>A</H1>
        <h2>B</h2>
        <TableOfContents />
        <TableOfContents />
        <TableOfContents />
        <TableOfContents />
        <TableOfContents />
        <TableOfContents />
      </>,
    )
    const expectRes = `
<details >
  <summary>custom text</summary>

  [A](#a)<br/>
  &emsp;&ensp;[B](#b)<br/>

</details>

# A
<h2>B</h2>`
    expect(res).toBe(expectRes)
  })

  it('complex', () => {
    const res = render(
      <>
        <TableOfContents />
        <H1>A</H1>
        <h2>a</h2>
        <H1>B</H1>
        <h2>b</h2>
        <H1>C</H1>
        <h2>c</h2>
      </>,
    )
    const expectRes = `
<details open>
  <summary>Table of Contents</summary>

  [A](#a)<br/>
  &emsp;&emsp;[a](#a)<br/>
  [B](#b)<br/>
  &emsp;&emsp;[b](#b)<br/>
  [C](#c)<br/>
  &emsp;&emsp;[c](#c)<br/>

</details>

# A
<h2>a</h2>
# B
<h2>b</h2>
# C
<h2>c</h2>`
    expect(res).toBe(expectRes)
  })

  it('empty Heading', () => {
    const res = render(
      <>
        <TableOfContents />
        <H1></H1>
        <h2></h2>
      </>,
    )
    const expectRes = `
#${' '}
<h2></h2>`
    expect(res).toBe(expectRes)
  })

  it('skip', () => {
    const res = render(
      <>
        <TableOfContents />
        <H1 skip>A</H1>
        <h2 skip>B</h2>
      </>,
    )
    const expectRes = `
# A
<h2>B</h2>`
    expect(res).toBe(expectRes)
  })
})
