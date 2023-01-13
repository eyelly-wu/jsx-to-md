import React, { H2 } from '@lib'
import Layout from './layout'
import Header from './header'
import Font from './font'
import BlockQuote from './blockquote'
import Code from './code'
import Image from './image'
import Link from './link/Link'
import List from './list/List'
import Table from './table'
import TaskList from './tasklist'
import TableOfContents from './tableofcontents'
import AsyncWrapper from './asyncwrapper'

export default function ComponentList() {
  return (
    <>
      <H2>{i18n('组件')}</H2>
      <Layout />
      <Header />
      <Font />
      <BlockQuote />
      <Code />
      <Image />
      <Link />
      <List />
      <Table />
      <TaskList />
      <TableOfContents />
      <AsyncWrapper />
    </>
  )
}
