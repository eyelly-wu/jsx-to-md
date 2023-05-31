import React, { H1, List, Link } from '@lib'
import { getDocHref } from '../utils'

export default function DocLink() {
  return (
    <>
      <H1>{t('帮助文档')}</H1>
      <List
        items={[
          'U',
          <Link href={getDocHref('USAGE')}>{t('快速上手')}</Link>,
          <Link href={getDocHref('COMMAND_LINE')}>{t('命令行')}</Link>,
          <Link href={getDocHref('API')}>{t('API')}</Link>,
          <Link href={getDocHref('CHANGELOG')}>{t('更新日志')}</Link>,
        ]}
      />
    </>
  )
}
