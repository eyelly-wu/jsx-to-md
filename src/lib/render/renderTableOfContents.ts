import { HeadingNodeType, RenderTOCProps } from 'src/types'
import { STRING_HEADINGS, TABLE_OF_CONTENTS_PLACEHOLDER } from '../constant'

function extraMarkdownHeading(content: string) {
  const regExp = /\n(#{1,6}) (.+)\n/
  const matchResult = content.match(regExp)

  const [x, level, title] = matchResult || []

  return {
    level: level?.length,
    title,
  }
}

function extraHTMLHeading(content: string) {
  const regExp = /<h([1-6])>(.+)<\/h\1>/
  const matchResult = content.match(regExp)

  const [, level, title] = matchResult || []

  return {
    level: Number(level),
    title,
  }
}

function getHeadingHref(text: string) {
  return text
    ?.trim?.()
    .toLocaleLowerCase()
    .replace(/ +/g, '-')
    .replaceAll('.', '')
    .replaceAll('`', '')
}

function extraHeading(headingNodes: HeadingNodeType[]) {
  const res = headingNodes.map((headingNode) => {
    let content: string | null | { title: string; level: number } = ''
    let level = 1
    let href = ''

    if (STRING_HEADINGS.includes(headingNode.type as string)) {
      content = extraHTMLHeading(headingNode.content)
    } else {
      content = extraMarkdownHeading(headingNode.content)
    }

    level = content.level
    href = getHeadingHref(content.title)
    content = content.title

    return {
      level,
      title: content,
      href,
    }
  })

  return res.filter((res) => res?.title?.trim?.()?.length > 0)
}

function generateStrTableByIndent(
  headings: { level: number; title: string; href: string }[],
  renderProps: RenderTOCProps,
) {
  if (headings.length == 0) return ''

  const {
    text = 'Table of Contents',
    open = true,
    indent: indentProp = '&emsp;&emsp;',
  } = renderProps

  const res = headings.reduce((res, item, index) => {
    const { title, level, href } = item
    const indent = indentProp.repeat(level - 1)
    const content = `[${title}](#${href})`
    res += `${index == 0 ? '\n' : ''}  ${indent}${content}<br/>\n`
    return res
  }, ``)
  return `
<details ${open ? 'open' : ''}>
  <summary>${text}</summary>
${res}
</details>
`
}

function replaceTOCPlaceholder(contents: string, tableOfContents: string) {
  const newContents = contents.replace(
    TABLE_OF_CONTENTS_PLACEHOLDER,
    tableOfContents,
  )
  return newContents
}

export default function renderTableOfContents(
  headingNodes: HeadingNodeType[],
  contents: string,
  renderProps: RenderTOCProps,
) {
  const headings = extraHeading(headingNodes)

  const tableOfContents = generateStrTableByIndent(headings, renderProps)

  const newContens = replaceTOCPlaceholder(contents, tableOfContents)

  return newContens
}
