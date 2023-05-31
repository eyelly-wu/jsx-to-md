import { join } from 'node:path'
import React, { CodeBlock, H5 } from '@lib'
import Demo from './Demo'
import Template from '../Template'

export default function () {
  return (
    <Template
      title={t('任务清单')}
      intro={null}
      componentList={['U', 'TaskList']}
      propertyDescription={[
        {
          name: 'items',
          type: '[TaskItem[]](#taskitem)',
          required: 'true',
          default: '-',
          description: (
            <>
              {t('任务项配置')}
              <br />
              <br />
              {t('支持多层级任务，内部会根据子任务的状态计算出父任务的状态')}
            </>
          ),
        },
      ]}
      getTypeDescription={() => (
        <>
          <H5>TaskItem</H5>
          <CodeBlock
            langType="ts"
            code={`
// ${t('任务状态')} 0: ${t('未完成')}，1：${t('已完成')}
type TaskStatus = 0 | 1
// ${t('任务项，任务状态默认为已完成')}
type TaskItem = string | [string, TaskStatus] | [string, TaskItem[]]
`}
          />
        </>
      )}
      demoCodePath={join(__dirname, 'Demo.tsx')}
      DemoComponent={Demo}
    />
  )
}
