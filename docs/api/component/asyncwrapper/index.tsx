import { join } from 'node:path'
import React, { H3, List, Table, H4 } from '@lib'
import CodeDemo from '../../CodeDemo'
import { getCodeString, getComponentColumns } from '../utils'
import Demo from './Demo'

export default function () {
  return (
    <>
      <H3>{i18n('异步渲染包装器')}</H3>
      {i18n('用于支持异步渲染')}
      <H4>{i18n('组件列表')}</H4>
      <List items={['U', 'AsyncWrapper']} />
      <H4>{i18n('属性说明')}</H4>
      <Table
        columns={getComponentColumns()}
        data={[
          {
            name: 'data',
            type: 'Promise<T>',
            required: 'true',
            default: '-',
            description: <>{i18n('异步加载的数据')}</>,
          },
        ]}
      />
      <H4>{i18n('示例代码')}</H4>
      <CodeDemo
        code={getCodeString(join(__dirname, 'Demo.tsx'))}
        Component={Demo}
        isAsync
      />
    </>
  )
}
