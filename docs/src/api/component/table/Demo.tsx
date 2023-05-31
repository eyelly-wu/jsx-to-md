import React, { Table } from '@lib'

export default function () {
  return (
    <>
      <Table
        columns={[
          { fieldName: 'field1', title: t('靠左标题') },
          { fieldName: 'field2', title: t('居中标题'), align: 'center' },
          { fieldName: 'field3', title: t('靠右标题'), align: 'right' },
        ]}
        data={Array(10)
          .fill(0)
          .map((item) => {
            return ['field1', 'field2', 'field3'].reduce((res, item) => {
              res[item] = t('文本内容')
              return res
            }, {})
          })}
      />
    </>
  )
}
