import React, { Italic, Bold, BoldItalic, StrikeThrough, Break } from '@lib'

export default function () {
  return (
    <>
      <Italic>{i18n('斜体')}</Italic>
      <Break />
      <Bold>{i18n('粗体')}</Bold>
      <Break />
      <BoldItalic>{i18n('倾斜加粗')}</BoldItalic>
      <Break />
      <StrikeThrough>{i18n('删除线')}</StrikeThrough>
    </>
  )
}
