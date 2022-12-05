import React from '../index'

export interface LinkProps {
  href: string
  children: unknown
  title?: string
}

function LinkImpl({ href, children, title: titleProp = '' }: LinkProps) {
  if (href?.startsWith?.('#')) {
    href = href?.toLocaleLowerCase()?.replace(' ', '-')
  }

  const title = titleProp ? ` "${titleProp}"` : ''

  return (
    <>
      [<>{children}</>]{`(${href}${title})`}
    </>
  )
}

export default function Link(props: LinkProps) {
  return <LinkImpl {...props} />
}
