import React, { Image, Link, Break } from '@lib'
import { linkObj, imageObj, langs } from './constants'

const sperator = ' | '

function renderLanguage() {
  const res = langs.reduce((res, item, index) => {
    const { code, locale, name } = item

    if (global.docLocale == code) {
      res.push(name)
    } else {
      res.push(
        <Link href={`./README${code != 'en' ? '_' + locale : ''}.md`}>
          {name}
        </Link>,
      )
    }

    if (index != langs.length - 1) {
      res.push(sperator)
    }

    return res
  }, [])
  return (
    <>
      <Break />
      <Break />
      {res}
      <Break />
      <Break />
    </>
  )
}

export default function Top() {
  const props = {
    align: 'center',
  }
  return (
    <>
      <div style={{ textAlign: 'center' }} {...props}>
        <p style={{ fontSize: 18 }}>
          {i18n('一款支持通过 JSX 来编写 Markdown 的工具')}
          {renderLanguage()}
        </p>
        <Break />
        <Break />
        <Link {...linkObj['npm']}>
          <Image {...imageObj['npm-version']} />
        </Link>
        <Break />
        <Link {...linkObj.npm}>
          <Image {...imageObj['npm-download']} />
        </Link>
        <Break />
        <Link {...linkObj.codecov}>
          <Image {...imageObj.codecov} />
        </Link>
        <Break />
        <Link {...linkObj['github-stars']}>
          <Image {...imageObj['github-stars']} />
        </Link>
      </div>
      <Break />
    </>
  )
}
