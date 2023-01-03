import React, { Image } from '@lib'

export default function () {
  return (
    <>
      <Image
        title={i18n('图片标题')}
        alt={i18n('图片说明')}
        src="https://commonmark.org/help/images/favicon.png"
      />
    </>
  )
}
