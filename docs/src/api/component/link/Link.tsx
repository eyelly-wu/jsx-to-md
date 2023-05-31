import { join } from 'node:path'
import React from '@lib'
import Demo from './Demo'
import Template from '../Template'

export default function Link() {
  return (
    <Template
      title={t('链接')}
      intro={null}
      componentList={['U', 'Link']}
      propertyDescription={[
        {
          name: 'href',
          type: 'string',
          required: 'true',
          default: '-',
          description: t('链接地址'),
        },
        {
          name: 'title',
          type: 'string',
          required: 'false',
          default: '-',
          description: t('鼠标悬浮显示的提示信息'),
        },
      ]}
      demoCodePath={join(__dirname, 'Demo.tsx')}
      DemoComponent={Demo}
    />
  )
}
