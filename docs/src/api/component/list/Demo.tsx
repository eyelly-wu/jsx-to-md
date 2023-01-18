import React, {
  H1,
  H2,
  H3,
  List,
  ListItem,
  OderList,
  UnorderedList,
} from '@lib'

export default function () {
  return (
    <>
      <H1>{i18n('列表')}</H1>
      <H2>{i18n('语义型')}</H2>
      <H3>{i18n('无序列表')}</H3>
      <UnorderedList>
        <ListItem>{i18n('列表项1')}</ListItem>
        <ListItem>{i18n('列表项2')}</ListItem>
        <ListItem>{i18n('列表项3')}</ListItem>
      </UnorderedList>
      <H3>{i18n('有序列表')}</H3>
      <OderList>
        <ListItem>{i18n('列表项1')}</ListItem>
        <ListItem>{i18n('列表项2')}</ListItem>
        <ListItem>{i18n('列表项3')}</ListItem>
      </OderList>
      <H3>{i18n('嵌套列表')}</H3>
      <UnorderedList>
        <ListItem>
          {i18n('开发')}
          <OderList level={2}>
            <ListItem>
              {i18n('前端')}
              <UnorderedList level={3}>
                <ListItem>JavaScript</ListItem>
                <ListItem>HTML</ListItem>
                <ListItem>CSS</ListItem>
                <ListItem>...</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              {i18n('后端')}
              <UnorderedList level={3}>
                <ListItem>Java</ListItem>
                <ListItem>SQL</ListItem>
                <ListItem>...</ListItem>
              </UnorderedList>
            </ListItem>
          </OderList>
        </ListItem>
        <ListItem>
          {i18n('测试')}
          <UnorderedList level={2}>
            <ListItem>
              {i18n('单元测试')}
              <OderList level={3}>
                <ListItem>JUnit</ListItem>
                <ListItem>Jest</ListItem>
                <ListItem>Vitest</ListItem>
                <ListItem>...</ListItem>
              </OderList>
            </ListItem>
            <ListItem>
              {i18n('E2E测试')}
              <OderList level={3}>
                <ListItem>Cypress</ListItem>
                <ListItem>...</ListItem>
              </OderList>
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>...</ListItem>
      </UnorderedList>
      <H2>{i18n('简易型')}</H2>
      <H3>{i18n('无序列表')}</H3>
      <List items={['U', i18n('列表项1'), i18n('列表项2'), i18n('列表项3')]} />
      <H3>{i18n('有序列表')}</H3>
      <List items={['O', i18n('列表项1'), i18n('列表项2'), i18n('列表项3')]} />
      <H3>{i18n('嵌套列表')}</H3>
      <List
        items={[
          'O',
          [
            i18n('开发'),
            [
              'O',
              [i18n('前端'), ['U', 'JavaScript', 'HTML', 'CSS', '...']],
              [i18n('后端'), ['U', 'Java', 'SQL', '...']],
            ],
          ],
          [
            i18n('测试'),
            [
              'U',
              [i18n('单元测试'), ['O', 'JUnit', 'Jest', 'Vitest']],
              [i18n('E2E测试'), ['O', 'Cypress', '...']],
            ],
          ],
          '...',
        ]}
      />
    </>
  )
}
