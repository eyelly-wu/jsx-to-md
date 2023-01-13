import { join } from 'node:path'
import React, { H3, List, Table, H4 } from '@lib'
import CodeDemo from '../../CodeDemo'
import { getCodeString, getComponentColumns } from '../utils'
import Demo from './Demo'

export default function Image() {
  return (
    <>
      <H3>{i18n('图片')}</H3>
      <H4>{i18n('组件列表')}</H4>
      <List items={['U', 'Image']} />
      <H4>{i18n('属性说明')}</H4>
      <Table
        columns={getComponentColumns()}
        data={[
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
      />
      <H4>{i18n('示例代码')}</H4>
      <CodeDemo
        code={getCodeString(join(__dirname, 'Demo.tsx'))}
        Component={Demo}
      />
    </>
  )
}
