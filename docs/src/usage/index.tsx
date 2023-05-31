import React, {
  Break,
  H1,
  H2,
  CodeBlock,
  BlockQuote,
  Link,
  render,
  TableOfContents,
} from '@lib'
import { CONFIG_NAME, INIT_CONFIG_CONTENT } from '@bin/constant'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import Demo from './Demo'
import { getDocHref, initI18N } from '../utils'

const demoDocCode = readFileSync(path.join(__dirname, './Demo.tsx'), {
  encoding: 'utf-8',
})
  .replace("'@lib'", "'jsx-to-md'")
  .replace('React, ', '')

function Install() {
  return (
    <>
      <H2>{`1. ${t('安装')}`}</H2>
      <CodeBlock
        langType="bash"
        code={`npm i -D jsx-to-md
# ${t('或者')}
yarn add jsx-to-md --dev
# ${t('或者')}
pnpm i -D jsx-to-md`}
      />
    </>
  )
}

function CreateJsx() {
  return (
    <>
      <H2>{`2. ${t('​创建JSX文件')}`}</H2>
      {t(
        '在根目录下创建一个名为{0}的目录，并在该目录下创建{1}文件',
        ' `docs` ',
        ' `index.tsx` ',
      )}
      <CodeBlock
        langType="text"
        code={`.
├── ...${t('其他相关文件')}
├── docs
│   └── index.tsx
├── node_modules
└── package.json
        `}
      />
      {t('假如{0}的内容如下：', ' `index.tsx` ')}
      <CodeBlock langType="tsx" code={demoDocCode} />
    </>
  )
}

function InitConfig() {
  return (
    <>
      <Break />
      <H2>{`3. ${t('初始化命令行配置文件')}`}</H2>
      {t('在命令行终端输入如下命令，')}
      <Link href={getDocHref('COMMAND_LINE', '2. ' + t('命令'))}>
        {t('更多命令')}
      </Link>
      <CodeBlock langType="bash" code="npx jtm init" />
      {t('然后会在当前目录下生成一个{0}的文件', ` \`${CONFIG_NAME}\` `)}
      <Break />
      <Break />
      {t('然后你的文件目录是这样的')}
      <CodeBlock
        langType="text"
        code={`.
├── ...${t('其他相关文件')}
├── docs
│   └── index.tsx
├── jsx-to-md.config.js
├── node_modules
└── package.json
        `}
      />
    </>
  )
}

function ModifyConfig() {
  return (
    <>
      <Break />
      <H2>{`4. ${t('调整{0}配置', ` \`${CONFIG_NAME}\` `)}`}</H2>
      {t(
        '根据需求自行调整配置文件中的配置项，配置项的{0}',
        render(<Link href={getDocHref('COMMAND_LINE')}>{t('说明')}</Link>),
      )}
      <Break />
      <Break />
      {t('默认的配置如下：')}
      <CodeBlock code={INIT_CONFIG_CONTENT} />
    </>
  )
}

function ExecuteRunCommand() {
  return (
    <>
      <H2>{`5. ${t('执行生成命令')}`}</H2>
      {t('执行如下命令')}
      <CodeBlock langType="bash" code="npx jtm run" />
      {t(
        '假如未调整上面的默认配置，命令执行成功的话，会在根目录下生成对应的 Markdown 文件，最后生成的 Markdown 文本内容如下',
      )}
      <CodeBlock langType="md" code={render(<Demo />)} />
      {t('显示效果如下')}
      <br />
      <BlockQuote>{render(<Demo />)}</BlockQuote>
      <Break />
      <Break />
      {t(
        '并且{0}内容发生调整，保存后，对应的 Markdown 文件也会实时同步变化',
        ' `docs/index.tsx` ',
      )}
    </>
  )
}

export default function Usage(props) {
  initI18N(props)

  return (
    <>
      <Break />
      <H1 skip>{t('快速上手')}</H1>
      <TableOfContents text={t('目录')} open={false} />
      <Install />
      <CreateJsx />
      <InitConfig />
      <ModifyConfig />
      <ExecuteRunCommand />
    </>
  )
}
