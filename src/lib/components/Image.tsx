import React from '../index'

export interface ImageProps {
  alt: string
  href: string
  title: string
}

export default function Image({ alt, href, title }: ImageProps) {
  return <>{`![${alt}](${href} '${title}')`}</>
}
