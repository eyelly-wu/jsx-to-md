import React from '../index'

export interface ImageProps {
  alt: string
  src: string
  title: string
}

export default function Image({ alt, src, title }: ImageProps) {
  return <>{`![${alt}](${src} '${title}')`}</>
}
