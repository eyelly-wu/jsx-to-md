import { join } from 'node:path'
import React, { CodeBlock, H5 } from '@lib'
import Demo from './Demo'
import Template from '../Template'

export default function () {
  return (
    <Template
      title={t('表格')}
      intro={null}
      componentList={['U', 'Table']}
      propertyDescription={[
        {
          name: 'columns',
          type: '[Column[]](#column)',
          required: 'true',
          default: '-',
          description: <>{t('列头配置')}</>,
        },
        {
          name: 'data',
          type: 'any[]',
          required: 'true',
          default: '-',
          description: <>{t('表体数据内容')}</>,
        },
      ]}
      getTypeDescription={() => (
        <>
          <H5>Column</H5>
          <CodeBlock
            langType="ts"
            code={`
type Column = {
  title: string // ${t('表格标题')}
  fieldName: string // ${t('当前列字段名')}
  align?: 'left' | 'center' | 'right' // ${t('当前列文本对齐方式')}
}`}
          />
        </>
      )}
      demoCodePath={join(__dirname, 'Demo.tsx')}
      DemoComponent={Demo}
    />
  )
}
