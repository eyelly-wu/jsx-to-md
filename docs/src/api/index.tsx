import React, { H1 } from '@lib'
import FunctionList from './function'
import ComponentList from './component'

export default function API() {
  return (
    <>
      <H1>{i18n('API')}</H1>
      <FunctionList />
      <ComponentList />
    </>
  )
}
