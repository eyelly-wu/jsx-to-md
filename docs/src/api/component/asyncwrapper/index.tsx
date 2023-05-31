import { join } from 'node:path'
import React from '@lib'
import Demo from './Demo'
import Template from '../Template'

export default function () {
  return (
    <Template
      title={t('异步渲染包装器')}
      intro={t('用于支持异步渲染')}
      componentList={['U', 'AsyncWrapper']}
      propertyDescription={[
        {
          name: 'data',
          type: 'Promise&lt;T&gt;',
          required: 'true',
          default: '-',
          description: <>{t('异步加载的数据')}</>,
        },
      ]}
      demoCodePath={join(__dirname, 'Demo.tsx')}
      DemoComponent={Demo}
      isAsyncDemo
    />
  )
}
