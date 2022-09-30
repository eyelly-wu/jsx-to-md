import React from '../index'

type HeaderProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: string | string[]
}

function Header({ level, children }: HeaderProps) {
  return <>{`\n${Array(level).fill('#').join('')} ${children}\n`}</>
}

const hn = (level: HeaderProps['level'], props: { children: string }) => (
  <Header level={level} {...props} />
)

export const H1 = hn.bind(null, 1)

export const H2 = hn.bind(null, 2)

export const H3 = hn.bind(null, 3)

export const H4 = hn.bind(null, 4)

export const H5 = hn.bind(null, 5)

export const H6 = hn.bind(null, 6)
