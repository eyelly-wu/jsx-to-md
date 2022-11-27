import { i18n, setI18N } from 'i18n-pro'
import React from '@lib'
import Top from './Top'
import Vision from './Vision'
import Feature from './Feature'
import LiveDemo from './LiveDemo'
import Principle from './Principle'
import Usage from './Usage'
import en from '../i18n/en.json'

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
      <Vision />
      <Feature />
      <LiveDemo />
      <Principle />
      <Usage />
    </>
  )
}
