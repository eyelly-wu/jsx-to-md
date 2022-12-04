import React, { Break, H1, List } from '@lib'

export default function Vision() {
  return (
    <>
      <Break />
      <H1>{i18n('特性')}</H1>
      <List
        items={[
          'U',
          i18n('实时渲染生成'),
          i18n('支持原生 HTML'),
          i18n('支持多个文档同时渲染'),
        ]}
      />
    </>
  )
}
