import React, { Break, H1 } from '@lib'

export default function Vision() {
  return (
    <>
      <H1>{t('愿景')}</H1>
      {t(
        '为了让通过{0}来编写{1}成为件轻松且愉快的事{2}',
        ' `JSX` ',
        ' `Markdown` ',
        '😄💪🏻',
      )}
    </>
  )
}
