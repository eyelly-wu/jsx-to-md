import React, { H1, H2, H3, List, render, TableOfContents } from '@lib'
import { initI18N } from '../utils'

function VersionTitle({ version, date }: { version: string; date: string }) {
  return <H2>{`[${version}] - ${date}`}</H2>
}

enum ChangeType {
  Added = 'Added',
  Changed = 'Changed',
  Deprecated = 'Deprecated',
  Removed = 'Removed',
  Fixed = 'Fixed',
  Security = 'Security',
}

export const ChangeTypeImpl = ({ type }: { type: ChangeType }) => (
  <H3>{type}</H3>
)
export const Added = () => <ChangeTypeImpl type={ChangeType.Added} />
export const Changed = () => <ChangeTypeImpl type={ChangeType.Changed} />
export const Deprecated = () => <ChangeTypeImpl type={ChangeType.Deprecated} />
export const Removed = () => <ChangeTypeImpl type={ChangeType.Removed} />
export const Fixed = () => <ChangeTypeImpl type={ChangeType.Fixed} />
export const Security = () => <ChangeTypeImpl type={ChangeType.Security} />

function V_0_8_6() {
  return (
    <>
      <VersionTitle version="0.8.6" date="2023-03-21" />
      <Added />
      <List
        items={[
          'U',
          i18n('实现基础命令行工具'),
          i18n('实现基础函数API和基础组件'),
        ]}
      />
    </>
  )
}

function V_0_9_0() {
  return (
    <>
      <VersionTitle version="0.9.0" date="2023-04-02" />
      <Added />
      <List
        items={[
          'U',
          i18n(
            '新增命令参数{0},可用于指定{1}的编译方式，从而决定是否需要手动引入{2}',
            ' `--jsx` ',
            ' `JSX` ',
            ' `React` ',
          ),
        ]}
      />
    </>
  )
}

function V_0_9_1() {
  return (
    <>
      <VersionTitle version="0.9.1" date="2023-04-02" />
      <Added />
      <List items={['U', i18n('更新{0}中示例效果图', ' `README` ')]} />
    </>
  )
}

function V_0_10_0() {
  return (
    <>
      <VersionTitle version="0.10.0" date="2023-04-20" />
      <Added />
      <List
        items={['U', i18n('添加用于生成锚点的工具方法：{0}', ' `getAnchor` ')]}
      />
      <Fixed />
      <List
        items={[
          'U',
          [
            i18n('修复以下场景生成目录在{0}中导航不正确', ' `Github` '),
            [
              'U',
              i18n('存在{0}包裹的内容', ' `[]` '),
              i18n('存在{0}包裹的内容', render(<code> `` </code>)),
            ],
          ],
        ]}
      />
    </>
  )
}

function V_0_10_1() {
  return (
    <>
      <VersionTitle version="0.10.1" date="2023-05-03" />
      <Fixed />
      <List
        items={[
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
        ]}
      />
    </>
  )
}

export default function ChangeLog(props) {
  initI18N(props)

  return (
    <>
      <H1 skip>{i18n('更新日志')}</H1>
      <TableOfContents text={i18n('目录')} open={false} />
      <V_0_10_1 />
      <V_0_10_0 />
      <V_0_9_1 />
      <V_0_9_0 />
      <V_0_8_6 />
    </>
  )
}
