import React, { Break, H1, List } from '@lib'

export default function Vision() {
  return (
    <>
      <Break />
      <H1>{t('特性')}</H1>
      <List
        items={[
          'U',
          t('提供渲染生成 Markdown 语法内容的基础组件'),
          t('实时渲染生成'),
          t('支持原生 HTML'),
          t('支持多个文档同时渲染'),
          t('支持生成目录'),
          t('支持异步渲染'),
        ]}
      />
    </>
  )
}
