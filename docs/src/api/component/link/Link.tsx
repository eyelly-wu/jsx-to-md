import { join } from 'node:path'
import React from '@lib'
import Demo from './Demo'
import Template from '../Template'

export default function Link() {
  return (
    <Template
      title={i18n('链接')}
      intro={null}
      componentList={['U', 'Link']}
      propertyDescription={[
        {
          name: 'href',
          type: 'string',
          required: 'true',
          default: '-',
          description: i18n('链接地址'),
        },
        {
          name: 'title',
          type: 'string',
          required: 'false',
          default: '-',
          description: i18n('鼠标悬浮显示的提示信息'),
        },
      ]}
      demoCodePath={join(__dirname, 'Demo.tsx')}
      DemoComponent={Demo}
    />
  )
}
