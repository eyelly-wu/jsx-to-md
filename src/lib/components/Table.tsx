import React from '../'

export type Column = {
  title: string
  fieldName: string
  align?: 'left' | 'center' | 'right'
}

export interface TableProps {
  columns: Column[]
  data: unknown[]
}

const alignMarkMap = {
  left: ':-',
  center: ':-:',
  right: '-:',
}

function Header({ columns }: Pick<TableProps, 'columns'>) {
  const { title, align } = columns.reduce(
    (res, { title, align = 'left' }) => {
      res.title.push(title)
      res.align.push(alignMarkMap[align])
      return res
    },
    {
      title: [],
      align: [],
    },
  )
  return <>{`\n|${title.join('|')}|\n|${align.join('|')}|\n`}</>
}

function Body({ columns, data }: TableProps) {
  const content = data.reduce((res: unknown[], dataItem) => {
    columns.forEach(({ fieldName }, index) => {
      const preffix = '|'
      let suffix = ''
      if (index == columns.length - 1) {
        suffix = '|\n'
      }

      res.push(
        <>
          {preffix}
          <>{dataItem[fieldName]}</>
          {suffix}
        </>,
      )
    })
    return res
  }, [])

  return <>{(content as Array<unknown>)?.map?.((item) => item)}</>
}

export default function Table({ columns, data }: TableProps) {
  return (
    <>
      <Header columns={columns} />
      <Body columns={columns} data={data} />
    </>
  )
}
