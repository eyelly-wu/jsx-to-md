import { join } from 'node:path'
import React, { CodeBlock, H5 } from '@lib'
import Demo from './Demo'
import Template from '../Template'

export default function () {
  return (
    <Template
      title={t('列表')}
      intro={null}
      componentList={[
        'U',
        [t('语义型'), ['U', 'OderList', 'UnorderedList', 'ListItem']],
        [t('简易型'), ['U', 'List']],
      ]}
      propertyDescription={[
        {
          name: 'level',
          type: 'number',
          required: 'false',
          default: '1',
          description: (
            <>
              {t('嵌套层级')}
              <br />
              <br />
              {t('适用于 `OderList`、`UnorderedList`')}
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
              {t('生成对应 Markdown 语法的标记符')}
              <br />
              <br />
              {t('适用于 `OderList`、`UnorderedList`')}
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
              {t('列表项配置')}
              <br />
              <br />
              {t('适用于 `List`')}
            </>
          ),
        },
      ]}
      getTypeDescription={() => (
        <>
          <H5>Items</H5>
          {t(
            '正是由于如下复杂的嵌套类型，使得 `List` 可以通过简洁的语法拼凑出复杂的嵌套列表',
          )}
          <CodeBlock
            langType="ts"
            code={`
/**
 * ${t('列表类型')}
 * ${t('{0}标识有序列表', 'O | o')}
 * ${t('{0}标识无序列表', 'U | u')}
 */
type ListType = 'O' | 'o' | 'U' | 'u'

/**
 * ${t('列表项内容')}
 */
type ListItem = string | JSX.Element | [string, Items]

/**
 * ${t('列表项内容')}
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
