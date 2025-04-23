
# 更新日志

<details >
  <summary>目录</summary>

  &emsp;&emsp;[[0.11.6] - 2025-04-23](#0116---2025-04-23)<br/>
  &emsp;&emsp;&emsp;&emsp;[命令行工具](#0116-命令行工具)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#0116-命令行工具-fixed)<br/>
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
  &emsp;&emsp;&emsp;&emsp;[命令行工具](#0110-命令行工具)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#0110-命令行工具-added)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#0110-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#0110-api-added)<br/>
  &emsp;&emsp;&emsp;&emsp;[文档](#0110-文档)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Changed](#0110-文档-changed)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#0110-文档-fixed)<br/>
  &emsp;&emsp;[[0.10.1] - 2023-05-03](#0101---2023-05-03)<br/>
  &emsp;&emsp;&emsp;&emsp;[命令行工具](#0101-命令行工具)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#0101-命令行工具-fixed)<br/>
  &emsp;&emsp;[[0.10.0] - 2023-04-20](#0100---2023-04-20)<br/>
  &emsp;&emsp;&emsp;&emsp;[命令行工具](#0100-命令行工具)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Fixed](#0100-命令行工具-fixed)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#0100-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#0100-api-added)<br/>
  &emsp;&emsp;[[0.9.1] - 2023-04-02](#091---2023-04-02)<br/>
  &emsp;&emsp;&emsp;&emsp;[文档](#091-文档)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Changed](#091-文档-changed)<br/>
  &emsp;&emsp;[[0.9.0] - 2023-04-02](#090---2023-04-02)<br/>
  &emsp;&emsp;&emsp;&emsp;[命令行工具](#090-命令行工具)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#090-命令行工具-added)<br/>
  &emsp;&emsp;[[0.8.6] - 2023-03-21](#086---2023-03-21)<br/>
  &emsp;&emsp;&emsp;&emsp;[命令行工具](#086-命令行工具)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#086-命令行工具-added)<br/>
  &emsp;&emsp;&emsp;&emsp;[API](#086-api)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Added](#086-api-added)<br/>

</details>

## [0.11.6] - 2025-04-23

<h3 id="0116-命令行工具">命令行工具</h3>

<h4 id="0116-命令行工具-fixed">Fixed</h4>

* 优化在 `Windows` 上执行 `jtm run` 命令时解析路径错误


<h3 id="0116-api">API</h3>

<h4 id="0116-api-changed">Changed</h4>

* 简化 `List` 组件的 `items` 属性 `TypeScript` 类型定义


## [0.11.5] - 2024-07-21

<h3 id="0115-api">API</h3>

<h4 id="0115-api-fixed">Fixed</h4>

* 修复当设置命令行参数 `--jsx` 为 `classical` 执行 `run` 命令时，会导致类似如下场景列表渲染为空
```js
<div>
  {['a', 'b', 'c'].map(item=> <span>{item}</span>)}
</div>

// 上述节点渲染结果对比：
// bug表现：<div></div>
// 正确的结果：<div><span>a</span><span>b</span><span>c</span></div>
```



## [0.11.4] - 2023-08-29

<h3 id="0114-api">API</h3>

<h4 id="0114-api-fixed">Fixed</h4>

* 修复以下场景生成目录在 `Github` 中导航不正确
   * 标题中存在<code>,</code>
   * 标题中存在<code>，</code>


## [0.11.3] - 2023-06-02

<h3 id="0113-api">API</h3>

<h4 id="0113-api-fixed">Fixed</h4>

* 修复以下场景生成目录在 `Github` 中导航不正确
   * 标题中存在<code>'</code>
   * 标题中存在x&nbsp;&nbsp;<code>`xxx`</code>类似文案


## [0.11.2] - 2023-05-23

<h3 id="0112-api">API</h3>

<h4 id="0112-api-fixed">Fixed</h4>

* 修复以下场景生成目录在 `Github` 中导航不正确
   * 在标题结尾处存在<code>``</code>包裹非英文内容


## [0.11.1] - 2023-05-22

<h3 id="0111-api">API</h3>

<h4 id="0111-api-fixed">Fixed</h4>

* 修复以下场景生成目录在 `Github` 中导航不正确
   * 存在<code>``</code>包裹非英文内容


## [0.11.0] - 2023-05-07

<h3 id="0110-命令行工具">命令行工具</h3>

<h4 id="0110-命令行工具-added">Added</h4>

* 优化目录的生成，支持通过识别 `H1-H6` 和 `h1-h6` 中的 `id` 属性来生成锚点链接


<h3 id="0110-api">API</h3>

<h4 id="0110-api-added">Added</h4>

*  `Header` 相关组件 `H1-H6` 添加 `id` 属性


<h3 id="0110-文档">文档</h3>

<h4 id="0110-文档-changed">Changed</h4>

* 更新 `Changelog` 文档格式，将独立区分 `命令行工具` 、 `API` 、 `文档` 更新的内容


<h4 id="0110-文档-fixed">Fixed</h4>

* 修复 `API` 和 `Changelog` 文档中相同标题生成的目录锚点跳转异常


## [0.10.1] - 2023-05-03

<h3 id="0101-命令行工具">命令行工具</h3>

<h4 id="0101-命令行工具-fixed">Fixed</h4>

* 修复以下场景生成目录在 `Github` 中导航不正确
   * 存在 `()` 包裹的内容
   * 存在 `（）` 包裹的内容
   * 存在 `**` 包裹的内容
   * 存在 `?` 的内容
   * 存在 `？` 的内容


## [0.10.0] - 2023-04-20

<h3 id="0100-命令行工具">命令行工具</h3>

<h4 id="0100-命令行工具-fixed">Fixed</h4>

* 修复以下场景生成目录在 `Github` 中导航不正确
   * 存在 `[]` 包裹的内容
   * 存在<code> `` </code>包裹的内容


<h3 id="0100-api">API</h3>

<h4 id="0100-api-added">Added</h4>

* 添加用于生成锚点的工具方法： `getAnchor` 


## [0.9.1] - 2023-04-02

<h3 id="091-文档">文档</h3>

<h4 id="091-文档-changed">Changed</h4>

* 更新 `README` 中示例效果图


## [0.9.0] - 2023-04-02

<h3 id="090-命令行工具">命令行工具</h3>

<h4 id="090-命令行工具-added">Added</h4>

* 新增命令参数 `--jsx` ,可用于指定 `JSX` 的编译方式，从而决定是否需要手动引入 `React` 


## [0.8.6] - 2023-03-21

<h3 id="086-命令行工具">命令行工具</h3>

<h4 id="086-命令行工具-added">Added</h4>

* 实现基础命令行工具


<h3 id="086-api">API</h3>

<h4 id="086-api-added">Added</h4>

* 实现基础函数API和基础组件

