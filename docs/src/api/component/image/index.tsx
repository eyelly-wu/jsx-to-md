import { join } from 'node:path'
import React from '@lib'
import Demo from './Demo'
import Template from '../Template'

export default function Image() {
  return (
    <Template
      title={i18n('图片')}
      intro={null}
      componentList={['U', 'Image']}
      propertyDescription={[
        {
          name: 'src',
          type: 'string',
          required: 'true',
          default: '-',
          description: i18n('图片链接地址'),
        },
        {
          name: 'alt',
          type: 'string',
          required: 'true',
          default: '-',
          description: i18n('图片加载异常显示的文案'),
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
