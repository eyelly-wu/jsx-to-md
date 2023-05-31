import React, { H3, List, Table, H4 } from '@lib'
import CodeDemo from '../CodeDemo'
import { getCodeString, getComponentColumns } from './utils'

type Items = Parameters<typeof List>[0]['items']

export interface TemplateProps {
  title: string
  intro: string
  componentList: Items
  propertyDescription: any[]
  getTypeDescription?: () => JSX.Element
  demoCodePath: string
  DemoComponent: React.FC
  isAsyncDemo?: boolean
}

export default function Template(props: TemplateProps) {
  const {
    title,
    intro,
    componentList,
    propertyDescription,
    getTypeDescription,
    demoCodePath,
    DemoComponent,
    isAsyncDemo,
  } = props

  const componentListTitle = t('组件列表')
  const propertyDescriptionTitle = t('属性说明')
  const typeDescriptionTitle = t('类型说明')
  const exampleCodeTitle = t('示例代码')

  function getId(titleProp: string) {
    return `${title}-${titleProp}`
  }

  return (
    <>
      <H3>{title}</H3>
      {intro}
      <H4 id={getId(componentListTitle)}>{componentListTitle}</H4>
      <List items={componentList} />
      <H4 id={getId(propertyDescriptionTitle)}>{propertyDescriptionTitle}</H4>
      <Table columns={getComponentColumns()} data={propertyDescription} />
      {typeof getTypeDescription === 'function' ? (
        <>
          <H4 id={getId(typeDescriptionTitle)}>{typeDescriptionTitle}</H4>
          {getTypeDescription()}
        </>
      ) : null}
      <H4 id={getId(exampleCodeTitle)}>{exampleCodeTitle}</H4>
      <CodeDemo
        code={getCodeString(demoCodePath)}
        Component={DemoComponent}
        isAsync={isAsyncDemo}
      />
    </>
  )
}
