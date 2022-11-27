import React, { Break, H1, UnorderList, ListItem, Bold } from '@lib'

export default function Principle() {
  return (
    <>
      <Break />
      <H1>{i18n('原理')}</H1>
      {i18n('该库主要由两部分构成')}
      <Break />
      <UnorderList>
        <ListItem>{i18n('命令行工具')}</ListItem>
        <ListItem>{i18n('函数API')}</ListItem>
      </UnorderList>
      <Break />
      <Bold>{i18n('命令行工具')}</Bold>：
      {i18n('解析配置文件、执行render逻辑，最后生成Markdown文件')}
      <Break />
      <Break />
      <Bold>{i18n('函数API')}</Bold>：
      {i18n('提供对标Markdown语法的基础组件及render函数')}
      <Break />
      <UnorderList>
        <ListItem>
          <Bold>{i18n('基础组件')}</Bold>：
          {i18n('用于替代Markdown语法的基础组件')}
        </ListItem>
        <ListItem>
          <Bold>{i18n('render函数')}</Bold>：
          {i18n('渲染JSX编写的内容，返回生成的字符内容')}
        </ListItem>
      </UnorderList>
      <Break />
      {i18n(
        '所以{0}和{1}这两者搭配使用效果更佳',
        ` \`${i18n(`命令行工具`)}\` `,
        ` \`${i18n(`函数API`)}\` `,
      )}
    </>
  )
}
