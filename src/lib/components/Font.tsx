import React from '../index'

type FontProps = {
  type: 'bold' | 'italic' | 'bolditalic'
  children: string | string[]
  mark?: '*' | '_'
}

function Font(props: FontProps) {
  const { type, children, mark = '*' } = props
  const typeLengthMap = {
    italic: 1,
    bold: 2,
    bolditalic: 3,
  }
  const tag = Array(typeLengthMap[type]).fill(mark).join('')

  return <>{`${tag}${children}${tag}`}</>
}

type ImplFontProps = Omit<FontProps, 'type'>

const base = (type: FontProps['type'], props: ImplFontProps) => (
  <Font {...props} type={type} />
)

export const Italic = base.bind(null, 'italic')

export const Bold = base.bind(null, 'bold')

export const BoldItalic = base.bind(null, 'bolditalic')

function StrikeThroughImpl({ children }: { children: string }) {
  return <>{`~~${children}~~`}</>
}

export function StrikeThrough({ children }: { children: string }) {
  return <StrikeThroughImpl children={children} />
}
