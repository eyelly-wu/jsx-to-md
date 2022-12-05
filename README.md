<div style="text-align: center;"align="center">
  <p style="font-size: 18px;">
    A tool that supports writing Markdown through JSX

English | [简体中文](https://github.com/eyelly-wu/jsx-to-md/blob/v0.5.0/README_zh-CN.md)


  </p>

[![npm-version](https://img.shields.io/npm/v/jsx-to-md.svg?style=flat-square "npm-version")](https://www.npmjs.com/package/jsx-to-md "npm")
[![npm-download](https://img.shields.io/npm/dm/jsx-to-md "npm-download")](https://www.npmjs.com/package/jsx-to-md "npm")
[![codecov](https://codecov.io/gh/eyelly-wu/jsx-to-md/branch/main/graph/badge.svg?token=tocki8cvYM "codecov")](https://codecov.io/gh/eyelly-wu/jsx-to-md "codecov")
[![github-stars](https://img.shields.io/github/stars/eyelly-wu/jsx-to-md?style=social "github-stars")](https://github.com/eyelly-wu/jsx-to-md/stargazers "github-stars")
</div>

# vision
To make it easy and pleasant to write  `Markdown`  through  `JSX`  😄💪🏻

# characteristic

* Real time rendering generation
* Native HTML support
* Support simultaneous rendering of multiple documents


# Live Demo

* [Open in CodeSandbox](https://codesandbox.io/p/github/eyelly-wu/jsx-to-md-demo/main?file=README.md)
* [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/eyelly-wu/jsx-to-md-demo?file=README.md)



# principle
The library is mainly composed of two parts

* Command Line Tools
* Function API


**Command Line Tools**：Parse configuration files, execute render logic, and finally generate Markdown files

**Function API**：Provides basic components and render functions of benchmarking Markdown syntax

* **Basic components**：Basic components for replacing Markdown syntax
* **Render function**：Render the content written by JSX and return the generated character content


So  `Command Line Tools`  and  `Function API`  are better used together

# usage

## 1. install

```bash
npm i -D jsx-to-md
# perhaps
yarn add jsx-to-md --dev
# perhaps
pnpm i -D jsx-to-md
```

## 2. Create JSX file
Create a directory named  `docs`  under the root directory, and create  `index.tsx`  files under this directory
```text
.
├── ...Other relevant documents
├── docs
│   └── index.tsx
├── node_modules
└── package.json
        
```
Suppose the content of  `index.tsx`  is as follows:
>Here, the JSX syntax is React The form of createElement, so we need to import React by default
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


## 3. Initialize command line configuration file
Enter the following command at the command line terminal,[More Commands](#command-list)
```bash
npm jtm init
```
Then a  `jsx-to-md.config.js`  file will be generated in the current directory

Then your file directory is like this
```text
.
├── ...Other relevant documents
├── docs
│   └── index.tsx
├── jsx-to-md.config.js
├── node_modules
└── package.json
        
```


## 4. Adjust  `jsx-to-md.config.js`  configuration
Adjust the configuration items in the configuration file according to the requirements

The default configuration is as follows:
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

## 5. Execute build command
Execute the following command
```bash
npx jtm run
```
If the above default configuration is not adjusted and the command is executed successfully, the corresponding Markdown file will be generated in the root directory. The final generated Markdown text is as follows
```md
Hello [jsx-to-md](https://github.com/eyelly-wu/jsx-to-md)!
```
The display effect is as follows<br />
>Hello [jsx-to-md](https://github.com/eyelly-wu/jsx-to-md)!

And  `docs/index.tsx`  content is adjusted. After saving, the corresponding Markdown file will also change synchronously in real time
# command line

## 1.  `jsx-to-md.config.js`  configuration

### Basic configuration

|name|type|Required|Default|explain|
|:-:|:-:|:-:|:-:|:-|
|source|[Source](#source)[]|yes|-|Data source related configuration|

### Source
Data source related configuration
|name|type|Required|Default|explain|
|:-:|:-:|:-:|:-:|:-|
|entry|string|yes|-|Document entry file (absolute path)|
|output|string|no|-|Path to generate Markdown file (absolute path)|
|params|Record<string,unknow>|no|{}|Props attribute received by the entry file|

## 2. command

### Command List

|command|Abbreviation|usage|explain|
|:-:|:-:|:-|:-|
|init|-|`npx jtm init`|Initialize Profile|
|run|-|`npx jtm run`|Read configuration to generate Markdown file|

### Command parameters

|Parameter name|Parameter value|Applicable order|usage|explain|
|:-:|:-:|:-:|:-|:-|
|--watch| `true` \| `false` | `run` |`npx jtm run`<br />`npx jtm run --watch true`<br />`npx jtm run --watch false`|Specifies whether to enable file monitoring. This configuration is enabled by default. After enabling, the relevant file changes will regenerate the Markdown file|
