import { join } from 'node:path'
import React, { H3, List, Table, H4 } from '@lib'
import CodeDemo from '../../CodeDemo'
import { getComponentColumns, getCodeString } from '../utils'
import Demo from './Demo'

export default function Code() {
  return (
    <>
      <H3>{i18n('代码')}</H3>
      <H4>{i18n('组件列表')}</H4>
      <List items={['U', 'InlineCode', 'CodeBlock']} />
      <H4>{i18n('属性说明')}</H4>
      <Table
        columns={getComponentColumns()}
        data={[
          {
            name: 'code',
            type: 'string',
            required: 'true',
            default: '-',
            description: (
              <>
                {i18n('代码内容')}
                <br />
                <br />
                该属性针对 `InlineCode` 无效
              </>
            ),
          },
          {
            name: 'langType',
            type: 'string',
            required: 'false',
            default: 'js',
            description: (
              <>
                {i18n('代码类型')}
                <br />
                <br />
                该属性针对 `InlineCode` 无效
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
