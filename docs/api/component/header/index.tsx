import { join } from 'node:path'
import React, { H3, List, Table, H4 } from '@lib'
import CodeDemo from '../../CodeDemo'
import { getCodeString, getComponentColumns } from '../utils'
import Demo from './Demo'

export default function Header() {
  return (
    <>
      <H3>{i18n('标题')}</H3>
      {i18n('对应 HTML 中 h1-h6 标签，使用方式也类似')}
      <H4>{i18n('组件列表')}</H4>
      <List items={['U', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6']} />
      <H4>{i18n('属性说明')}</H4>
      <Table
        columns={getComponentColumns()}
        data={[
          {
            name: 'skip',
            type: 'boolean',
            required: 'false',
            default: 'false',
            description: <>{i18n('控制当前标题是否跳过生成目录')}</>,
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
