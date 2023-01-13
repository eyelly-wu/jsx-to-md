import { join } from 'node:path'
import React, { H3, CodeBlock, List, Table, H4, H5 } from '@lib'
import CodeDemo from '../../CodeDemo'
import { getCodeString, getComponentColumns } from '../utils'
import Demo from './Demo'

export default function () {
  return (
    <>
      <H3>{i18n('任务清单')}</H3>
      <H4>{i18n('组件列表')}</H4>
      <List items={['U', 'TaskList']} />
      <H4>{i18n('属性说明')}</H4>
      <Table
        columns={getComponentColumns()}
        data={[
          {
            name: 'items',
            type: '[TaskItem[]](#taskitem)',
            required: 'true',
            default: '-',
            description: (
              <>
                {i18n('任务项配置')}
                <br />
                <br />
                {i18n(
                  '支持多层级任务，内部会根据子任务的状态计算出父任务的状态',
                )}
              </>
            ),
          },
        ]}
      />
      <H4>{i18n('类型说明')}</H4>
      <H5>TaskItem</H5>
      <CodeBlock
        langType="ts"
        code={`
// ${i18n('任务状态')} 0: ${i18n('未完成')}，1：${i18n('已完成')}
type TaskStatus = 0 | 1
// ${i18n('任务项，任务状态默认为已完成')}
type TaskItem = string | [string, TaskStatus] | [string, TaskItem[]]
`}
      />
      <H4>{i18n('示例代码')}</H4>
      <CodeDemo
        code={getCodeString(join(__dirname, 'Demo.tsx'))}
        Component={Demo}
      />
    </>
  )
}
