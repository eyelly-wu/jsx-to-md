import React, { Table, Column, render } from '../../src/lib'

describe('Table', () => {
  it('Basic', () => {
    const columns: Column[] = [
      {
        title: 'Name',
        fieldName: 'name',
        align: 'center',
      },
      {
        title: 'Age',
        fieldName: 'age',
        align: 'center',
      },
      {
        title: 'Description',
        fieldName: 'description',
      },
    ]

    const data = Array(10)
      .fill(0)
      .map((_, i) =>
        columns.reduce((res, { fieldName, title }) => {
          res[fieldName] = title + ' ' + (i + 1)
          return res
        }, {}),
      )

    const res = render(
      <>
        <Table columns={columns} data={data} />
      </>,
    )

    const expectRes = data.reduce((res, item, dataI) => {
      let _title = ''
      let _align = ''

      function getItem(str, isLast) {
        return '|' + str + (isLast ? '|\n' : '')
      }

      const alignMarkMap = {
        left: ':-',
        center: ':-:',
        right: '-:',
      }

      columns.forEach(({ fieldName, title, align = 'left' }, i) => {
        const isLastColumn = columns.length - 1 == i
        if (dataI == 0) {
          _title += (i == 0 ? '\n' : '') + getItem(title, isLastColumn)
          _align += getItem(alignMarkMap[align], isLastColumn)
        }
        if (isLastColumn) {
          res = _title + _align + res
        }
        res += getItem(item[fieldName], isLastColumn)
      })

      return res
    }, '')

    expect(res).toBe(expectRes)
  })
})
