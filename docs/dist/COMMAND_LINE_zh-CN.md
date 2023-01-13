
# 命令行

<details >
  <summary>目录</summary>

  &emsp;&emsp;[1.  `jsx-to-md.config.js` 配置](#1-jsx-to-mdconfigjs-配置)<br/>
  &emsp;&emsp;&emsp;&emsp;[基础配置](#基础配置)<br/>
  &emsp;&emsp;&emsp;&emsp;[Source](#source)<br/>
  &emsp;&emsp;[2. 命令](#2-命令)<br/>
  &emsp;&emsp;&emsp;&emsp;[命令列表](#命令列表)<br/>
  &emsp;&emsp;&emsp;&emsp;[命令参数](#命令参数)<br/>

</details>

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
