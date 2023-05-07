import React, { H1, render, TableOfContents } from '@lib'
import { i18n } from 'i18n-pro'
import { initI18N } from '../utils'
import BaseChangeLog from './ChangeLog'

function V_0_8_6() {
  return (
    <BaseChangeLog
      version="0.8.6"
      date="2023-03-21"
      commandLine={{
        added: ['U', i18n('实现基础命令行工具')],
      }}
      api={{
        added: ['U', i18n('实现基础函数API和基础组件')],
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
          i18n(
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
        changed: ['U', i18n('更新{0}中示例效果图', ' `README` ')],
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
            i18n('修复以下场景生成目录在{0}中导航不正确', ' `Github` '),
            [
              'U',
              i18n('存在{0}包裹的内容', ' `[]` '),
              i18n('存在{0}包裹的内容', render(<code> `` </code>)),
            ],
          ],
        ],
      }}
      api={{
        added: ['U', i18n('添加用于生成锚点的工具方法：{0}', ' `getAnchor` ')],
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
            i18n('修复以下场景生成目录在{0}中导航不正确', ' `Github` '),
            [
              'U',
              i18n('存在{0}包裹的内容', ' `()` '),
              i18n('存在{0}包裹的内容', ' `（）` '),
              i18n('存在{0}包裹的内容', ' `**` '),
              i18n('存在{0}的内容', ' `?` '),
              i18n('存在{0}的内容', ' `？` '),
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
          i18n(
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
          i18n(
            '{0}相关组件{1}添加{2}属性',
            ' `Header` ',
            ' `H1-H6` ',
            ' `id` ',
          ),
        ],
      }}
      docs={{
        changed: [
          'U',
          i18n(
            '更新{0}文档格式，将独立区分{1}、{2}、{3}更新的内容',
            ' `Changelog` ',
            ` \`${i18n('命令行工具')}\` `,
            ' `API` ',
            ` \`${i18n('文档')}\` `,
          ),
        ],
        fixed: [
          'U',
          i18n(
            '修复{0}和{1}文档中相同标题生成的目录锚点跳转异常',
            ' `API` ',
            ' `Changelog` ',
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
      <H1 skip>{i18n('更新日志')}</H1>
      <TableOfContents text={i18n('目录')} open={false} />
      <V_0_11_0 />
      <V_0_10_1 />
      <V_0_10_0 />
      <V_0_9_1 />
      <V_0_9_0 />
      <V_0_8_6 />
    </>
  )
}
