import React, { TaskList, render } from '../../src/lib'

describe('TaskList', () => {
  it('basic', () => {
    const res = render(
      <TaskList items={['done1', ['undo', 0], ['done2', 1]]} />,
    )
    const expectRes = `
- [x] done1
- [ ] undo
- [x] done2

`
    expect(res).toBe(expectRes)
  })

  it('nested', () => {
    const res = render(
      <TaskList
        items={[
          ['twoLevel', [['child1', 0], 'child2']],
          [
            'threeLevel',
            [
              ['child1', ['grandchild1', ['grandchild2', 0]]],
              [
                'child2',
                [
                  ['grandchild1', 0],
                  ['grandchild2', 0],
                ],
              ],
              ['child3', ['grandchild1', 'grandchild2']],
            ],
          ],
          ['twoLevelEmpty', []],
        ]}
      />,
    )
    const expectRes = `
- [ ] twoLevel
  - [ ] child1
  - [x] child2
- [ ] threeLevel
  - [ ] child1
    - [x] grandchild1
    - [ ] grandchild2
  - [ ] child2
    - [ ] grandchild1
    - [ ] grandchild2
  - [x] child3
    - [x] grandchild1
    - [x] grandchild2
- [x] twoLevelEmpty

`
    expect(res).toBe(expectRes)
  })
})
