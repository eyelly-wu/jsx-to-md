import React, { H1, Link, Image, List } from '@lib'
import { localeFileNameMap } from './constants'

export default function LiveDemo() {
  const filename = localeFileNameMap[global.docLocale]

  return (
    <>
      <H1>Live Demo</H1>
      <List
        items={[
          'u',
          <Link
            href={
              'https://codesandbox.io/p/github/eyelly-wu/jsx-to-md-demo/main?file=' +
              filename
            }
          >
            Open in CodeSandbox
          </Link>,
          <Link
            href={`https://stackblitz.com/github/eyelly-wu/jsx-to-md-demo?file=${filename}`}
          >
            <Image
              alt="Open in StackBlitz"
              title="Open in StackBlitz"
              src="https://developer.stackblitz.com/img/open_in_stackblitz_small.svg"
            />
          </Link>,
        ]}
      />
    </>
  )
}
