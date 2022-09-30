import React from '../index'

export interface LinkProps {
  href: string
  title: string
}

export default function Link({ href, title }: LinkProps) {
  return <>{`[${title}](${href})`}</>
}
