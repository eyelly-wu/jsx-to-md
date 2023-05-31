import { join } from 'node:path'
import React from '@lib'
import Demo from './Demo'
import Template from '../Template'

export default function Code() {
  return (
    <Template
      title={t('代码')}
      intro={null}
      componentList={['U', 'InlineCode', 'CodeBlock']}
      propertyDescription={[
        {
          name: 'code',
          type: 'string',
          required: 'true',
          default: '-',
          description: (
            <>
              {t('代码内容')}
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
              {t('代码类型')}
              <br />
              <br />
              该属性针对 `InlineCode` 无效
            </>
          ),
        },
      ]}
      demoCodePath={join(__dirname, 'Demo.tsx')}
      DemoComponent={Demo}
    />
  )
}
