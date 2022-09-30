import React from '../'

type ListProps = {
  isOrdered: boolean
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children?: JSX.Element | JSX.Element[]
  mark?: string
}

export function ListImpl({
  level = 1,
  children: childrenProp,
  isOrdered,
  mark: markProp = '*',
}: ListProps) {
  const preffix = level > 1 ? '   '.repeat(level - 1) : ''

  return (
    <>
      {(childrenProp as JSX.Element[]).map((item, index) => {
        const mark = isOrdered ? `${index + 1}.` : markProp

        return (
          <>
            {`${level > 1 && index == 0 ? '\n\n' : ''}${preffix}${mark} `}
            <>{item}</>
            <>{'\n'}</>
          </>
        )
      })}
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
