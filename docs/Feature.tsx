import React, { Break, H1, UnorderList, ListItem } from '@lib'

export default function Vision() {
  return (
    <>
      <Break />
      <H1>{i18n('特性')}</H1>
      <UnorderList>
        <ListItem>{i18n('实时渲染生成')}</ListItem>
        <ListItem>{i18n('支持原生 HTML')}</ListItem>
        <ListItem>{i18n('支持多个文档同时渲染')}</ListItem>
      </UnorderList>
    </>
  )
}
