import React from '../index'

export interface LinkProps {
  href: string
  children: unknown
}

function LinkImpl({ href, children }: LinkProps) {
  if (href?.startsWith?.('#')) {
    href = href?.toLocaleLowerCase()?.replace(' ', '-')
  }

  return (
    <>
      [<>{children}</>]{`(${href})`}
    </>
  )
}

export default function Link(props: LinkProps) {
  return <LinkImpl {...props} />
}
