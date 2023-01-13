import { join } from 'node:path'
import React, { H3, List, Table, H4 } from '@lib'
import CodeDemo from '../../CodeDemo'
import { getCodeString, getComponentColumns } from '../utils'
import Demo from './Demo'

export default function Font() {
  return (
    <>
      <H3>{i18n('字体')}</H3>
      <H4>{i18n('组件列表')}</H4>
      <List items={['U', 'Italic', 'Bold', 'BoldItalic', 'StrikeThrough']} />
      <H4>{i18n('属性说明')}</H4>
      <Table
        columns={getComponentColumns()}
        data={[
          {
            name: 'mark',
            type: `'*' \\| '_'`,
            required: 'false',
            default: `'*'`,
            description: (
              <>
                {i18n('生成对应 Markdown 语法的标记符')}
                <br />
                <br />
                该属性针对 `StrikeThrough` 无效
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
