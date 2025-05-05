import { getAnchor } from '../../src/lib'

describe('utils', () => {
  it('getAnchor', () => {
    const textExpectResMap = {
      ' ': '#',
      ' a': '#a',
      '  a  ': '#a',
      '  [a]  ': '#a',
      'a  `a`  a': '#a--a--a',
      'a `a` a': '#a-a-a',
      'a `中文` a': '#a-中文-a',
      'a  `中文`  a': '#a--中文--a',
      'a.a': '#aa',
      '**a**': '#a',
      '(a)': '#a',
      '（a）': '#a',
      'a?': '#a',
      'a？': '#a',
      'a  `中文`    ': '#a--中文',
      'a  `abc`   ': '#a--abc',
      "a's": '#as',
      'a,b': '#ab',
      'a,，，，,b': '#ab',
    }
    Object.entries(textExpectResMap).forEach(([t, r]) => {
      expect(getAnchor(t)).toBe(r)
    })
  })
})
