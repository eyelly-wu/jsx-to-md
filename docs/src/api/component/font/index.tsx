import { join } from 'node:path'
import React from '@lib'
import Demo from './Demo'
import Template from '../Template'

export default function Font() {
  return (
    <Template
      title={i18n('字体')}
      intro={null}
      componentList={['U', 'Italic', 'Bold', 'BoldItalic', 'StrikeThrough']}
      propertyDescription={[
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
              {i18n('该属性针对{0}无效', ' `StrikeThrough` ')}
            </>
          ),
        },
      ]}
      demoCodePath={join(__dirname, 'Demo.tsx')}
      DemoComponent={Demo}
    />
  )
}
