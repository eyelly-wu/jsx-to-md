import React, {
  Break,
  H1,
  H2,
  CodeBlock,
  BlockQuote,
  H3,
  Link,
  Image,
  H4,
  render,
} from '@lib'
import { linkObj, imageObj } from './constants'
import { CONFIG_NAME, INIT_CONFIG_CONTENT } from '@bin/constant'

function Install() {
  return (
    <>
      <H2>{`1. ${i18n('安装')}`}</H2>
      <CodeBlock langType="bash">
        {`npm i -D jsx-to-md
# ${i18n('或者')}
yarn add jsx-to-md --dev
# ${i18n('或者')}
pnpm i -D jsx-to-md`}
      </CodeBlock>
    </>
  )
}

function CreateJsx() {
  return (
    <>
      <H2>{`2. ${i18n('​创建JSX文件')}`}</H2>
      {i18n(
        '在根目录下创建一个名为{0}的目录，并在该目录下创建{1}文件',
        ' `docs` ',
        ' `index.tsx` ',
      )}
      <CodeBlock langType="text">
        {`.
├── ...${i18n('其他相关文件')}
├── docs
│   └── index.tsx
├── node_modules
└── package.json
        `}
      </CodeBlock>
      {i18n('假如{0}的内容如下：', ' `index.tsx` ')}
      <BlockQuote>
        {i18n(
          '这里JSX语法采用的是 React.createElement 的形式，所以这里需要默认导入 React',
        )}
      </BlockQuote>
      <CodeBlock langType="tsx">
        {`import React, { Link } from 'jsx-to-md'

export default function(){

  return (
    <>
    Hello <Link href="${linkObj.github.href}">jsx-to-md</Link>!
    </>
  )
}`}
      </CodeBlock>
    </>
  )
}

function InitConfig() {
  return (
    <>
      <Break />
      <H2>{`3. ${i18n('初始化命令行配置文件')}`}</H2>
      {i18n('在命令行终端输入如下命令，')}
      <Link href={`#${i18n('命令列表')}`}>{i18n('更多命令')}</Link>
      <CodeBlock langType="bash">{`npx jtm init`}</CodeBlock>
      {i18n('然后会在当前目录下生成一个{0}的文件', ` \`${CONFIG_NAME}\` `)}
      <Break />
      <Break />
      {i18n('然后你的文件目录是这样的')}
      <CodeBlock langType="text">
        {`.
├── ...${i18n('其他相关文件')}
├── docs
│   └── index.tsx
├── jsx-to-md.config.js
├── node_modules
└── package.json
        `}
      </CodeBlock>
    </>
  )
}

function ModifyConfig() {
  return (
    <>
      <Break />
      <H2>{`4. ${i18n('调整{0}配置', ` \`${CONFIG_NAME}\` `)}`}</H2>
      {i18n(
        '根据需求自行调整配置文件中的配置项，配置项的{0}',
        render(<Link href={`#${i18n('命令行')}`}>{i18n('说明')}</Link>),
      )}
      <Break />
      <Break />
      {i18n('默认的配置如下：')}
      <CodeBlock>{`${INIT_CONFIG_CONTENT}`}</CodeBlock>
    </>
  )
}

function ExecuteRunCommand() {
  return (
    <>
      <Break />
      <H2>{`5. ${i18n('执行生成命令')}`}</H2>
      <CodeBlock langType="bash">{`npx jtm run `}</CodeBlock>
      {i18n(
        '假如未调整上面的默认配置，命令执行成功的话，会在根目录下生成对应的Markdown文件，并且{0}内容发生调整，保存后，对应的Markdown文件也会实时同步变化',
        ' `docs/index.tsx` ',
      )}
    </>
  )
}

export default function Usage() {
  return (
    <>
      <Break />
      <H1>{i18n('用法')}</H1>
      <Install />
      <CreateJsx />
      <InitConfig />
      <ModifyConfig />
      <ExecuteRunCommand />
    </>
  )
}