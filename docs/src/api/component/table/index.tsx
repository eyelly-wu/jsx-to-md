import { join } from 'node:path'
import React, { CodeBlock, H5 } from '@lib'
import Demo from './Demo'
import Template from '../Template'

export default function () {
  return (
    <Template
      title={i18n('表格')}
      intro={null}
      componentList={['U', 'Table']}
      propertyDescription={[
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
      getTypeDescription={() => (
        <>
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
        </>
      )}
      demoCodePath={join(__dirname, 'Demo.tsx')}
      DemoComponent={Demo}
    />
  )
}
