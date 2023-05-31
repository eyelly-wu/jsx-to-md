import { join } from 'node:path'
import React from '@lib'
import Demo from './Demo'
import Template from '../Template'

export default function Layout() {
  return (
    <Template
      title={t('布局')}
      intro={t('这里提供布局相关的组件')}
      componentList={['U', 'Break', 'HorizontalRule']}
      propertyDescription={[
        {
          name: 'mark',
          type: "`'_'` \\| `'-'` \\| `'*'`",
          required: t('否'),
          default: "`'_'`",
          description: (
            <>
              {t('生成对应 Markdown 语法的标记符')}
              <br />
              <br />
              {t('该属性针对{0}无效', ' `Break` ')}
            </>
          ),
        },
      ]}
      demoCodePath={join(__dirname, 'Demo.tsx')}
      DemoComponent={Demo}
    />
  )
}
