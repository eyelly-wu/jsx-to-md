import React, { H1, H2, TaskList } from '@lib'

export default function TaskListDemo() {
  return (
    <>
      <H1>{i18n('任务列表')}</H1>
      <H2>{i18n('基础')}</H2>
      <TaskList items={['done1', ['undo', 0], ['done2', 1]]} />
      <H2>{i18n('嵌套')}</H2>
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
      />
    </>
  )
}
