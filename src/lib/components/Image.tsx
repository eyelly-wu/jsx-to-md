import React from '../index'

export interface ImageProps {
  alt: string
  src: string
  title?: string
}

export default function Image({ alt, src, title: titleProp = '' }: ImageProps) {
  const title = titleProp ? ` "${titleProp}"` : ''
  return <>{`![${alt}](${src}${title})`}</>
}
