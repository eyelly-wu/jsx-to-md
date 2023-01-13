import { join } from 'node:path'
import React, { H3, List, Table, H4 } from '@lib'
import CodeDemo from '../../CodeDemo'
import { getCodeString, getComponentColumns } from '../utils'
import Demo from './Demo'

export default function Link() {
  return (
    <>
      <H3>{i18n('链接')}</H3>
      <H4>{i18n('组件列表')}</H4>
      <List items={['U', 'Link']} />
      <H4>{i18n('属性说明')}</H4>
      <Table
        columns={getComponentColumns()}
        data={[
          {
            name: 'href',
            type: 'string',
            required: 'true',
            default: '-',
            description: i18n('链接地址'),
          },
          {
            name: 'title',
            type: 'string',
            required: 'false',
            default: '-',
            description: i18n('鼠标悬浮显示的提示信息'),
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
