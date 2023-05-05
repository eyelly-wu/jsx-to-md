import { join } from 'node:path'
import React from '@lib'
import Demo from './Demo'
import Template from '../Template'

export default function Header() {
  return (
    <Template
      title={i18n('标题')}
      intro={i18n('对应 HTML 中 h1-h6 标签，使用方式也类似')}
      componentList={['U', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6']}
      propertyDescription={[
        {
          name: 'skip',
          type: 'boolean',
          required: 'false',
          default: 'false',
          description: <>{i18n('控制当前标题是否跳过生成目录')}</>,
        },
        {
          name: 'id',
          type: 'string',
          required: 'false',
          default: '-',
          description: (
            <>
              {i18n(
                '类似于{0}中的{1}属性，可用于生成独立的锚点',
                ' `h1-h6` ',
                ' `id` ',
              )}
              <br />
              <br />
              {i18n(
                '如果设置该属性，最终生成的字符将不再是{0}语法，而是{1}语法',
                ' `Markdown` ',
                ' `HTML` ',
              )}
            </>
          ),
        },
      ]}
      demoCodePath={join(__dirname, 'Demo.tsx')}
      DemoComponent={Demo}
    />
  )
}
