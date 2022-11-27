import React, { Break, H1, UnorderList, ListItem, Link, Image } from '@lib'
import { localeFileNameMap } from './constants'

export default function LiveDemo() {
  console.log({
    localeFileNameMap,
    locale: global.docLocale,
  })
  const filename = localeFileNameMap[global.docLocale]

  return (
    <>
      <H1>Live Demo</H1>
      <UnorderList>
        <ListItem>
          <Link
            href={
              'https://codesandbox.io/p/github/eyelly-wu/jsx-to-md-demo/main?file=' +
              filename
            }
          >
            Open in CodeSandbox
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href={`https://stackblitz.com/github/eyelly-wu/jsx-to-md-demo?file=${filename}`}
          >
            <Image
              alt="Open in StackBlitz"
              title="Open in StackBlitz"
              src="https://developer.stackblitz.com/img/open_in_stackblitz_small.svg"
            />
          </Link>
        </ListItem>
      </UnorderList>
    </>
  )
}
