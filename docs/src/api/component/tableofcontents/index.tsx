import { join } from 'node:path'
import React from '@lib'
import Demo from './Demo'
import Template from '../Template'

export default function () {
  return (
    <Template
      title={i18n('目录')}
      intro={i18n('对应{0}语法中的{1}', ' `Markdown` ', ' `[TOC]` ')}
      componentList={['U', 'TableOfContents']}
      propertyDescription={[
        {
          name: 'text',
          type: 'string',
          required: 'false',
          default: 'Table of Contents',
          description: <>{i18n('目录显示文案')}</>,
        },
        {
          name: 'open',
          type: 'boolean',
          required: 'false',
          default: 'true',
          description: <>{i18n('是否默认展开目录')}</>,
        },
        {
          name: 'indent',
          type: "`Array<'&nbsp; \\| '&ensp; \\| '&emsp; \\| '&thinsp; \\| '&zwnj; \\| '&zwj;'>`",
          required: 'false',
          default: "`['&emsp;', '&emsp;']`",
          description: (
            <>
              {i18n('目录缩进')}
              <br />
              <br />
              {i18n('目录的层次结构是基于缩进来实现的')}
            </>
          ),
        },
      ]}
      demoCodePath={join(__dirname, 'Demo.tsx')}
      DemoComponent={Demo}
    />
  )
}
