import React, { Break, H1, UnorderedList, ListItem, Bold } from '@lib'

export default function Principle() {
  return (
    <>
      <Break />
      <H1>{i18n('原理')}</H1>
      {i18n('该库主要由两部分构成')}
      <Break />
      <UnorderedList>
        <ListItem>{i18n('命令行工具')}</ListItem>
        <ListItem>{i18n('函数API')}</ListItem>
      </UnorderedList>
      <Break />
      <Bold>{i18n('命令行工具')}</Bold>：
      {i18n('解析配置文件、执行 render 逻辑，最后生成 Markdown 文件')}
      <Break />
      <Break />
      <Bold>{i18n('函数API')}</Bold>：
      {i18n('提供对标 Markdown 语法的基础组件及 render 函数')}
      <Break />
      <UnorderedList>
        <ListItem>
          <Bold>{i18n('基础组件')}</Bold>：
          {i18n('用于替代 Markdown 语法的基础组件')}
        </ListItem>
        <ListItem>
          <Bold>{i18n('render 函数')}</Bold>：
          {i18n('渲染 JSX 编写的内容，返回生成的字符内容')}
        </ListItem>
      </UnorderedList>
      <Break />
      {i18n(
        '所以{0}和{1}这两者搭配使用效果更佳',
        ` \`${i18n(`命令行工具`)}\` `,
        ` \`${i18n(`函数API`)}\` `,
      )}
    </>
  )
}
