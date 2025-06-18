import { join } from 'node:path'
import React from '@lib'
import Demo from './Demo'
import Template from '../Template'

export default function BlockQuote() {
  return (
    <Template
      title={t('引用块')}
      intro={null}
      componentList={['U', 'BlockQuote']}
      propertyDescription={[]}
      demoCodePath={join(__dirname, 'Demo.tsx')}
      DemoComponent={Demo}
    />
  )
}
