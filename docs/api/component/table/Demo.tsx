import React, { Table } from '@lib'

export default function () {
  return (
    <>
      <Table
        columns={[
          { fieldName: 'field1', title: i18n('靠左标题') },
          { fieldName: 'field2', title: i18n('居中标题'), align: 'center' },
          { fieldName: 'field3', title: i18n('靠右标题'), align: 'right' },
        ]}
        data={Array(10)
          .fill(0)
          .map((item) => {
            return ['field1', 'field2', 'field3'].reduce((res, item) => {
              res[item] = i18n('随机数：') + Math.random().toString(10).slice(2)
              return res
            }, {})
          })}
      />
    </>
  )
}
