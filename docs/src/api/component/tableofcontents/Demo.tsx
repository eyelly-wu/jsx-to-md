import React, { Break, H1, H2, H3, H4, H5, H6, TableOfContents } from '@lib'

export default function () {
  const props = { skip: true }

  return (
    <>
      <TableOfContents text={t('目录')} indent={['&ensp;']} />
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6 id="Heading 6">Heading 6</H6>

      <h1>HTML Heading 1</h1>
      <h2>HTML Heading 2</h2>
      <h3>HTML Heading 3</h3>
      <h4>HTML Heading 4</h4>
      <h5>HTML Heading 5</h5>
      <h6 id="HTML Heading 6">HTML Heading 6</h6>
      <Break />
      {/**${t('跳过生成目录')}*/}
      <H1 skip>Skip Heading 1</H1>

      <h1 {...props}>Skip HTML Heading 1</h1>
    </>
  )
}
