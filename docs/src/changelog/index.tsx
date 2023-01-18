import React, { H1, H2, H3, List, TableOfContents } from '@lib'
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

function V_1_0_0() {
  return (
    <>
      <VersionTitle version="1.0.0" date="2023-0x-xx" />
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

export default function ChangeLog(props) {
  initI18N(props)

  return (
    <>
      <H1 skip>{i18n('更新日志')}</H1>
      <TableOfContents text={i18n('目录')} open={false} />
      <V_1_0_0 />
    </>
  )
}
