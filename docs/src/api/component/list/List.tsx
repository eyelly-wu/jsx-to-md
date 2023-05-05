import { join } from 'node:path'
import React, { CodeBlock, H5 } from '@lib'
import Demo from './Demo'
import Template from '../Template'

export default function () {
  return (
    <Template
      title={i18n('列表')}
      intro={null}
      componentList={[
        'U',
        [i18n('语义型'), ['U', 'OderList', 'UnorderedList', 'ListItem']],
        [i18n('简易型'), ['U', 'List']],
      ]}
      propertyDescription={[
        {
          name: 'level',
          type: 'number',
          required: 'false',
          default: '1',
          description: (
            <>
              {i18n('嵌套层级')}
              <br />
              <br />
              {i18n('适用于 `OderList`、`UnorderedList`')}
            </>
          ),
        },
        {
          name: 'mark',
          type: '`_` \\| `*`',
          required: 'false',
          default: '*',
          description: (
            <>
              {i18n('生成对应 Markdown 语法的标记符')}
              <br />
              <br />
              {i18n('适用于 `OderList`、`UnorderedList`')}
            </>
          ),
        },
        {
          name: 'items',
          type: '[Items](#items)',
          required: 'false',
          default: '-',
          description: (
            <>
              {i18n('列表项配置')}
              <br />
              <br />
              {i18n('适用于 `List`')}
            </>
          ),
        },
      ]}
      getTypeDescription={() => (
        <>
          <H5>Items</H5>
          {i18n(
            '正是由于如下复杂的嵌套类型，使得 `List` 可以通过简洁的语法拼凑出复杂的嵌套列表',
          )}
          <CodeBlock
            langType="ts"
            code={`
/**
 * ${i18n('列表类型')}
 * ${i18n('{0}标识有序列表', 'O | o')}
 * ${i18n('{0}标识无序列表', 'U | u')}
 */
type ListType = 'O' | 'o' | 'U' | 'u'

/**
 * ${i18n('列表项内容')}
 */
type ListItem = string | JSX.Element | [string, Items]

/**
 * ${i18n('列表项内容')}
 */
type Items =
  | [ListType, ...string[]]
  | [ListType, ListItem]
  | [ListType, ListItem, ListItem]
  | [ListType, ListItem, ListItem, ListItem]
  | [ListType, ListItem, ListItem, ListItem, ListItem]
  | [ListType, ListItem, ListItem, ListItem, ListItem, ListItem]
  | [ListType, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem]
  | [
      ListType,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
    ]
  | [
      ListType,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
    ]
  | [
      ListType,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
    ]
  | [
      ListType,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
    ]
      `}
          />
        </>
      )}
      demoCodePath={join(__dirname, 'Demo.tsx')}
      DemoComponent={Demo}
    />
  )
}
