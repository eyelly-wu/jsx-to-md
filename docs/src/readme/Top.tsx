import React, { Image, Link, Break } from '@lib'
import { linkObj, imageObj, langs } from './constants'
import { version } from '../../../package.json'

const separator = ' | '

function renderLanguage() {
  const res = langs.reduce((res, item, index) => {
    const { code, locale, name } = item
    const BASE_URL = 'https://github.com/eyelly-wu/jsx-to-md/'
    const EN_URL = `${BASE_URL}tree/v${version}#readme`
    const OTHER_URL = `${BASE_URL}blob/v${version}/README_${locale}.md`

    if (global.docLocale == code) {
      res.push(name)
    } else {
      res.push(<Link href={code === 'en' ? EN_URL : OTHER_URL}>{name}</Link>)
    }

    if (index != langs.length - 1) {
      res.push(separator)
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
          {t('一款支持通过 JSX 来编写 Markdown 的工具')}
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
        <Image {...imageObj['demo']} />
      </div>
    </>
  )
}
