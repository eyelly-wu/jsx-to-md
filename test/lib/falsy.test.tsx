import React, { render } from '../../src/lib'

describe('falsy', () => {
  type Test = [
    string, // desc
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    () => any, // res
    string, // expectRes
  ]

  const TempString = () => ''
  const TempNull = () => null
  const TempFalse = () => false
  const TempZero = () => 0

  const tests: Test[] = [
    ['empty string', TempString, ''],
    ['null', TempNull, ''],
    ['false', TempFalse, ''],
    ['0', TempZero, ''],
  ]

  it.each(tests)('%s', (desc, Func, expectRes) => {
    const res = render(<Func />)
    expect(res).toBe(expectRes)
  })
})
