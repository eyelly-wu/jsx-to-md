import { join } from 'node:path'
import React from '@lib'
import Demo from './Demo'
import Template from '../Template'

export default function BlockQuote() {
  return (
    <Template
      title={i18n('引用块')}
      intro={null}
      componentList={['U', 'BlockQuote']}
      propertyDescription={[
        {
          name: 'level',
          type: 'number',
          required: 'false',
          default: 1,
          description: <>{i18n('层级，适用于多层嵌套的场景')}</>,
        },
      ]}
      demoCodePath={join(__dirname, 'Demo.tsx')}
      DemoComponent={Demo}
    />
  )
}
