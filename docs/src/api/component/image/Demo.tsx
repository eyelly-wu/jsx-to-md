import React, { Image } from '@lib'

export default function () {
  return (
    <>
      <Image
        title={t('图片标题')}
        alt={t('图片说明')}
        src="https://commonmark.org/help/images/favicon.png"
      />
    </>
  )
}
