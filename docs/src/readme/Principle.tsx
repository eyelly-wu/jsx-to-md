import React, { Break, H1, UnorderedList, ListItem, Bold } from '@lib'

export default function Principle() {
  return (
    <>
      <Break />
      <H1>{t('原理')}</H1>
      {t('该库主要由两部分构成')}
      <Break />
      <UnorderedList>
        <ListItem>{t('命令行工具')}</ListItem>
        <ListItem>{t('函数API')}</ListItem>
      </UnorderedList>
      <Break />
      <Bold>{t('命令行工具')}</Bold>：
      {t('解析配置文件、执行 render 逻辑，最后生成 Markdown 文件')}
      <Break />
      <Break />
      <Bold>{t('函数API')}</Bold>：
      {t('提供对标 Markdown 语法的基础组件及 render 函数')}
      <Break />
      <UnorderedList>
        <ListItem>
          <Bold>{t('基础组件')}</Bold>：{t('用于替代 Markdown 语法的基础组件')}
        </ListItem>
        <ListItem>
          <Bold>{t('render 函数')}</Bold>：
          {t('渲染 JSX 编写的内容，返回生成的字符内容')}
        </ListItem>
      </UnorderedList>
      <Break />
      {t(
        '所以{0}和{1}这两者搭配使用效果更佳',
        ` \`${t(`命令行工具`)}\` `,
        ` \`${t(`函数API`)}\` `,
      )}
    </>
  )
}
