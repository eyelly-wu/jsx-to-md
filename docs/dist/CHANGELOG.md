
# Changelog


English | [简体中文](https://github.com/eyelly-wu/jsx-to-md/blob/v0.12.2/docs/dist/CHANGELOG_zh-CN.md)


<details >
  <summary>Table of Contents</summary>

  &emsp;&emsp;[[0.12.2] - 2025-06-18](#0122---2025-06-18)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#0122-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#0122-api-fixed)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Removed](#0122-api-removed)<br/>
  &emsp;&emsp;[[0.12.1] - 2025-06-17](#0121---2025-06-17)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#0121-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#0121-api-added)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#0121-api-fixed)<br/>
  &emsp;&emsp;[[0.12.0] - 2025-06-08](#0120---2025-06-08)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#0120-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#0120-api-added)<br/>
  &emsp;&emsp;[[0.11.6] - 2025-04-23](#0116---2025-04-23)<br/>
  &emsp;&emsp;&emsp;&emsp;[Command Line Tools](#0116-command-line-tools)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#0116-command-line-tools-fixed)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#0116-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Changed](#0116-api-changed)<br/>
  &emsp;&emsp;[[0.11.5] - 2024-07-21](#0115---2024-07-21)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#0115-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#0115-api-fixed)<br/>
  &emsp;&emsp;[[0.11.4] - 2023-08-29](#0114---2023-08-29)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#0114-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#0114-api-fixed)<br/>
  &emsp;&emsp;[[0.11.3] - 2023-06-02](#0113---2023-06-02)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#0113-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#0113-api-fixed)<br/>
  &emsp;&emsp;[[0.11.2] - 2023-05-23](#0112---2023-05-23)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#0112-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#0112-api-fixed)<br/>
  &emsp;&emsp;[[0.11.1] - 2023-05-22](#0111---2023-05-22)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#0111-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#0111-api-fixed)<br/>
  &emsp;&emsp;[[0.11.0] - 2023-05-07](#0110---2023-05-07)<br/>
  &emsp;&emsp;&emsp;&emsp;[Command Line Tools](#0110-command-line-tools)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#0110-command-line-tools-added)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#0110-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#0110-api-added)<br/>
  &emsp;&emsp;&emsp;&emsp;[Docs](#0110-docs)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Changed](#0110-docs-changed)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#0110-docs-fixed)<br/>
  &emsp;&emsp;[[0.10.1] - 2023-05-03](#0101---2023-05-03)<br/>
  &emsp;&emsp;&emsp;&emsp;[Command Line Tools](#0101-command-line-tools)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#0101-command-line-tools-fixed)<br/>
  &emsp;&emsp;[[0.10.0] - 2023-04-20](#0100---2023-04-20)<br/>
  &emsp;&emsp;&emsp;&emsp;[Command Line Tools](#0100-command-line-tools)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#0100-command-line-tools-fixed)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#0100-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#0100-api-added)<br/>
  &emsp;&emsp;[[0.9.1] - 2023-04-02](#091---2023-04-02)<br/>
  &emsp;&emsp;&emsp;&emsp;[Docs](#091-docs)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Changed](#091-docs-changed)<br/>
  &emsp;&emsp;[[0.9.0] - 2023-04-02](#090---2023-04-02)<br/>
  &emsp;&emsp;&emsp;&emsp;[Command Line Tools](#090-command-line-tools)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#090-command-line-tools-added)<br/>
  &emsp;&emsp;[[0.8.6] - 2023-03-21](#086---2023-03-21)<br/>
  &emsp;&emsp;&emsp;&emsp;[Command Line Tools](#086-command-line-tools)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#086-command-line-tools-added)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#086-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#086-api-added)<br/>

</details>

## [0.12.2] - 2025-06-18

<h3 id="0122-api">API</h3>

<h4 id="0122-api-fixed">Fixed</h4>

* Fix incorrect navigation of the generated directory in  `Github`  for the following scenarios
   *  `:`  exists in the title
   *  `：`  exists in the title
* Fix the issue of  `BlockQuote`  rendering multi line text
   * **Example**
```jsx
<BlockQuote>
  {`First line of text

Second line of text`}
</BlockQuote>
```
<p>Content generated before fix:</p>

> First line of text

> Second line of text

<p>Content generated after fix:</p>

> First line of text<br/>
>
> Second line of text<br/>


<h4 id="0122-api-removed">Removed</h4>

* Remove  `level`  property from  `BlockQuote` 


## [0.12.1] - 2025-06-17

<h3 id="0121-api">API</h3>

<h4 id="0121-api-added">Added</h4>

* Add  `lines`  property to  `Break`  for flexible line breaks


<h4 id="0121-api-fixed">Fixed</h4>

* Fix the issue of  `BlockQuote`  rendering multi line text
   * **Example**
```jsx
<BlockQuote>
  {`First line of text
Second line of text`}
</BlockQuote>
```
<p>Content generated before fix:</p>

>First line of text Second line of text

<p>Content generated after fix:</p>

> First line of text<br/>
> Second line of text<br/>


## [0.12.0] - 2025-06-08

<h3 id="0120-api">API</h3>

<h4 id="0120-api-added">Added</h4>

* Enhance support for rendering  `SVG`  elements


## [0.11.6] - 2025-04-23

<h3 id="0116-command-line-tools">Command Line Tools</h3>

<h4 id="0116-command-line-tools-fixed">Fixed</h4>

* Optimize parsing path error when executing  `jtm run`  command on  `Windows` 


<h3 id="0116-api">API</h3>

<h4 id="0116-api-changed">Changed</h4>

* Simplify the  `items`  attribute  `TypeScript`  type definition of the  `List`  component


## [0.11.5] - 2024-07-21

<h3 id="0115-api">API</h3>

<h4 id="0115-api-fixed">Fixed</h4>

* Fix: When setting the command line parameter  `--jsx`  to  `classical`  and executing the  `run`  command, it will cause a scene list similar to the following to render as empty 
```js
<div>
  {['a', 'b', 'c'].map(item=> <span>{item}</span>)}
</div>

// Comparison of rendering results of the above nodes:
// Bug manifestation: <div></div>
// Correct result: <div><span>a</span><span>b</span><span>c</span></div>
```



## [0.11.4] - 2023-08-29

<h3 id="0114-api">API</h3>

<h4 id="0114-api-fixed">Fixed</h4>

* Fix incorrect navigation of the generated directory in  `Github`  for the following scenarios
   * <code>,</code> exists in the title
   * <code>，</code> exists in the title


## [0.11.3] - 2023-06-02

<h3 id="0113-api">API</h3>

<h4 id="0113-api-fixed">Fixed</h4>

* Fix incorrect navigation of the generated directory in  `Github`  for the following scenarios
   * <code>'</code> exists in the title
   * There is x&nbsp;&nbsp;<code>`xxx`</code> similar text in the title


## [0.11.2] - 2023-05-23

<h3 id="0112-api">API</h3>

<h4 id="0112-api-fixed">Fixed</h4>

* Fix incorrect navigation of the generated directory in  `Github`  for the following scenarios
   * There is <code>``</code> package with non English content at the end of the title


## [0.11.1] - 2023-05-22

<h3 id="0111-api">API</h3>

<h4 id="0111-api-fixed">Fixed</h4>

* Fix incorrect navigation of the generated directory in  `Github`  for the following scenarios
   * There are <code>``</code> packages with non English content


## [0.11.0] - 2023-05-07

<h3 id="0110-command-line-tools">Command Line Tools</h3>

<h4 id="0110-command-line-tools-added">Added</h4>

* Optimize table of contents generation, support anchor link generation by identifying  `id`  attributes in  `H1-H6`  and  `h1-h6` 


<h3 id="0110-api">API</h3>

<h4 id="0110-api-added">Added</h4>

*  `Header`  related component  `H1-H6`  added  `id`  attribute


<h3 id="0110-docs">Docs</h3>

<h4 id="0110-docs-changed">Changed</h4>

* Update the  `Changelog`  document format to independently distinguish the updated content of  `Command Line Tools` ,  `API` , and  `Docs` 


<h4 id="0110-docs-fixed">Fixed</h4>

* Fix directory anchor jump exception generated by the same title in  `API`  and  `Changelog`  documents


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

<h3 id="091-docs">Docs</h3>

<h4 id="091-docs-changed">Changed</h4>

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

