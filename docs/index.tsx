import { i18n, setI18N } from 'i18n-pro'
import React, { TableOfContents } from '@lib'
import Top from './Top'
import Vision from './Vision'
import Feature from './Feature'
import LiveDemo from './LiveDemo'
import Principle from './Principle'
import Usage from './Usage'
import en from '../i18n/en.json'
import CommandLine from './CommandLine'

export default function Doc({ locale }) {
  setI18N({
    locale,
    langs: {
      en,
    },
  })
  global.i18n = i18n
  global.docLocale = locale

  return (
    <>
      <Top />
      <TableOfContents text={i18n('目录')} open={false} />
      <Vision />
      <Feature />
      <LiveDemo />
      <Principle />
      <Usage />
      <CommandLine />
    </>
  )
}
