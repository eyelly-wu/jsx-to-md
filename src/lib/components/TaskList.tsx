import React from '../index'

type TaskStatus = 0 | 1
type TaskItem = string | [string, TaskStatus] | [string, TaskItem[]]

export interface TaskListProps {
  items: TaskItem[]
}

function getTaskContent(items: TaskItem[], level = 1) {
  return items.map((item) => {
    const prefix = ' '.repeat((level - 1) * 2)
    let task = ''
    let isDone = true
    let children = []

    switch (true) {
      case typeof item === 'string':
        task = item as string
        break
      case Array.isArray(item) && typeof item[1] === 'number':
        task = item[0]
        isDone = Boolean(item[1] as number)
        break
      case Array.isArray(item) && Array.isArray(item[1]):
        {
          task = item[0]
          const childrenContents = getTaskContent(
            item[1] as TaskItem[],
            level + 1,
          )

          children = childrenContents.map((item) => item.content)
          isDone = childrenContents.every((item) => item.isDone) || false
        }
        break
    }

    return {
      isDone,
      content: (
        <>
          {`${prefix}- [${isDone ? 'x' : ' '}] ${task}\n`}
          {children}
        </>
      ),
    }
  })
}

export default function TaskList(props: TaskListProps) {
  const { items = [] } = props

  const contents = getTaskContent(items)

  return (
    <>
      {'\n'}
      {contents.map((item) => item.content)}
      {'\n'}
    </>
  )
}
