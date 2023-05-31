import React, { H1, TableOfContents } from '@lib'
import FunctionList from './function'
import ComponentList from './component'
import { initI18N } from '../utils'

export default function API(props) {
  initI18N(props)

  return (
    <>
      <H1 skip>{t('API')}</H1>
      <TableOfContents text={t('目录')} open={false} />
      <FunctionList />
      <ComponentList />
    </>
  )
}
