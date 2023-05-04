
# Changelog

<details >
  <summary>Table of Contents</summary>

  &emsp;&emsp;[[0.11.0] - 2023-05-xx](#0110---2023-05-xx)<br/>
  &emsp;&emsp;&emsp;&emsp;[Command Line Tools](#0110-command-line-tools)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#0110-command-line-tools-added)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#0110-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#0110-api-added)<br/>
  &emsp;&emsp;&emsp;&emsp;[文档](#0110-文档)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Changed](#0110-文档-changed)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#0110-文档-fixed)<br/>
  &emsp;&emsp;[[0.10.1] - 2023-05-03](#0101---2023-05-03)<br/>
  &emsp;&emsp;&emsp;&emsp;[Command Line Tools](#0101-command-line-tools)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#0101-command-line-tools-fixed)<br/>
  &emsp;&emsp;[[0.10.0] - 2023-04-20](#0100---2023-04-20)<br/>
  &emsp;&emsp;&emsp;&emsp;[Command Line Tools](#0100-command-line-tools)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#0100-command-line-tools-fixed)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#0100-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#0100-api-added)<br/>
  &emsp;&emsp;[[0.9.1] - 2023-04-02](#091---2023-04-02)<br/>
  &emsp;&emsp;&emsp;&emsp;[文档](#091-文档)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Changed](#091-文档-changed)<br/>
  &emsp;&emsp;[[0.9.0] - 2023-04-02](#090---2023-04-02)<br/>
  &emsp;&emsp;&emsp;&emsp;[Command Line Tools](#090-command-line-tools)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#090-command-line-tools-added)<br/>
  &emsp;&emsp;[[0.8.6] - 2023-03-21](#086---2023-03-21)<br/>
  &emsp;&emsp;&emsp;&emsp;[Command Line Tools](#086-command-line-tools)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#086-command-line-tools-added)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#086-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#086-api-added)<br/>

</details>

## [0.11.0] - 2023-05-xx

<h3 id="0110-command-line-tools">Command Line Tools</h3>

<h4 id="0110-command-line-tools-added">Added</h4>

* 优化目录的生成，支持通过识别 `H1-H6` 和 `h1-h6` 中的 `id` 属性来生成锚点链接


<h3 id="0110-api">API</h3>

<h4 id="0110-api-added">Added</h4>

*  `Header` 相关组件(H1-H6)添加 `id` 属性


<h3 id="0110-文档">文档</h3>

<h4 id="0110-文档-changed">Changed</h4>

* 更新 `Changelog` 文档格式，将独立区分 `Command Line Tools` 、 `API` 、 `文档` 更新的内容


<h4 id="0110-文档-fixed">Fixed</h4>

* 修复 `API` 和 `Changelog` 文档中相同标题生成的目录锚点跳转异常


## [0.10.1] - 2023-05-03

<h3 id="0101-command-line-tools">Command Line Tools</h3>

<h4 id="0101-command-line-tools-fixed">Fixed</h4>

* Fix incorrect navigation of the generated directory in  `Github`  for the following scenarios
   * The content of  `()`  package exists
   * The content of  `（）`  package exists
   * The content of  `**`  package exists
   * Content with  `?`  exists
   * Content with  `？`  exists


## [0.10.0] - 2023-04-20

<h3 id="0100-command-line-tools">Command Line Tools</h3>

<h4 id="0100-command-line-tools-fixed">Fixed</h4>

* Fix incorrect navigation of the generated directory in  `Github`  for the following scenarios
   * The content of  `[]`  package exists
   * The content of <code> `` </code> package exists


<h3 id="0100-api">API</h3>

<h4 id="0100-api-added">Added</h4>

* Add a tool method for generating anchors:  `getAnchor` 


## [0.9.1] - 2023-04-02

<h3 id="091-文档">文档</h3>

<h4 id="091-文档-changed">Changed</h4>

* Update the example effect screenshots in  `README` 


## [0.9.0] - 2023-04-02

<h3 id="090-command-line-tools">Command Line Tools</h3>

<h4 id="090-command-line-tools-added">Added</h4>

* New command parameter  `--jsx`  has been added for specifying the compilation method of  `JSX` , thus determining whether  `React`  needs to be manually imported


## [0.8.6] - 2023-03-21

<h3 id="086-command-line-tools">Command Line Tools</h3>

<h4 id="086-command-line-tools-added">Added</h4>

* Implement basic command line tools


<h3 id="086-api">API</h3>

<h4 id="086-api-added">Added</h4>

* Implement the basic function API and basic components

