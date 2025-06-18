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
      '2025-06-18 14:56:42': '#2025-06-18-145642',
      '2025-06-18 14：56：42': '#2025-06-18-145642',
    }
    Object.entries(textExpectResMap).forEach(([t, r]) => {
      expect(getAnchor(t)).toBe(r)
    })
  })
})
