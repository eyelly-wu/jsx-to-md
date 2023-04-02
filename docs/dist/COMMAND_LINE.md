
# Command Line

<details >
  <summary>Table of Contents</summary>

  &emsp;&emsp;[1.  `jsx-to-md.config.js`  configuration](#1-jsx-to-mdconfigjs-configuration)<br/>
  &emsp;&emsp;&emsp;&emsp;[Basic Configuration](#basic-configuration)<br/>
  &emsp;&emsp;&emsp;&emsp;[Source](#source)<br/>
  &emsp;&emsp;[2. Command](#2-command)<br/>
  &emsp;&emsp;&emsp;&emsp;[Command List](#command-list)<br/>
  &emsp;&emsp;&emsp;&emsp;[Command Parameters](#command-parameters)<br/>

</details>

## 1.  `jsx-to-md.config.js`  configuration

### Basic Configuration

|Name|Type|Required|Default|description|
|:-:|:-:|:-:|:-:|:-|
|source|[Source](#source)[]|Yes|-|Datasource related configuration|

### Source
Datasource related configuration
|Name|Type|Required|Default|description|
|:-:|:-:|:-:|:-:|:-|
|entry|string|Yes|-|Document entry file (absolute path)|
|output|string|No|-|Path to generate Markdown file (absolute path)|
|params|Record<string,unknown>|No|{}|Props attribute received by the entry file|

## 2. Command

### Command List

|Command|Abbreviation|Usage|description|
|:-:|:-:|:-|:-|
|init|-|`npx jtm init`|Initialize Profile|
|run|-|`npx jtm run`|Read configuration to generate Markdown file|

### Command Parameters

|Parameter name|Parameter value|Applicable command|Usage|description|
|:-:|:-:|:-:|:-|:-|
|--watch| `true` \| `false` | `run` |`npx jtm run`<br />`npx jtm run --watch true`<br />`npx jtm run --watch false`|Specifies whether to enable file monitoring. This configuration is enabled by default. After enabling, the relevant file changes will regenerate the Markdown file|
|--jsx| `classic` \| `automatic` | `run` |`npx jtm run`<br />`npx jtm run --jsx classic`<br />`npx jtm run --jsx automatic`|Can be used to specify the compilation method for  `JSX`  to determine whether it is necessary to manually import  `React` <br /><br /><b>classic</b>:  `JSX`  will compile to  `React.createElement` , requiring the introduction of  `React` <b>automatic</b>: Internal default will import  `jsx`  and  `jsxs`  from  `jsx-to-md/jsx-runtime` , and there is no need to import  `React` |
