import React, { BlockQuote, Break } from '@lib'

export default function () {
  return (
    <>
      <BlockQuote>{t('普通引用')}</BlockQuote>
      <Break />
      <BlockQuote>
        {t('嵌套引用')}
        <BlockQuote>
          Nest Block Quote Text1
          <BlockQuote>
            Nest Block Quote Text2
            <BlockQuote>Nest Block Quote Text3</BlockQuote>
          </BlockQuote>
        </BlockQuote>
      </BlockQuote>
    </>
  )
}
