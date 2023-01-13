import { join } from 'node:path'
import React, { H3, CodeBlock, List, Table, H4, H5 } from '@lib'
import CodeDemo from '../../CodeDemo'
import { getCodeString, getComponentColumns } from '../utils'
import Demo from './Demo'

export default function () {
  return (
    <>
      <H3>{i18n('表格')}</H3>
      <H4>{i18n('组件列表')}</H4>
      <List items={['U', 'Table']} />
      <H4>{i18n('属性说明')}</H4>
      <Table
        columns={getComponentColumns()}
        data={[
          {
            name: 'columns',
            type: '[Column[]](#column)',
            required: 'true',
            default: '-',
            description: <>{i18n('列头配置')}</>,
          },
          {
            name: 'data',
            type: 'any[]',
            required: 'true',
            default: '-',
            description: <>{i18n('表体数据内容')}</>,
          },
        ]}
      />
      <H4>{i18n('类型说明')}</H4>
      <H5>Column</H5>
      <CodeBlock
        langType="ts"
        code={`
type Column = {
  title: string // ${i18n('表格标题')}
  fieldName: string // ${i18n('当前列字段名')}
  align?: 'left' | 'center' | 'right' // ${i18n('当前列文本对齐方式')}
}`}
      />
      <H4>{i18n('示例代码')}</H4>
      <CodeDemo
        code={getCodeString(join(__dirname, 'Demo.tsx'))}
        Component={Demo}
      />
    </>
  )
}
