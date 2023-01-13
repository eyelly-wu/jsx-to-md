import { join } from 'node:path'
import React, { H3, List, Table, H4 } from '@lib'
import CodeDemo from '../../CodeDemo'
import { getComponentColumns, getCodeString } from '../utils'
import Demo from './Demo'

export default function BlockQuote() {
  return (
    <>
      <H3>{i18n('引用块')}</H3>
      <H4>{i18n('组件列表')}</H4>
      <List items={['U', 'BlockQuote']} />
      <H4>{i18n('属性说明')}</H4>
      <Table
        columns={getComponentColumns()}
        data={[
          {
            name: 'level',
            type: 'number',
            required: 'false',
            default: 1,
            description: <>{i18n('层级，适用于多层嵌套的场景')}</>,
          },
        ]}
      />
      <H4>{i18n('示例代码')}</H4>
      <CodeDemo
        code={getCodeString(join(__dirname, 'Demo.tsx'))}
        Component={Demo}
      />
    </>
  )
}
