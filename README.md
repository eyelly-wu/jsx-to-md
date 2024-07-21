<div style="text-align: center;"align="center">
  <p style="font-size: 18px;">
    A tool that supports writing Markdown through JSX

English | [简体中文](https://github.com/eyelly-wu/jsx-to-md/blob/v0.11.5/README_zh-CN.md)


  </p>

[![npm-version](https://img.shields.io/npm/v/jsx-to-md.svg?style=flat-square "npm-version")](https://www.npmjs.com/package/jsx-to-md "npm")
[![npm-download](https://img.shields.io/npm/dm/jsx-to-md "npm-download")](https://www.npmjs.com/package/jsx-to-md "npm")
[![codecov](https://codecov.io/gh/eyelly-wu/jsx-to-md/branch/main/graph/badge.svg?token=tocki8cvYM "codecov")](https://codecov.io/gh/eyelly-wu/jsx-to-md "codecov")
[![github-stars](https://img.shields.io/github/stars/eyelly-wu/jsx-to-md?style=social "github-stars")](https://github.com/eyelly-wu/jsx-to-md/stargazers "github-stars")![demo](https://s3.bmp.ovh/imgs/2023/04/02/ea796b84837c91dd.gif "demo")
</div>
<details >
  <summary>Table of Contents</summary>

  [Vision](#vision)<br/>
  [Features](#features)<br/>
  [Live Demo](#live-demo)<br/>
  [Principle](#principle)<br/>
  [Help Document](#help-document)<br/>
  [License](#license)<br/>

</details>

# Vision
To make it easy and pleasant to write  `Markdown`  through  `JSX`  😄💪🏻

# Features

* Provides the basic component for rendering and generating Markdown syntax content
* Real-time rendering and generation
* Support Native HTML
* Support rendering multiple documents simultaneously
* Support generate table of contents
* Support asynchronous rendering


# Live Demo

* [Open in CodeSandbox](https://codesandbox.io/p/github/eyelly-wu/jsx-to-md-demo/main?file=README.md)
* [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg "Open in StackBlitz")](https://stackblitz.com/github/eyelly-wu/jsx-to-md-demo?file=README.md)



# Principle
The library is mainly composed of two parts

* Command Line Tools
* Function API


**Command Line Tools**：Parse configuration files, execute render logic, and finally generate Markdown files

**Function API**：Provides basic components and render functions of benchmarking Markdown syntax

* **Basic components**：Basic components for replacing Markdown syntax
* **Render function**：Render the content written by JSX and return the generated character content


So  `Command Line Tools`  and  `Function API`  are better used together
# Help Document

* [Quick Start](https://github.com/eyelly-wu/jsx-to-md/blob/v0.11.5/docs/dist/USAGE.md)
* [Command Line](https://github.com/eyelly-wu/jsx-to-md/blob/v0.11.5/docs/dist/COMMAND_LINE.md)
* [API](https://github.com/eyelly-wu/jsx-to-md/blob/v0.11.5/docs/dist/API.md)
* [Changelog](https://github.com/eyelly-wu/jsx-to-md/blob/v0.11.5/docs/dist/CHANGELOG.md)


# License
[MIT](./LICENSE)

Copyright (c) 2022-present Eyelly Wu