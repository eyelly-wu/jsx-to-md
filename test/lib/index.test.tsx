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
  UnorderedList,
  Table,
  Column,
  TaskList,
  render,
  List,
  TableOfContents,
  renderAsync,
  AsyncWrapper,
  HorizontalRule,
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

    it('Horizontal Rule', () => {
      const res = render(
        <>
          text1
          <HorizontalRule />
          text2
        </>,
      )

      expect(res).toBe('text1\n___\ntext2')
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

  it('Font', () => {
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
        '~~Strike Through~~',
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
          <CodeBlock
            code={`

function Foo(){
}

foo()


`}
          />
        </>,
      )

      const expectRes = `\n\`\`\`js
function Foo(){
}

foo()
\`\`\`\n`
      expect(res).toBe(expectRes)
    })
  })

  describe('Image', () => {
    const label = 'npm'
    const url = 'https://img.shields.io/npm/v/jsx-to-md.svg?style=flat-square'

    it('Single', () => {
      const res = render(
        <>
          <Image alt={label} src={url} />
        </>,
      )

      const expectRes = `![${label}](${url})`

      expect(res).toBe(expectRes)
    })

    it('Multiple', () => {
      const res = render(
        <>
          {Array(10)
            .fill(0)
            .map(() => (
              <Image alt={label} src={url} title={label} />
            ))}
        </>,
      )

      const expectRes = Array(10)
        .fill(0)
        .map(() => `![${label}](${url} "${label}")`)
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
          <Link title="title" href={url}>
            {label}
          </Link>
        </>,
      )

      expect(res).toBe(`[${label}](${url} "title")`)
    })

    it('Multiple', () => {
      const res = render(
        <>
          {Array(10)
            .fill(0)
            .map(() => (
              <Link title="title" href={url}>
                {label}
              </Link>
            ))}
        </>,
      )

      const expectRes = Array(10)
        .fill(0)
        .map(() => `[${label}](${url} "title")`)
        .join('')

      expect(res).toBe(expectRes)
    })

    it('anchor:Link', () => {
      const res = render(<Link href="#Achor">Anchor</Link>)

      const expectRes = '[Anchor](#achor)'

      expect(res).toBe(expectRes)
    })

    it('anchor:a', () => {
      const res = render(<a href="#Achor">Anchor</a>)

      const expectRes = '<a href="#achor">Anchor</a>'

      expect(res).toBe(expectRes)
    })
  })

  describe('List', () => {
    it('Order List single', () => {
      const res = render(
        <>
          <OderList>
            <ListItem>item1</ListItem>
          </OderList>
        </>,
      )

      const expectRes = '\n' + '1. item1\n' + '\n'

      expect(res).toBe(expectRes)
    })

    it('Order List multiple', () => {
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

      const expectRes =
        '\n' + list.map((item, i) => `${i + 1}. ${item}\n`).join('') + '\n'

      expect(res).toBe(expectRes)
    })

    it('Unordered List', () => {
      const list = Array(3)
        .fill(0)
        .map((item, i) => `Item ${i + 1}`)

      const res = render(
        <>
          <UnorderedList>
            {list.map((item) => (
              <ListItem>{item}</ListItem>
            ))}
          </UnorderedList>
        </>,
      )

      const expectRes = '\n' + list.map((item) => `* ${item}\n`).join('') + '\n'

      expect(res).toBe(expectRes)
    })

    it('Unordered List single', () => {
      const res = render(
        <>
          <UnorderedList>
            <ListItem>item1</ListItem>
          </UnorderedList>
        </>,
      )

      const expectRes = '\n' + '* item1\n' + '\n'

      expect(res).toBe(expectRes)
    })

    it('Nested List', () => {
      const res = render(
        <>
          <UnorderedList>
            <ListItem>
              Unordered List 1
              <OderList level={2}>
                <ListItem>
                  Nested Order List 1
                  <UnorderedList level={3}>
                    <ListItem>
                      Nested Unordered List 1
                      <OderList level={4}>
                        <ListItem>Nested Order List 1</ListItem>
                      </OderList>
                    </ListItem>
                    <ListItem>Nested Unordered List 2</ListItem>
                    <ListItem>Nested Unordered List 3</ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem>Nested Order List 2</ListItem>
                <ListItem>Nested Order List 3</ListItem>
              </OderList>
            </ListItem>
            <ListItem>Unordered List 2</ListItem>
            <ListItem>Unordered List 3</ListItem>
          </UnorderedList>
        </>,
      )

      const expectRes = `
* Unordered List 1
   1. Nested Order List 1
      * Nested Unordered List 1
         1. Nested Order List 1
      * Nested Unordered List 2
      * Nested Unordered List 3
   2. Nested Order List 2
   3. Nested Order List 3
* Unordered List 2
* Unordered List 3

`
      expect(res).toBe(expectRes)
    })
  })

  describe('Special List', () => {
    it('Order List', () => {
      const list = Array(3)
        .fill(0)
        .map((item, i) => `Item ${i + 1}`)

      const res = render(
        <>
          <List items={['O', ...list]}></List>
        </>,
      )

      const expectRes =
        '\n' + list.map((item, i) => `${i + 1}. ${item}\n`).join('') + '\n'

      expect(res).toBe(expectRes)
    })

    it('Unordered List', () => {
      const list = Array(3)
        .fill(0)
        .map((item, i) => `Item ${i + 1}`)

      const res = render(
        <>
          <List items={['U', ...list]} />
        </>,
      )

      const expectRes = '\n' + list.map((item) => `* ${item}\n`).join('') + '\n'

      expect(res).toBe(expectRes)
    })

    it('Nested List', () => {
      const res = render(
        <>
          <List
            items={[
              'U',
              [
                'Unordered List 1',
                [
                  'O',
                  [
                    'Nested Order List 1',
                    [
                      'U',
                      'Nested Unordered List 1',
                      'Nested Unordered List 2',
                      'Nested Unordered List 3',
                    ],
                  ],
                  'Nested Order List 2',
                  'Nested Order List 3',
                ],
              ],
              'Unordered List 2',
              'Unordered List 3',
            ]}
          />
        </>,
      )

      const expectRes = `
* Unordered List 1
   1. Nested Order List 1
      * Nested Unordered List 1
      * Nested Unordered List 2
      * Nested Unordered List 3
   2. Nested Order List 2
   3. Nested Order List 3
* Unordered List 2
* Unordered List 3

`
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
          center: ':-:',
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

  describe('TaskList', () => {
    it('basic', () => {
      const res = render(
        <TaskList items={['done1', ['undo', 0], ['done2', 1]]} />,
      )
      const expectRes = `
- [x] done1
- [ ] undo
- [x] done2

`
      expect(res).toBe(expectRes)
    })

    it('nested', () => {
      const res = render(
        <TaskList
          items={[
            ['twoLevel', [['child1', 0], 'child2']],
            [
              'threeLevel',
              [
                ['child1', ['grandchild1', ['grandchild2', 0]]],
                [
                  'child2',
                  [
                    ['grandchild1', 0],
                    ['grandchild2', 0],
                  ],
                ],
                ['child3', ['grandchild1', 'grandchild2']],
              ],
            ],
            ['twoLevelEmpty', []],
          ]}
        />,
      )
      const expectRes = `
- [ ] twoLevel
  - [ ] child1
  - [x] child2
- [ ] threeLevel
  - [ ] child1
    - [x] grandchild1
    - [ ] grandchild2
  - [ ] child2
    - [ ] grandchild1
    - [ ] grandchild2
  - [x] child3
    - [x] grandchild1
    - [x] grandchild2
- [x] twoLevelEmpty

`
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
        'style: height&color',
        <div style={{ height: 10, color: 'red' }}></div>,
        '<div style="height: 10px;color: red;"></div>',
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

  describe('falsy', () => {
    type Test = [
      string, // desc
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      () => any, // res
      string, // expectRes
    ]

    const TempString = () => ''
    const TempNull = () => null
    const TempFalse = () => false
    const TempZero = () => 0

    const tests: Test[] = [
      ['empty string', TempString, ''],
      ['null', TempNull, ''],
      ['false', TempFalse, ''],
      ['0', TempZero, ''],
    ]

    it.each(tests)('%s', (desc, Func, expectRes) => {
      const res = render(<Func />)
      expect(res).toBe(expectRes)
    })
  })

  describe('TableOfContents', () => {
    it('simple', () => {
      const res = render(
        <>
          <TableOfContents />
          <H1>A</H1>
          <h2>B</h2>
        </>,
      )
      const expectRes = `
<details open>
  <summary>Table of Contents</summary>

  [A](#a)<br/>
  &emsp;&emsp;[B](#b)<br/>

</details>

# A
<h2>B</h2>`
      expect(res).toBe(expectRes)
    })

    it('simple with props', () => {
      const res = render(
        <>
          <TableOfContents
            text="custom text"
            open={false}
            indent={['&emsp;', '&ensp;']}
          />
          <H1>A</H1>
          <h2>B</h2>
        </>,
      )
      const expectRes = `
<details >
  <summary>custom text</summary>

  [A](#a)<br/>
  &emsp;&ensp;[B](#b)<br/>

</details>

# A
<h2>B</h2>`
      expect(res).toBe(expectRes)
    })

    it('simple with multiple', () => {
      const res = render(
        <>
          <TableOfContents
            text="custom text"
            open={false}
            indent={['&emsp;', '&ensp;']}
          />
          <H1>A</H1>
          <h2>B</h2>
          <TableOfContents />
          <TableOfContents />
          <TableOfContents />
          <TableOfContents />
          <TableOfContents />
          <TableOfContents />
        </>,
      )
      const expectRes = `
<details >
  <summary>custom text</summary>

  [A](#a)<br/>
  &emsp;&ensp;[B](#b)<br/>

</details>

# A
<h2>B</h2>`
      expect(res).toBe(expectRes)
    })

    it('complex', () => {
      const res = render(
        <>
          <TableOfContents />
          <H1>A</H1>
          <h2>a</h2>
          <H1>B</H1>
          <h2>b</h2>
          <H1>C</H1>
          <h2>c</h2>
        </>,
      )
      const expectRes = `
<details open>
  <summary>Table of Contents</summary>

  [A](#a)<br/>
  &emsp;&emsp;[a](#a)<br/>
  [B](#b)<br/>
  &emsp;&emsp;[b](#b)<br/>
  [C](#c)<br/>
  &emsp;&emsp;[c](#c)<br/>

</details>

# A
<h2>a</h2>
# B
<h2>b</h2>
# C
<h2>c</h2>`
      expect(res).toBe(expectRes)
    })

    it('empty Heading', () => {
      const res = render(
        <>
          <TableOfContents />
          <H1></H1>
          <h2></h2>
        </>,
      )
      const expectRes = `
#${' '}
<h2></h2>`
      expect(res).toBe(expectRes)
    })

    it('skip', () => {
      const res = render(
        <>
          <TableOfContents />
          <H1 skip>A</H1>
          <h2 skip>B</h2>
        </>,
      )
      const expectRes = `
# A
<h2>B</h2>`
      expect(res).toBe(expectRes)
    })
  })

  describe('Async Render', () => {
    type Data = {
      name: string
    }
    const asyncData1 = new Promise<Data>((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'jsx-to-md',
        })
      }, 50)
    })

    const asyncData2 = new Promise<Data>((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'jsx-to-md',
        })
      }, 100)
    })

    it('basic', async () => {
      const res = await renderAsync(
        <AsyncWrapper data={asyncData1}>
          {({ name }: Data) => <H1>Hi {name}</H1>}
        </AsyncWrapper>,
      )

      const expectRes = `
# Hi jsx-to-md
`

      expect(res).toBe(expectRes)
    })

    it('nested', async () => {
      const res = await renderAsync(
        <AsyncWrapper data={asyncData1}>
          {({ name }: Data) => (
            <>
              nested test
              <H1>Hi {name}</H1>
              <AsyncWrapper data={asyncData2}>
                {({ name }: Data) => <h2>this is {name}</h2>}
              </AsyncWrapper>
            </>
          )}
        </AsyncWrapper>,
      )

      const expectRes = `nested test
# Hi jsx-to-md
<h2>this is jsx-to-md</h2>`

      expect(res).toBe(expectRes)
    })
  })
})
