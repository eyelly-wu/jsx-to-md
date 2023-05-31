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
      <H1>{t('列表')}</H1>
      <H2>{t('语义型')}</H2>
      <H3>{t('无序列表')}</H3>
      <UnorderedList>
        <ListItem>{t('列表项1')}</ListItem>
        <ListItem>{t('列表项2')}</ListItem>
        <ListItem>{t('列表项3')}</ListItem>
      </UnorderedList>
      <H3>{t('有序列表')}</H3>
      <OderList>
        <ListItem>{t('列表项1')}</ListItem>
        <ListItem>{t('列表项2')}</ListItem>
        <ListItem>{t('列表项3')}</ListItem>
      </OderList>
      <H3>{t('嵌套列表')}</H3>
      <UnorderedList>
        <ListItem>
          {t('开发')}
          <OderList level={2}>
            <ListItem>
              {t('前端')}
              <UnorderedList level={3}>
                <ListItem>JavaScript</ListItem>
                <ListItem>HTML</ListItem>
                <ListItem>CSS</ListItem>
                <ListItem>...</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              {t('后端')}
              <UnorderedList level={3}>
                <ListItem>Java</ListItem>
                <ListItem>SQL</ListItem>
                <ListItem>...</ListItem>
              </UnorderedList>
            </ListItem>
          </OderList>
        </ListItem>
        <ListItem>
          {t('测试')}
          <UnorderedList level={2}>
            <ListItem>
              {t('单元测试')}
              <OderList level={3}>
                <ListItem>JUnit</ListItem>
                <ListItem>Jest</ListItem>
                <ListItem>Vitest</ListItem>
                <ListItem>...</ListItem>
              </OderList>
            </ListItem>
            <ListItem>
              {t('E2E测试')}
              <OderList level={3}>
                <ListItem>Cypress</ListItem>
                <ListItem>...</ListItem>
              </OderList>
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>...</ListItem>
      </UnorderedList>
      <H2>{t('简易型')}</H2>
      <H3>{t('无序列表')}</H3>
      <List items={['U', t('列表项1'), t('列表项2'), t('列表项3')]} />
      <H3>{t('有序列表')}</H3>
      <List items={['O', t('列表项1'), t('列表项2'), t('列表项3')]} />
      <H3>{t('嵌套列表')}</H3>
      <List
        items={[
          'O',
          [
            t('开发'),
            [
              'O',
              [t('前端'), ['U', 'JavaScript', 'HTML', 'CSS', '...']],
              [t('后端'), ['U', 'Java', 'SQL', '...']],
            ],
          ],
          [
            t('测试'),
            [
              'U',
              [t('单元测试'), ['O', 'JUnit', 'Jest', 'Vitest']],
              [t('E2E测试'), ['O', 'Cypress', '...']],
            ],
          ],
          '...',
        ]}
      />
    </>
  )
}
