import React from '../'

type ListProps = {
  isOrdered: boolean
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children?: JSX.Element | JSX.Element[]
  mark?: string
}

function getPrefix(level: number): string {
  return '   '.repeat(level - 1)
}

export function ListImpl({
  level = 1,
  children: childrenProp,
  isOrdered,
  mark: markProp = '*',
}: ListProps) {
  const prefix = getPrefix(level)

  const currentChildren = Array.isArray(childrenProp)
    ? childrenProp
    : [childrenProp]

  return (
    <>
      {'\n'}
      {(currentChildren as JSX.Element[]).map((item, index) => {
        const mark = isOrdered ? `${index + 1}.` : markProp

        const isExistNested = (item as any)?.children?.some?.((childItem) =>
          [OderList, UnorderedList].includes(childItem.type),
        )
        const suffix = isExistNested ? '' : '\n'

        return (
          <>
            {`${prefix}${mark} `}
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

export function UnorderedList(props: Omit<ListProps, 'isOrdered'>) {
  return <ListImpl {...props} isOrdered={false} />
}

export const ListItem = (props: {
  children: string | JSX.Element | unknown
}) => <></>

type ListType = 'O' | 'o' | 'U' | 'u'
type ListItem = string | JSX.Element | [string, Items]
type Items = [ListType, ...ListItem[]]

function getListContent(items: Items, mark: string, level = 1): unknown[] {
  const [type, ...restItems] = items
  const prefix = getPrefix(level)

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
        {`${prefix}${['O', 'o'].includes(type) ? `${index + 1}.` : mark} `}
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
