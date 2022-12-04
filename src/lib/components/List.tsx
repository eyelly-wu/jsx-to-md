import React from '../'

type ListProps = {
  isOrdered: boolean
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children?: JSX.Element | JSX.Element[]
  mark?: string
}

function getPreffix(level: number): string {
  return '   '.repeat(level - 1)
}

export function ListImpl({
  level = 1,
  children: childrenProp,
  isOrdered,
  mark: markProp = '*',
}: ListProps) {
  const preffix = getPreffix(level)

  return (
    <>
      {'\n'}
      {(childrenProp as JSX.Element[]).map((item, index) => {
        const mark = isOrdered ? `${index + 1}.` : markProp

        const isExistNested = (item as any)?.children?.some?.((childItem) =>
          [OderList, UnorderList].includes(childItem.type),
        )
        const suffix = isExistNested ? '' : '\n'

        return (
          <>
            {`${preffix}${mark} `}
            <>{item}</>
            <>{suffix}</>
          </>
        )
      })}
      {level == 1 ? '\n' : ''}
    </>
  )
}

export function OderList(props: Omit<ListProps, 'isOrdered' | 'mark'>) {
  return <ListImpl {...props} isOrdered />
}

export function UnorderList(props: Omit<ListProps, 'isOrdered'>) {
  return <ListImpl {...props} isOrdered={false} />
}

export const ListItem = (props: {
  children: string | JSX.Element | unknown
}) => <></>

type ListType = 'O' | 'o' | 'U' | 'u'
type ListItem = string | JSX.Element | [string, Items]
type Items =
  | [ListType, ...string[]]
  | [ListType, ListItem]
  | [ListType, ListItem, ListItem]
  | [ListType, ListItem, ListItem, ListItem]
  | [ListType, ListItem, ListItem, ListItem, ListItem]
  | [ListType, ListItem, ListItem, ListItem, ListItem, ListItem]
  | [ListType, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem]
  | [
      ListType,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
    ]
  | [
      ListType,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
    ]
  | [
      ListType,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
    ]
  | [
      ListType,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
    ]

function getListContent(items: Items, mark: string, level = 1): unknown[] {
  const [type, ...restItems] = items
  const preffix = getPreffix(level)

  const content = (restItems as any[]).reduce((res, item, index) => {
    let currentContent: string | JSX.Element = ''
    let childrenContent: unknown[] = []
    if (Array.isArray(item)) {
      const [currentContent_, childItems] = item
      currentContent = currentContent_
      childrenContent = getListContent(childItems as Items, mark, level + 1)
    } else {
      currentContent = item
    }

    currentContent = (
      <>
        {`${preffix}${['O', 'o'].includes(type) ? `${index + 1}.` : mark} `}
        {currentContent}
        {'\n'}
      </>
    )

    res.push(currentContent)

    if (Array.isArray(childrenContent) && childrenContent.length) {
      res.push(...childrenContent)
    }

    return res
  }, [] as unknown[])

  return content as unknown[]
}

export function List(props: { items: Items; mark?: string }) {
  const { items, mark = '*' } = props
  const content = getListContent(items, mark)

  return (
    <>
      {'\n'}
      {content}
      {'\n'}
    </>
  )
}
