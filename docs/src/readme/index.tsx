import { i18n } from 'i18n-pro'
import React, { TableOfContents } from '@lib'
import Top from './Top'
import Vision from './Vision'
import Feature from './Feature'
import LiveDemo from './LiveDemo'
import Principle from './Principle'
import HelpDoc from './HelpDoc'
import License from './License'
import { initI18N } from '../utils'

export default function Doc(props) {
  initI18N(props)

  return (
    <>
      <Top />
      <TableOfContents text={i18n('目录')} open={false} />
      <Vision />
      <Feature />
      <LiveDemo />
      <Principle />
      <HelpDoc />
      <License />
    </>
  )
}
