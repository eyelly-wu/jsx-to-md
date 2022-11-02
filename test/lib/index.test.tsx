import React, {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Break,
  Bold,
  Italic,
  BoldItalic,
  StrikeThrough,
  BlockQuote,
  InlineCode,
  CodeBlock,
  Image,
  Link,
  OderList,
  ListItem,
  UnorderList,
  Table,
  Column,
  render,
} from '../../src/lib'

describe('test component render', () => {
  describe('Layout', () => {
    it('Break', () => {
      const res = render(
        <>
          text1
          <Break />
          text2
        </>,
      )

      expect(res).toBe('text1\ntext2')
    })
  })

  it('Header', () => {
    const title = 'Hellow World!'
    const res = render(
      <>
        <H1>{title}</H1>
        <H2>{title}</H2>
        <H3>{title}</H3>
        <H4>{title}</H4>
        <H5>{title}</H5>
        <H6>{title}</H6>
      </>,
    )

    const expectRes = Array(6)
      .fill(0)
      .reduce((res, item, i) => {
        res += `\n${Array(i + 1)
          .fill('#')
          .join('')} ${title}\n`
        return res
      }, '')

    expect(res).toBe(expectRes)
  })

  it('Front', () => {
    const res = render(
      <>
        <Italic>italic</Italic>
        <Italic mark="_">italic</Italic>
        <Bold>bold</Bold>
        <Bold mark="_">bold</Bold>
        <BoldItalic>bold italic</BoldItalic>
        <BoldItalic mark="_">bold italic</BoldItalic>
        <StrikeThrough>Strike Through</StrikeThrough>
      </>,
    )
    expect(res).toBe(
      [
        '*italic*',
        '_italic_',
        '**bold**',
        '__bold__',
        '***bold italic***',
        '___bold italic___',
        '~~~Strike Through~~~',
      ].join(''),
    )
  })

  describe('BlockQuete', () => {
    it('basic', () => {
      const res = render(
        <>
          <BlockQuote>Block Quote</BlockQuote>
        </>,
      )
      expect(res).toBe(`
>Block Quote`)
    })
    it('nest', () => {
      const res = render(
        <>
          Text
          <BlockQuote>
            Block Quote Text
            <BlockQuote level={2}>
              Nest Block Quote Text1
              <BlockQuote level={3}>
                Nest Block Quote Text2
                <BlockQuote level={4}>Nest Block Quote Text3</BlockQuote>
              </BlockQuote>
            </BlockQuote>
          </BlockQuote>
        </>,
      )
      expect(res).toBe(`Text
>Block Quote Text
>>Nest Block Quote Text1
>>>Nest Block Quote Text2
>>>>Nest Block Quote Text3`)
    })
  })

  describe('Code', () => {
    it('Inline Code', () => {
      const strs = ['Javascript', 'HTML', 'CSS']
      const strs2 = ['a', 'b', 'c', 'd', 'e', 'f']

      const res = render(
        <>
          {strs.map((item) => (
            <InlineCode>{item}</InlineCode>
          ))}
          {strs2.map((item) => (
            <InlineCode>{item}</InlineCode>
          ))}
        </>,
      )

      expect(res).toBe(
        [...strs, ...strs2].map((item) => `\`${item}\``).join(''),
      )
    })

    it('Code Block', () => {
      const res = render(
        <>
          <CodeBlock langType="Java">
            {`function Foo(){
}

foo()`}
          </CodeBlock>
        </>,
      )

      const expectRes = `\n\`\`\`Java
function Foo(){
}

foo()
\`\`\`\n`
      console.log(res)
      expect(res).toBe(expectRes)
    })
  })

  describe('Image', () => {
    const label = 'npm'
    const url = 'https://img.shields.io/npm/v/jsx-to-md.svg?style=flat-square'

    it('Single', () => {
      const res = render(
        <>
          <Image alt={label} href={url} title={label} />
        </>,
      )

      expect(res).toBe(`![${label}](${url} '${label}')`)
    })

    it('Multiple', () => {
      const res = render(
        <>
          {Array(10)
            .fill(0)
            .map(() => (
              <Image alt={label} href={url} title={label} />
            ))}
        </>,
      )

      const expectRes = Array(10)
        .fill(0)
        .map(() => `![${label}](${url} '${label}')`)
        .join('')

      expect(res).toBe(expectRes)
    })
  })

  describe('Link', () => {
    const label = 'npm'
    const url = 'https://img.shields.io/npm/v/jsx-to-md.svg?style=flat-square'

    it('Single', () => {
      const res = render(
        <>
          <Link href={url}>{label}</Link>
        </>,
      )

      expect(res).toBe(`[${label}](${url})`)
    })

    it('Multiple', () => {
      const res = render(
        <>
          {Array(10)
            .fill(0)
            .map(() => (
              <Link href={url}>{label}</Link>
            ))}
        </>,
      )

      const expectRes = Array(10)
        .fill(0)
        .map(() => `[${label}](${url})`)
        .join('')

      expect(res).toBe(expectRes)
    })
  })

  describe('List', () => {
    it('Order List', () => {
      const list = Array(3)
        .fill(0)
        .map((item, i) => `Item ${i + 1}`)

      const res = render(
        <>
          <OderList>
            {list.map((item) => (
              <ListItem>{item}</ListItem>
            ))}
          </OderList>
        </>,
      )

      const expectRes = list.map((item, i) => `${i + 1}. ${item}\n`).join('')

      expect(res).toBe(expectRes)
    })

    it('Unorder List', () => {
      const list = Array(3)
        .fill(0)
        .map((item, i) => `Item ${i + 1}`)

      const res = render(
        <>
          <UnorderList>
            {list.map((item) => (
              <ListItem>{item}</ListItem>
            ))}
          </UnorderList>
        </>,
      )

      const expectRes = list.map((item) => `* ${item}\n`).join('')

      expect(res).toBe(expectRes)
    })

    it('Nested List', () => {
      const res = render(
        <>
          <UnorderList>
            <ListItem>
              Unorder List 1
              <OderList level={2}>
                <ListItem>
                  Nested Order List 1
                  <UnorderList level={3}>
                    <ListItem>Nested Unorder List 1</ListItem>
                    <ListItem>Nested Unorder List 2</ListItem>
                    <ListItem>Nested Unorder List 3</ListItem>
                  </UnorderList>
                </ListItem>
                <ListItem>Nested Order List 2</ListItem>
                <ListItem>Nested Order List 3</ListItem>
              </OderList>
            </ListItem>
            <ListItem>Unorder List 2</ListItem>
            <ListItem>Unorder List 3</ListItem>
          </UnorderList>
        </>,
      )

      const expectRes = `* Unorder List 1

   1. Nested Order List 1

      * Nested Unorder List 1
      * Nested Unorder List 2
      * Nested Unorder List 3

   2. Nested Order List 2
   3. Nested Order List 3

* Unorder List 2
* Unorder List 3
`

      console.log(res)
      expect(res).toBe(expectRes)
    })
  })

  describe('Table', () => {
    it('Basic', () => {
      const columns: Column[] = [
        {
          title: 'Name',
          fieldName: 'name',
          align: 'center',
        },
        {
          title: 'Age',
          fieldName: 'age',
          align: 'center',
        },
        {
          title: 'Description',
          fieldName: 'description',
        },
      ]

      const data = Array(10)
        .fill(0)
        .map((_, i) =>
          columns.reduce((res, { fieldName, title }) => {
            res[fieldName] = title + ' ' + (i + 1)
            return res
          }, {}),
        )

      const res = render(
        <>
          <Table columns={columns} data={data} />
        </>,
      )

      const expectRes = data.reduce((res, item, dataI) => {
        let _title = ''
        let _align = ''

        function getItem(str, isLast) {
          return '|' + str + (isLast ? '|\n' : '')
        }

        const alignMarkMap = {
          left: ':-',
          center: '-',
          right: '-:',
        }

        columns.forEach(({ fieldName, title, align = 'left' }, i) => {
          const isLastColumn = columns.length - 1 == i
          if (dataI == 0) {
            _title += (i == 0 ? '\n' : '') + getItem(title, isLastColumn)
            _align += getItem(alignMarkMap[align], isLastColumn)
          }
          if (isLastColumn) {
            res = _title + _align + res
          }
          res += getItem(item[fieldName], isLastColumn)
        })

        return res
      }, '')

      expect(res).toBe(expectRes)
    })
  })

  describe('html', () => {
    type Test = [
      string, // desc
      JSX.Element, // res
      string, // expectRes
    ]

    const tests: Test[] = [
      ['empty tag', <div></div>, '<div></div>'],
      ['no end tag: br', <br />, '<br />'],
      ['no end tag: img', <img src="xxx" />, '<img src="xxx" />'],
      [
        'style: height',
        <div style={{ height: 10 }}></div>,
        '<div style="height: 10px;"></div>',
      ],
      [
        'style: marginRight',
        <div style={{ marginRight: 10 }}></div>,
        '<div style="margin-right: 10px;"></div>',
      ],
      [
        'style: height&marginRight',
        <div style={{ height: 10, marginRight: 10 }}></div>,
        '<div style="height: 10px;margin-right: 10px;"></div>',
      ],
      [
        'nest',
        <table>
          <tr>
            <th>title1</th>
            <th>title2</th>
          </tr>
          <tr>
            <td>body1</td>
            <td>body2</td>
          </tr>
        </table>,
        `<table>
  <tr>
    <th>title1</th>
    <th>title2</th>
  </tr>
  <tr>
    <td>body1</td>
    <td>body2</td>
  </tr>
</table>`,
      ],
      [
        'nest:break line',
        <pre>
          {`const a = 'a'
const b = 'b'`}
        </pre>,
        `<pre>
const a = 'a'
const b = 'b'
</pre>`,
      ],
    ]

    it.each(tests)('%s', (desc, resProp, expectRes) => {
      const res = render(resProp)
      expect(res).toBe(expectRes)
    })
  })
})
