<div style="text-align: center;"align="center">
  <p style="font-size: 18px;">
    一款支持通过 JSX 来编写 Markdown 的工具

[English](https://github.com/eyelly-wu/jsx-to-md/tree/v0.8.0#readme) | 简体中文


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
|params|Record<string,unknow>|否|{}|入口文件接收到的 props 属性|

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
