import { join } from 'node:path'
import React, { H3, List, Table, H4 } from '@lib'
import CodeDemo from '../../CodeDemo'
import { getCodeString, getComponentColumns } from '../utils'
import Demo from './Demo'

export default function Layout() {
  return (
    <>
      <H3>{i18n('布局')}</H3>
      {i18n('这里提供布局相关的组件')}
      <H4>{i18n('组件列表')}</H4>
      <List items={['U', 'Break']} />
      <H4>{i18n('属性说明')}</H4>
      <Table
        columns={getComponentColumns()}
        data={[
          {
            name: '-',
            type: '-',
            required: '-',
            default: '-',
            description: '-',
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
