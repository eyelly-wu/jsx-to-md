import React, { H1, H2, H3, H4, H5, H6, TableOfContents } from '@lib'

export default function () {
  return (
    <>
      <TableOfContents text={i18n('目录')} />
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6>Heading 6</H6>
      {/**${i18n('跳过生成目录')}*/}
      <H1 skip>Skip Heading 1</H1>
      <H1 id="id">Custom ID</H1>
    </>
  )
}
