<div style="text-align: center;"align="center">
  <p style="font-size: 18px;">
    一款支持通过 JSX 来编写 Markdown 的工具

[English](https://github.com/eyelly-wu/jsx-to-md/tree/v0.8.6#readme) | 简体中文


  </p>

[![npm-version](https://img.shields.io/npm/v/jsx-to-md.svg?style=flat-square "npm-version")](https://www.npmjs.com/package/jsx-to-md "npm")
[![npm-download](https://img.shields.io/npm/dm/jsx-to-md "npm-download")](https://www.npmjs.com/package/jsx-to-md "npm")
[![codecov](https://codecov.io/gh/eyelly-wu/jsx-to-md/branch/main/graph/badge.svg?token=tocki8cvYM "codecov")](https://codecov.io/gh/eyelly-wu/jsx-to-md "codecov")
[![github-stars](https://img.shields.io/github/stars/eyelly-wu/jsx-to-md?style=social "github-stars")](https://github.com/eyelly-wu/jsx-to-md/stargazers "github-stars")![demo](https://s3.bmp.ovh/imgs/2023/03/21/1080b9ca3917b578.gif "demo")
</div>
<details >
  <summary>目录</summary>

  [愿景](#愿景)<br/>
  [特性](#特性)<br/>
  [Live Demo](#live-demo)<br/>
  [原理](#原理)<br/>
  [帮助文档](#帮助文档)<br/>
  [License](#license)<br/>

</details>

# 愿景
为了让通过 `JSX` 来编写 `Markdown` 成为件轻松且愉快的事😄💪🏻

# 特性

* 提供渲染生成 Markdown 语法内容的基础组件
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
# 帮助文档

* [快速上手](https://github.com/eyelly-wu/jsx-to-md/blob/v0.8.6/docs/dist/USAGE_zh-CN.md)
* [命令行](https://github.com/eyelly-wu/jsx-to-md/blob/v0.8.6/docs/dist/COMMAND_LINE_zh-CN.md)
* [API](https://github.com/eyelly-wu/jsx-to-md/blob/v0.8.6/docs/dist/API_zh-CN.md)
* [更新日志](https://github.com/eyelly-wu/jsx-to-md/blob/v0.8.6/docs/dist/CHANGELOG_zh-CN.md)


# License
[MIT](./LICENSE)

Copyright (c) 2022-present Eyelly Wu