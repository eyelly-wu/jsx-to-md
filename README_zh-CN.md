<div style="text-align: center;"align="center">
  <p style="font-size: 18px;">
    一款支持通过 JSX 来编写 Markdown 的工具

[English](https://github.com/eyelly-wu/jsx-to-md/tree/v0.8.2#readme) | 简体中文


  </p>

[![npm-version](https://img.shields.io/npm/v/jsx-to-md.svg?style=flat-square "npm-version")](https://www.npmjs.com/package/jsx-to-md "npm")
[![npm-download](https://img.shields.io/npm/dm/jsx-to-md "npm-download")](https://www.npmjs.com/package/jsx-to-md "npm")
[![codecov](https://codecov.io/gh/eyelly-wu/jsx-to-md/branch/main/graph/badge.svg?token=tocki8cvYM "codecov")](https://codecov.io/gh/eyelly-wu/jsx-to-md "codecov")
[![github-stars](https://img.shields.io/github/stars/eyelly-wu/jsx-to-md?style=social "github-stars")](https://github.com/eyelly-wu/jsx-to-md/stargazers "github-stars")
</div>

<details >
  <summary>目录</summary>

  [愿景](#愿景)<br/>
  [特性](#特性)<br/>
  [Live Demo](#live-demo)<br/>
  [原理](#原理)<br/>
  [用法](#用法)<br/>
  &emsp;&emsp;[1. 安装](#1-安装)<br/>
  &emsp;&emsp;[2. ​创建JSX文件](#2-​创建jsx文件)<br/>
  &emsp;&emsp;[3. 初始化命令行配置文件](#3-初始化命令行配置文件)<br/>
  &emsp;&emsp;[4. 调整 `jsx-to-md.config.js` 配置](#4-调整-jsx-to-mdconfigjs-配置)<br/>
  &emsp;&emsp;[5. 执行生成命令](#5-执行生成命令)<br/>
  [命令行](#命令行)<br/>
  &emsp;&emsp;[1.  `jsx-to-md.config.js` 配置](#1-jsx-to-mdconfigjs-配置)<br/>
  &emsp;&emsp;&emsp;&emsp;[基础配置](#基础配置)<br/>
  &emsp;&emsp;&emsp;&emsp;[Source](#source)<br/>
  &emsp;&emsp;[2. 命令](#2-命令)<br/>
  &emsp;&emsp;&emsp;&emsp;[命令列表](#命令列表)<br/>
  &emsp;&emsp;&emsp;&emsp;[命令参数](#命令参数)<br/>
  [API](#api)<br/>
  &emsp;&emsp;[函数API](#函数api)<br/>
  &emsp;&emsp;&emsp;&emsp;[属性](#属性)<br/>
  &emsp;&emsp;&emsp;&emsp;[示例代码](#示例代码)<br/>
  &emsp;&emsp;[组件](#组件)<br/>
  &emsp;&emsp;&emsp;&emsp;[布局](#布局)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[标题](#标题)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[字体](#字体)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[引用块](#引用块)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[代码](#代码)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[图片](#图片)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[链接](#链接)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[列表](#列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[类型说明](#类型说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Items](#items)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[表格](#表格)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[类型说明](#类型说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Column](#column)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[任务清单](#任务清单)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[类型说明](#类型说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[TaskItem](#taskitem)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[目录](#目录)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[异步渲染包装器](#异步渲染包装器)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#示例代码)<br/>

</details>

# 愿景
为了让通过 `JSX` 来编写 `Markdown` 成为件轻松且愉快的事😄💪🏻

# 特性

* 实时渲染生成
* 支持原生 HTML
* 支持多个文档同时渲染
* 支持生成目录
* 支持异步渲染


# Live Demo

* [Open in CodeSandbox](https://codesandbox.io/p/github/eyelly-wu/jsx-to-md-demo/main?file=README_zh-CN.md)
* [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/eyelly-wu/jsx-to-md-demo?file=README_zh-CN.md)



# 原理
该库主要由两部分构成

* 命令行工具
* 函数API


**命令行工具**：解析配置文件、执行 render 逻辑，最后生成 Markdown 文件

**函数API**：提供对标 Markdown 语法的基础组件及 render 函数

* **基础组件**：用于替代 Markdown 语法的基础组件
* **render 函数**：渲染 JSX 编写的内容，返回生成的字符内容


所以 `命令行工具` 和 `函数API` 这两者搭配使用效果更佳

# 用法

## 1. 安装

```bash
npm i -D jsx-to-md
# 或者
yarn add jsx-to-md --dev
# 或者
pnpm i -D jsx-to-md
```

## 2. ​创建JSX文件
在根目录下创建一个名为 `docs` 的目录，并在该目录下创建 `index.tsx` 文件
```text
.
├── ...其他相关文件
├── docs
│   └── index.tsx
├── node_modules
└── package.json
        
```
假如 `index.tsx` 的内容如下：
>这里JSX语法采用的是 `React.createElement` 的形式，所以这里需要默认导入 `React` 
```tsx
import React, { Link } from 'jsx-to-md'

export default function () {
  return (
    <>
      Hello <Link href="https://github.com/eyelly-wu/jsx-to-md">jsx-to-md</Link>
      !
    </>
  )
}
```


## 3. 初始化命令行配置文件
在命令行终端输入如下命令，[更多命令](#命令列表)
```bash
npm jtm init
```
然后会在当前目录下生成一个 `jsx-to-md.config.js` 的文件

然后你的文件目录是这样的
```text
.
├── ...其他相关文件
├── docs
│   └── index.tsx
├── jsx-to-md.config.js
├── node_modules
└── package.json
        
```


## 4. 调整 `jsx-to-md.config.js` 配置
根据需求自行调整配置文件中的配置项，配置项的[说明](#命令行)

默认的配置如下：
```js
const path = require('path')
const join = path.join

module.exports = {
  source: [
    {
      entry: join(__dirname, 'docs/index'),
      output: join(__dirname, 'README.md'),
      params: {
        param1: 'xxx',
        param2: 'xxx',
      },
    },
  ],
}
```

## 5. 执行生成命令
执行如下命令
```bash
npx jtm run
```
假如未调整上面的默认配置，命令执行成功的话，会在根目录下生成对应的 Markdown 文件，最后生成的 Markdown 文本内容如下
```md
Hello [jsx-to-md](https://github.com/eyelly-wu/jsx-to-md)!
```
显示效果如下<br />
>Hello [jsx-to-md](https://github.com/eyelly-wu/jsx-to-md)!

并且 `docs/index.tsx` 内容发生调整，保存后，对应的 Markdown 文件也会实时同步变化
# 命令行

## 1.  `jsx-to-md.config.js` 配置

### 基础配置

|名称|类型|是否必设|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|source|[Source](#source)[]|是|-|数据源相关配置|

### Source
数据源相关配置
|名称|类型|是否必设|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|entry|string|是|-|文档入口文件（绝对路径）|
|output|string|否|-|生成 Markdown 文件的路径（绝对路径）|
|params|Record<string,unknown>|否|{}|入口文件接收到的 props 属性|

## 2. 命令

### 命令列表

|命令|简写|用法|说明|
|:-:|:-:|:-|:-|
|init|-|`npx jtm init`|初始化配置文件|
|run|-|`npx jtm run`|读取配置生成 Markdown 文件|

### 命令参数

|参数名|参数值|适用命令|用法|说明|
|:-:|:-:|:-:|:-|:-|
|--watch| `true` \| `false` | `run` |`npx jtm run`<br />`npx jtm run --watch true`<br />`npx jtm run --watch false`|指定是否启用文件监听，该配置默认开启，启用后相关文件变化会重新生成 Markdown 文件|

# API

## 函数API

### 属性
<table>
  <tr>
    <th>函数名</th>
    <th>类型</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>render</td>
    <td>
      <pre>(element: JSX.element) => string</pre>
    </td>
    <td>
      渲染 JSX 元素，返回生成的 Markdown 字符内容<br /><br />📢📢📢：如果配合当前的库的命令行工具使用，根节点的渲染无需使用该函数，只需要将根节点默认导出就可以
    </td>
  </tr>
  <tr>
    <td>renderAsync</td>
    <td>
      <pre>(element: JSX.element) => Promise&lt;string&gt;</pre>
    </td>
    <td>
      异步渲染 JSX 元素，返回生成的 Markdown 字符内容<br /><br />当前函数只能用于渲染根节点，需要异步渲染的内容需要搭配 AsyncWrapper 来使用<br />📢📢📢：如果配合当前的库的命令行工具使用，根节点的渲染无需使用该函数，只需要将根节点默认导出就可以
    </td>
  </tr>
</table>

### 示例代码

<details open="true">
  <summary>代码</summary>

```tsx
import React, { renderAsync, AsyncWrapper, render } from 'jsx-to-md'

async function Test() {
  type Data = {
    name: string
  }
  const data: Promise<Data> = Promise.resolve({ name: 'World' })

  const res = await renderAsync(
    <AsyncWrapper data={data}>
      {({ name }) => {
        return <>{render(<>Hello {name}!</>)}</>
      }}
    </AsyncWrapper>,
  )

  console.log(res)
  // 输出：Hello World!
}

Test()
```


</details>


## 组件

### 布局
这里提供布局相关的组件
#### 组件列表

* Break


#### 属性说明

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|-|-|-|-|-|

#### 示例代码

<details open="true">
  <summary>代码</summary>

```tsx
import React, { Break } from 'jsx-to-md'

export default function () {
  return (
    <>
      abc
      <Break />
      efg
      <Break />
      hij
      <Break />
      <Break />
      klm
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
abc
efg
hij

klm
```



  </details><details open="true">
    <summary>渲染内容</summary>

abc
efg
hij

klm


  </details>

</details>


### 标题
对应 HTML 中 h1-h6 标签，使用方式也类似
#### 组件列表

* H1
* H2
* H3
* H4
* H5
* H6


#### 属性说明

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|skip|boolean|false|false|控制当前标题是否跳过生成目录|

#### 示例代码

<details open="true">
  <summary>代码</summary>

```tsx
import React, { H1, H2, H3, H4, H5, H6, TableOfContents } from 'jsx-to-md'

export default function () {
  return (
    <>
      <TableOfContents text="目录" />
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6>Heading 6</H6>
      {/** 跳过生成目录 */}
      <H1 skip>Skip Heading 1</H1>
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
<details open>
  <summary>目录</summary>

  [Heading 1](#heading-1)<br/>
  &emsp;&emsp;[Heading 2](#heading-2)<br/>
  &emsp;&emsp;&emsp;&emsp;[Heading 3](#heading-3)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Heading 4](#heading-4)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Heading 5](#heading-5)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Heading 6](#heading-6)<br/>

</details>

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

# Skip Heading 1
```



  </details><details open="true">
    <summary>渲染内容</summary>


<details open>
  <summary>目录</summary>

  [Heading 1](#heading-1)<br/>
  &emsp;&emsp;[Heading 2](#heading-2)<br/>
  &emsp;&emsp;&emsp;&emsp;[Heading 3](#heading-3)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Heading 4](#heading-4)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Heading 5](#heading-5)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Heading 6](#heading-6)<br/>

</details>

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

# Skip Heading 1



  </details>

</details>


### 字体

#### 组件列表

* Italic
* Bold
* BoldItalic
* StrikeThrough


#### 属性说明

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|mark|'*' \| '_'|false|'*'|生成对应 Markdown 语法的标记符<br /><br />该属性针对 `StrikeThrough` 无效|

#### 示例代码

<details open="true">
  <summary>代码</summary>

```tsx
import React, { Italic, Bold, BoldItalic, StrikeThrough, Break } from 'jsx-to-md'

export default function () {
  return (
    <>
      <Italic>斜体</Italic>
      <Break />
      <Bold>粗体</Bold>
      <Break />
      <BoldItalic>倾斜加粗</BoldItalic>
      <Break />
      <StrikeThrough>删除线</StrikeThrough>
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
*斜体*
**粗体**
***倾斜加粗***
~~删除线~~
```



  </details><details open="true">
    <summary>渲染内容</summary>

*斜体*
**粗体**
***倾斜加粗***
~~删除线~~


  </details>

</details>


### 引用块

#### 组件列表

* BlockQuote


#### 属性说明

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|level|number|false|1|层级，适用于多层嵌套的场景|

#### 示例代码

<details open="true">
  <summary>代码</summary>

```tsx
import React, { BlockQuote, Break } from 'jsx-to-md'

export default function () {
  return (
    <>
      <BlockQuote>普通引用</BlockQuote>
      <Break />
      <BlockQuote>
        嵌套引用
        <BlockQuote level={2}>
          Nest Block Quote Text1
          <BlockQuote level={3}>
            Nest Block Quote Text2
            <BlockQuote level={4}>Nest Block Quote Text3</BlockQuote>
          </BlockQuote>
        </BlockQuote>
      </BlockQuote>
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
>普通引用

>嵌套引用
>>Nest Block Quote Text1
>>>Nest Block Quote Text2
>>>>Nest Block Quote Text3
```



  </details><details open="true">
    <summary>渲染内容</summary>


>普通引用

>嵌套引用
>>Nest Block Quote Text1
>>>Nest Block Quote Text2
>>>>Nest Block Quote Text3


  </details>

</details>


### 代码

#### 组件列表

* InlineCode
* CodeBlock


#### 属性说明

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|code|string|true|-|代码内容<br /><br />该属性针对 `InlineCode` 无效|
|langType|string|false|js|代码类型<br /><br />该属性针对 `InlineCode` 无效|

#### 示例代码

<details open="true">
  <summary>代码</summary>

```tsx
import React, { H1, InlineCode, CodeBlock } from 'jsx-to-md'

export default function () {
  return (
    <>
      <H1>行内代码</H1>
      <InlineCode>console.log('Hello World!')</InlineCode>
      <H1>代码块</H1>
      <CodeBlock
        code={`
function foo(){
  console.log('Hello World!')
}

foo()`}
      />
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
# 行内代码
`console.log('Hello World!')`
# 代码块

```js
function foo(){
  console.log('Hello World!')
}

foo()
``` // 这里为了避免与 Markdown 语法冲突，多添加了此描述
```



  </details><details open="true">
    <summary>渲染内容</summary>


# 行内代码
`console.log('Hello World!')`
# 代码块

```js
function foo(){
  console.log('Hello World!')
}

foo()
```



  </details>

</details>


### 图片

#### 组件列表

* Image


#### 属性说明

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|src|string|true|-|图片链接地址|
|alt|string|true|-|图片加载异常显示的文案|
|title|string|false|-|鼠标悬浮显示的提示信息|

#### 示例代码

<details open="true">
  <summary>代码</summary>

```tsx
import React, { Image } from 'jsx-to-md'

export default function () {
  return (
    <>
      <Image
        title="图片标题"
        alt="图片说明"
        src="https://commonmark.org/help/images/favicon.png"
      />
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
![图片说明](https://commonmark.org/help/images/favicon.png "图片标题")
```



  </details><details open="true">
    <summary>渲染内容</summary>

![图片说明](https://commonmark.org/help/images/favicon.png "图片标题")


  </details>

</details>


### 链接

#### 组件列表

* Link


#### 属性说明

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|href|string|true|-|链接地址|
|title|string|false|-|鼠标悬浮显示的提示信息|

#### 示例代码

<details open="true">
  <summary>代码</summary>

```tsx
import React, { Link } from 'jsx-to-md'

export default function () {
  return (
    <>
      <Link
        title="链接标题"
        href="https://github.com/eyelly-wu/jsx-to-md"
      >
        jsx-to-md
      </Link>
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
[jsx-to-md](https://github.com/eyelly-wu/jsx-to-md "链接标题")
```



  </details><details open="true">
    <summary>渲染内容</summary>

[jsx-to-md](https://github.com/eyelly-wu/jsx-to-md "链接标题")


  </details>

</details>


### 列表

#### 组件列表

* 语义型
   * OderList
   * UnorderedList
   * ListItem
* 简易型
   * List


#### 属性说明

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|level|number|false|1|嵌套层级<br /><br />适用于 `OderList`、`UnorderedList`|
|mark|`_` \| `*`|false|*|生成对应 Markdown 语法的标记符<br /><br />适用于 `OderList`、`UnorderedList`|
|items|[Items](#items)|false|*|列表项配置<br /><br />适用于 `List`|

#### 类型说明

##### Items
正是由于如下复杂的嵌套类型，使得 `List` 可以通过简洁的语法拼凑出复杂的嵌套列表
```ts
/**
 * 列表类型
 * O | o标识有序列表
 * U | u标识无序列表
 */
type ListType = 'O' | 'o' | 'U' | 'u'
/**
 * 列表项内容
 */
type ListItem = string | JSX.Element | [string, Items]
/**
 * 列表项内容
 */
type Items =
  | [ListType, ...string[]]
  | [ListType, ListItem]
  | [ListType, ListItem, ListItem]
  | [ListType, ListItem, ListItem, ListItem]
  | [ListType, ListItem, ListItem, ListItem, ListItem]
  | [ListType, ListItem, ListItem, ListItem, ListItem, ListItem]
  | [ListType, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem]
  | [
      ListType,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
    ]
  | [
      ListType,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
    ]
  | [
      ListType,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
    ]
  | [
      ListType,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
    ]
      
```

#### 示例代码

<details open="true">
  <summary>代码</summary>

```tsx
import React, {
  H1,
  H2,
  H3,
  List,
  ListItem,
  OderList,
  UnorderedList,
} from 'jsx-to-md'

export default function () {
  return (
    <>
      <H1>列表</H1>
      <H2>语义类型</H2>
      <H3>无序列表</H3>
      <UnorderedList>
        <ListItem>列表项1</ListItem>
        <ListItem>列表项2</ListItem>
        <ListItem>列表项3</ListItem>
      </UnorderedList>
      <H3>有序列表</H3>
      <OderList>
        <ListItem>列表项1</ListItem>
        <ListItem>列表项2</ListItem>
        <ListItem>列表项3</ListItem>
      </OderList>
      <H3>嵌套列表</H3>
      <UnorderedList>
        <ListItem>
          开发
          <OderList level={2}>
            <ListItem>
              前端
              <UnorderedList level={3}>
                <ListItem>JavaScript</ListItem>
                <ListItem>HTML</ListItem>
                <ListItem>CSS</ListItem>
                <ListItem>...</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              后端
              <UnorderedList level={3}>
                <ListItem>Java</ListItem>
                <ListItem>SQL</ListItem>
                <ListItem>...</ListItem>
              </UnorderedList>
            </ListItem>
          </OderList>
        </ListItem>
        <ListItem>
          测试
          <UnorderedList level={2}>
            <ListItem>
              单元测试
              <OderList level={3}>
                <ListItem>JUnit</ListItem>
                <ListItem>Jest</ListItem>
                <ListItem>Vitest</ListItem>
                <ListItem>...</ListItem>
              </OderList>
            </ListItem>
            <ListItem>
              E2E测试
              <OderList level={3}>
                <ListItem>Cypress</ListItem>
                <ListItem>...</ListItem>
              </OderList>
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>...</ListItem>
      </UnorderedList>
      <H2>简易型</H2>
      <H3>无序列表</H3>
      <List items={['U', '列表项1', '列表项2', '列表项3']} />
      <H3>有序列表</H3>
      <List items={['O', '列表项1', '列表项2', '列表项3']} />
      <H3>嵌套列表</H3>
      <List
        items={[
          'O',
          [
            '开发',
            [
              'O',
              ['前端', ['U', 'JavaScript', 'HTML', 'CSS', '...']],
              ['后端', ['U', 'Java', 'SQL', '...']],
            ],
          ],
          [
            '测试',
            [
              'U',
              ['单元测试', ['O', 'JUnit', 'Jest', 'Vitest']],
              ['E2E测试', ['O', 'Cypress', '...']],
            ],
          ],
          '...',
        ]}
      />
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
# 列表

## 语义类型

### 无序列表

* 列表项1
* 列表项2
* 列表项3


### 有序列表

1. 列表项1
2. 列表项2
3. 列表项3


### 嵌套列表

* 开发
   1. 前端
      * JavaScript
      * HTML
      * CSS
      * ...
   2. 后端
      * Java
      * SQL
      * ...
* 测试
   * 单元测试
      1. JUnit
      2. Jest
      3. Vitest
      4. ...
   * E2E测试
      1. Cypress
      2. ...
* ...


## 简易型

### 无序列表

* 列表项1
* 列表项2
* 列表项3


### 有序列表

1. 列表项1
2. 列表项2
3. 列表项3


### 嵌套列表

1. 开发
   1. 前端
      * JavaScript
      * HTML
      * CSS
      * ...
   2. 后端
      * Java
      * SQL
      * ...
2. 测试
   * 单元测试
      1. JUnit
      2. Jest
      3. Vitest
   * E2E测试
      1. Cypress
      2. ...
3. ...
```



  </details><details open="true">
    <summary>渲染内容</summary>


# 列表

## 语义类型

### 无序列表

* 列表项1
* 列表项2
* 列表项3


### 有序列表

1. 列表项1
2. 列表项2
3. 列表项3


### 嵌套列表

* 开发
   1. 前端
      * JavaScript
      * HTML
      * CSS
      * ...
   2. 后端
      * Java
      * SQL
      * ...
* 测试
   * 单元测试
      1. JUnit
      2. Jest
      3. Vitest
      4. ...
   * E2E测试
      1. Cypress
      2. ...
* ...


## 简易型

### 无序列表

* 列表项1
* 列表项2
* 列表项3


### 有序列表

1. 列表项1
2. 列表项2
3. 列表项3


### 嵌套列表

1. 开发
   1. 前端
      * JavaScript
      * HTML
      * CSS
      * ...
   2. 后端
      * Java
      * SQL
      * ...
2. 测试
   * 单元测试
      1. JUnit
      2. Jest
      3. Vitest
   * E2E测试
      1. Cypress
      2. ...
3. ...




  </details>

</details>


### 表格

#### 组件列表

* Table


#### 属性说明

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|columns|[Column[]](#column)|true|-|列头配置|
|data|any[]|true|-|表体数据内容|

#### 类型说明

##### Column

```ts
type Column = {
  title: string // 表格标题
  fieldName: string // 当前列字段名
  align?: 'left' | 'center' | 'right' // 当前列文本对齐方式
}
```

#### 示例代码

<details open="true">
  <summary>代码</summary>

```tsx
import React, { Table } from 'jsx-to-md'

export default function () {
  return (
    <>
      <Table
        columns={[
          { fieldName: 'field1', title: '靠左标题' },
          { fieldName: 'field2', title: '居中标题', align: 'center' },
          { fieldName: 'field3', title: '靠右标题', align: 'right' },
        ]}
        data={Array(10)
          .fill(0)
          .map((item) => {
            return ['field1', 'field2', 'field3'].reduce((res, item) => {
              res[item] = '随机数：' + Math.random().toString(10).slice(2)
              return res
            }, {})
          })}
      />
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
|靠左标题|居中标题|靠右标题|
|:-|:-:|-:|
|随机数：6315650061626981|随机数：7289193284239115|随机数：9118006165945602|
|随机数：5776755512107785|随机数：3906204819045427|随机数：2230194551130622|
|随机数：23525338192442335|随机数：031365519931212615|随机数：7897883644646497|
|随机数：817442187769351|随机数：5555093983887605|随机数：5701930292675359|
|随机数：5188022382167237|随机数：9367545819390977|随机数：6629703951316865|
|随机数：5366787682663483|随机数：9135513049655355|随机数：13756492898935524|
|随机数：05492612947783382|随机数：49131969409041565|随机数：1081814060334807|
|随机数：6477949338208673|随机数：359006869380476|随机数：4628254809831014|
|随机数：45554129453768666|随机数：07790041765230815|随机数：21279911002262608|
|随机数：7290955331070239|随机数：5843359349733952|随机数：24144662667414796|
```



  </details><details open="true">
    <summary>渲染内容</summary>


|靠左标题|居中标题|靠右标题|
|:-|:-:|-:|
|随机数：6315650061626981|随机数：7289193284239115|随机数：9118006165945602|
|随机数：5776755512107785|随机数：3906204819045427|随机数：2230194551130622|
|随机数：23525338192442335|随机数：031365519931212615|随机数：7897883644646497|
|随机数：817442187769351|随机数：5555093983887605|随机数：5701930292675359|
|随机数：5188022382167237|随机数：9367545819390977|随机数：6629703951316865|
|随机数：5366787682663483|随机数：9135513049655355|随机数：13756492898935524|
|随机数：05492612947783382|随机数：49131969409041565|随机数：1081814060334807|
|随机数：6477949338208673|随机数：359006869380476|随机数：4628254809831014|
|随机数：45554129453768666|随机数：07790041765230815|随机数：21279911002262608|
|随机数：7290955331070239|随机数：5843359349733952|随机数：24144662667414796|



  </details>

</details>


### 任务清单

#### 组件列表

* TaskList


#### 属性说明

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|items|[TaskItem[]](#taskitem)|true|-|任务项配置<br /><br />支持多层级任务，内部会根据子任务的状态计算出父任务的状态|

#### 类型说明

##### TaskItem

```ts
// 任务状态 0: 未完成，1：已完成
type TaskStatus = 0 | 1
// 任务项，任务状态默认为已完成
type TaskItem = string | [string, TaskStatus] | [string, TaskItem[]]
```

#### 示例代码

<details open="true">
  <summary>代码</summary>

```tsx
import React, { H1, H2, TaskList } from 'jsx-to-md'

export default function TaskListDemo() {
  return (
    <>
      <H1>任务列表</H1>
      <H2>基础</H2>
      <TaskList items={['done1', ['undo', 0], ['done2', 1]]} />
      <H2>嵌套</H2>
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
      />
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
# 任务列表

## 基础

- [x] done1
- [ ] undo
- [x] done2


## 嵌套

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
```



  </details><details open="true">
    <summary>渲染内容</summary>


# 任务列表

## 基础

- [x] done1
- [ ] undo
- [x] done2


## 嵌套

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




  </details>

</details>


### 目录
对应 Markdown 语法中的 `[TOC]`
#### 组件列表

* TableOfContents


#### 属性说明

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|text|string|false|Table of Contents|目录显示文案|
|open|boolean|false|true|是否默认展开目录|
|indent|`Array<'&nbsp; \| '&ensp; \| '&emsp; \| '&thinsp; \| '&zwnj; \| '&zwj;'>`|false|`['&emsp;', '&emsp;']`|目录缩进<br /><br />目录的层次结构是基于缩进来实现的|

#### 示例代码

<details open="true">
  <summary>代码</summary>

```tsx
import React, { Break, H1, H2, H3, H4, H5, H6, TableOfContents } from 'jsx-to-md'

export default function () {
  const props = { skip: true }

  return (
    <>
      <TableOfContents text="目录" indent={['&ensp;']} />
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6>Heading 6</H6>

      <h1>HTML Heading 1</h1>
      <h2>HTML Heading 2</h2>
      <h3>HTML Heading 3</h3>
      <h4>HTML Heading 4</h4>
      <h5>HTML Heading 5</h5>
      <h6>HTML Heading 6</h6>
      <Break />
      {/** 跳过生成目录 */}
      <H1 skip>Skip Heading 1</H1>

      <h1 {...props}>Skip HTML Heading 1</h1>
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
<details open>
  <summary>目录</summary>

  [Heading 1](#heading-1)<br/>
  &ensp;[Heading 2](#heading-2)<br/>
  &ensp;&ensp;[Heading 3](#heading-3)<br/>
  &ensp;&ensp;&ensp;[Heading 4](#heading-4)<br/>
  &ensp;&ensp;&ensp;&ensp;[Heading 5](#heading-5)<br/>
  &ensp;&ensp;&ensp;&ensp;&ensp;[Heading 6](#heading-6)<br/>
  [HTML Heading 1](#html-heading-1)<br/>
  &ensp;[HTML Heading 2](#html-heading-2)<br/>
  &ensp;&ensp;[HTML Heading 3](#html-heading-3)<br/>
  &ensp;&ensp;&ensp;[HTML Heading 4](#html-heading-4)<br/>
  &ensp;&ensp;&ensp;&ensp;[HTML Heading 5](#html-heading-5)<br/>
  &ensp;&ensp;&ensp;&ensp;&ensp;[HTML Heading 6](#html-heading-6)<br/>

</details>

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
<h1>HTML Heading 1</h1><h2>HTML Heading 2</h2><h3>HTML Heading 3</h3><h4>HTML Heading 4</h4><h5>HTML Heading 5</h5><h6>HTML Heading 6</h6>

# Skip Heading 1
<h1>Skip HTML Heading 1</h1>
```



  </details><details open="true">
    <summary>渲染内容</summary>


<details open>
  <summary>目录</summary>

  [Heading 1](#heading-1)<br/>
  &ensp;[Heading 2](#heading-2)<br/>
  &ensp;&ensp;[Heading 3](#heading-3)<br/>
  &ensp;&ensp;&ensp;[Heading 4](#heading-4)<br/>
  &ensp;&ensp;&ensp;&ensp;[Heading 5](#heading-5)<br/>
  &ensp;&ensp;&ensp;&ensp;&ensp;[Heading 6](#heading-6)<br/>
  [HTML Heading 1](#html-heading-1)<br/>
  &ensp;[HTML Heading 2](#html-heading-2)<br/>
  &ensp;&ensp;[HTML Heading 3](#html-heading-3)<br/>
  &ensp;&ensp;&ensp;[HTML Heading 4](#html-heading-4)<br/>
  &ensp;&ensp;&ensp;&ensp;[HTML Heading 5](#html-heading-5)<br/>
  &ensp;&ensp;&ensp;&ensp;&ensp;[HTML Heading 6](#html-heading-6)<br/>

</details>

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
<h1>HTML Heading 1</h1><h2>HTML Heading 2</h2><h3>HTML Heading 3</h3><h4>HTML Heading 4</h4><h5>HTML Heading 5</h5><h6>HTML Heading 6</h6>

# Skip Heading 1
<h1>Skip HTML Heading 1</h1>


  </details>

</details>


### 异步渲染包装器
用于支持异步渲染
#### 组件列表

* AsyncWrapper


#### 属性说明

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|data|Promise<T>|true|-|异步加载的数据|

#### 示例代码

<details open="true">
  <summary>代码</summary>

```tsx
import React, { List, AsyncWrapper } from 'jsx-to-md'

export default function AsyncDemo() {
  type Data = {
    name: string
  }
  const asyncData1 = new Promise<Data>((resolve) => {
    setTimeout(() => {
      resolve({
        name: '朋友',
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

  return (
    <>
      <List
        items={[
          'U',
          [
            '基础的',
            [
              'U',
              <AsyncWrapper data={asyncData1}>
                {({ name }) => {
                  return <>Hi {name}</>
                }}
              </AsyncWrapper>,
            ],
          ],
          [
            '嵌套的',
            [
              'U',
              <AsyncWrapper data={asyncData1}>
                {({ name }) => {
                  return (
                    <>
                      Hi {name}
                      <AsyncWrapper data={asyncData2}>
                        {({ name }) => {
                          return <>,{i18n('这是 `{0}`, 欢迎使用', name)}</>
                        }}
                      </AsyncWrapper>
                    </>
                  )
                }}
              </AsyncWrapper>,
            ],
          ],
        ]}
      />
    </>
  )
}
```
<details open="true">
    <summary>渲染内容</summary>


* 基础的
   * Hi 朋友
* 嵌套的
   * Hi 朋友,这是 `jsx-to-md`, 欢迎使用




  </details>

</details>

