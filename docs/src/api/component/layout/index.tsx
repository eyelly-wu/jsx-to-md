import { join } from 'node:path'
import React from '@lib'
import Demo from './Demo'
import Template from '../Template'

export default function Layout() {
  return (
    <Template
      title={i18n('布局')}
      intro={i18n('这里提供布局相关的组件')}
      componentList={['U', 'Break', 'HorizontalRule']}
      propertyDescription={[
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
      demoCodePath={join(__dirname, 'Demo.tsx')}
      DemoComponent={Demo}
    />
  )
}
