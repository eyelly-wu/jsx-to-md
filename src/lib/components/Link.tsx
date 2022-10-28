import React from '../index'

export interface LinkProps {
  href: string
  title: string | JSX.Element
  children?: unknown
}

function LinkImpl({ href, children }: Omit<LinkProps, 'title'>) {
  return (
    <>
      [<>{children}</>]{`(${href})`}
    </>
  )
}

export default function Link({ href, title, children }: LinkProps) {
  return (
    <LinkImpl
      href={href}
      children={
        Array.isArray(children) && children.length > 0 ? children : [title]
      }
    />
  )
}
