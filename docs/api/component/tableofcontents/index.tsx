import { join } from 'node:path'
import React, { H3, List, Table, H4 } from '@lib'
import CodeDemo from '../../CodeDemo'
import { getCodeString, getComponentColumns } from '../utils'
import Demo from './Demo'

export default function () {
  return (
    <>
      <H3>{i18n('目录')}</H3>
      {i18n('对应 Markdown 语法中的 `[TOC]`')}
      <H4>{i18n('组件列表')}</H4>
      <List items={['U', 'TableOfContents']} />
      <H4>{i18n('属性说明')}</H4>
      <Table
        columns={getComponentColumns()}
        data={[
          {
            name: 'text',
            type: 'string',
            required: 'false',
            default: 'Table of Contents',
            description: <>{i18n('目录显示文案')}</>,
          },
          {
            name: 'open',
            type: 'boolean',
            required: 'false',
            default: 'true',
            description: <>{i18n('是否默认展开目录')}</>,
          },
          {
            name: 'indent',
            type: "`Array<'&nbsp; \\| '&ensp; \\| '&emsp; \\| '&thinsp; \\| '&zwnj; \\| '&zwj;'>`",
            required: 'false',
            default: "`['&emsp;', '&emsp;']`",
            description: (
              <>
                {i18n('目录缩进')}
                <br />
                <br />
                {i18n('目录的层次结构是基于缩进来实现的')}
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
