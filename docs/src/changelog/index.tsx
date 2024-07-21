import React, { CodeBlock, H1, render, TableOfContents } from '@lib'
import { initI18N } from '../utils'
import BaseChangeLog from './ChangeLog'

function V_0_8_6() {
  return (
    <BaseChangeLog
      version="0.8.6"
      date="2023-03-21"
      commandLine={{
        added: ['U', t('实现基础命令行工具')],
      }}
      api={{
        added: ['U', t('实现基础函数API和基础组件')],
      }}
    />
  )
}

function V_0_9_0() {
  return (
    <BaseChangeLog
      version="0.9.0"
      date="2023-04-02"
      commandLine={{
        added: [
          'U',
          t(
            '新增命令参数{0},可用于指定{1}的编译方式，从而决定是否需要手动引入{2}',
            ' `--jsx` ',
            ' `JSX` ',
            ' `React` ',
          ),
        ],
      }}
    />
  )
}

function V_0_9_1() {
  return (
    <BaseChangeLog
      version="0.9.1"
      date="2023-04-02"
      docs={{
        changed: ['U', t('更新{0}中示例效果图', ' `README` ')],
      }}
    />
  )
}

function V_0_10_0() {
  return (
    <BaseChangeLog
      version="0.10.0"
      date="2023-04-20"
      commandLine={{
        fixed: [
          'U',
          [
            t('修复以下场景生成目录在{0}中导航不正确', ' `Github` '),
            [
              'U',
              t('存在{0}包裹的内容', ' `[]` '),
              t('存在{0}包裹的内容', render(<code> `` </code>)),
            ],
          ],
        ],
      }}
      api={{
        added: ['U', t('添加用于生成锚点的工具方法：{0}', ' `getAnchor` ')],
      }}
    />
  )
}

function V_0_10_1() {
  return (
    <BaseChangeLog
      version="0.10.1"
      date="2023-05-03"
      commandLine={{
        fixed: [
          'U',
          [
            t('修复以下场景生成目录在{0}中导航不正确', ' `Github` '),
            [
              'U',
              t('存在{0}包裹的内容', ' `()` '),
              t('存在{0}包裹的内容', ' `（）` '),
              t('存在{0}包裹的内容', ' `**` '),
              t('存在{0}的内容', ' `?` '),
              t('存在{0}的内容', ' `？` '),
            ],
          ],
        ],
      }}
    />
  )
}

function V_0_11_0() {
  return (
    <BaseChangeLog
      version="0.11.0"
      date="2023-05-07"
      commandLine={{
        added: [
          'U',
          t(
            '优化目录的生成，支持通过识别{0}和{1}中的{2}属性来生成锚点链接',
            ' `H1-H6` ',
            ' `h1-h6` ',
            ' `id` ',
          ),
        ],
      }}
      api={{
        added: [
          'U',
          t('{0}相关组件{1}添加{2}属性', ' `Header` ', ' `H1-H6` ', ' `id` '),
        ],
      }}
      docs={{
        changed: [
          'U',
          t(
            '更新{0}文档格式，将独立区分{1}、{2}、{3}更新的内容',
            ' `Changelog` ',
            ` \`${t('命令行工具')}\` `,
            ' `API` ',
            ` \`${t('文档')}\` `,
          ),
        ],
        fixed: [
          'U',
          t(
            '修复{0}和{1}文档中相同标题生成的目录锚点跳转异常',
            ' `API` ',
            ' `Changelog` ',
          ),
        ],
      }}
    />
  )
}

function V_0_11_1() {
  return (
    <BaseChangeLog
      version="0.11.1"
      date="2023-05-22"
      api={{
        fixed: [
          'U',
          [
            t('修复以下场景生成目录在{0}中导航不正确', ' `Github` '),
            ['U', t('存在{0}包裹非英文内容', render(<code>``</code>))],
          ],
        ],
      }}
    />
  )
}

function V_0_11_2() {
  return (
    <BaseChangeLog
      version="0.11.2"
      date="2023-05-23"
      api={{
        fixed: [
          'U',
          [
            t('修复以下场景生成目录在{0}中导航不正确', ' `Github` '),
            [
              'U',
              t('在标题结尾处存在{0}包裹非英文内容', render(<code>``</code>)),
            ],
          ],
        ],
      }}
    />
  )
}

function V_0_11_3() {
  return (
    <BaseChangeLog
      version="0.11.3"
      date="2023-06-02"
      api={{
        fixed: [
          'U',
          [
            t('修复以下场景生成目录在{0}中导航不正确', ' `Github` '),
            [
              'U',
              t('标题中存在{0}', render(<code>'</code>)),
              t(
                '标题中存在{0}类似文案',
                `x&nbsp;&nbsp;${render(<code>`xxx`</code>)}`,
              ),
            ],
          ],
        ],
      }}
    />
  )
}

function V_0_11_4() {
  return (
    <BaseChangeLog
      version="0.11.4"
      date="2023-08-29"
      api={{
        fixed: [
          'U',
          [
            t('修复以下场景生成目录在{0}中导航不正确', ' `Github` '),
            [
              'U',
              t('标题中存在{0}', render(<code>,</code>)),
              t('标题中存在{0}', render(<code>，</code>)),
            ],
          ],
        ],
      }}
    />
  )
}

function V_0_11_5() {
  return (
    <BaseChangeLog
      version="0.11.5"
      date="2024-07-21"
      api={{
        fixed: [
          'U',
          t(
            '修复当设置命令行参数{0}为{1}执行{2}命令时，会导致类似如下场景列表渲染为空{3}',
            ' `--jsx` ',
            ' `classical` ',
            ' `run` ',
            render(
              <CodeBlock
                code={`
<div>
  {['a', 'b', 'c'].map(item=> <span>{item}</span>)}
</div>

// ${t('上述节点渲染结果对比：')}
// ${t('bug表现：{0}', '<div></div>')}
// ${t(
                  '正确的结果：{0}',
                  `<div><span>a</span><span>b</span><span>c</span></div>`,
                )}`}
              />,
            ),
          ),
        ],
      }}
    />
  )
}

export default function ChangeLog(props) {
  initI18N(props)

  return (
    <>
      <H1 skip>{t('更新日志')}</H1>
      <TableOfContents text={t('目录')} open={false} />
      <V_0_11_5 />
      <V_0_11_4 />
      <V_0_11_3 />
      <V_0_11_2 />
      <V_0_11_1 />
      <V_0_11_0 />
      <V_0_10_1 />
      <V_0_10_0 />
      <V_0_9_1 />
      <V_0_9_0 />
      <V_0_8_6 />
    </>
  )
}
