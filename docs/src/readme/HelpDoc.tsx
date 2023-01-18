import React, { H1, List, Link } from '@lib'
import { getDocHref } from '../utils'

export default function DocLink() {
  return (
    <>
      <H1>{i18n('帮助文档')}</H1>
      <List
        items={[
          'U',
          <Link href={getDocHref('USAGE')}>{i18n('快速上手')}</Link>,
          <Link href={getDocHref('COMMAND_LINE')}>{i18n('命令行')}</Link>,
          <Link href={getDocHref('API')}>{i18n('API')}</Link>,
          <Link href={getDocHref('CHANGELOG')}>{i18n('更新日志')}</Link>,
        ]}
      />
    </>
  )
}
