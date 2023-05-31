import React, { Italic, Bold, BoldItalic, StrikeThrough, Break } from '@lib'

export default function () {
  return (
    <>
      <Italic>{t('斜体')}</Italic>
      <Break />
      <Bold>{t('粗体')}</Bold>
      <Break />
      <BoldItalic>{t('倾斜加粗')}</BoldItalic>
      <Break />
      <StrikeThrough>{t('删除线')}</StrikeThrough>
    </>
  )
}
