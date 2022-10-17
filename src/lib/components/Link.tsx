import React from '../index'

export interface LinkProps {
  href: string
  title: string | JSX.Element
  children?: string | JSX.Element
}

function LinkImpl({ href, children }: Omit<LinkProps, 'title'>) {
  return (
    <>
      [<>{children}</>]{`(${href})`}
    </>
  )
}

export default function Link({ href, title, children }: LinkProps) {
  return <LinkImpl href={href} children={children || title} />
}
