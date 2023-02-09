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
      <List items={['U', 'Break', 'HorizontalRule']} />
      <H4>{i18n('属性说明')}</H4>
      <Table
        columns={getComponentColumns()}
        data={[
          {
            name: 'mark',
            type: "`'_'` \\| `'-'` \\| `'*'`",
            required: i18n('否'),
            default: "`'_'`",
            description: (
              <>
                {i18n('生成对应 Markdown 语法的标记符')}
                <br />
                <br />
                {i18n('该属性针对{0}无效', ' `Break` ')}
              </>
            ),
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
