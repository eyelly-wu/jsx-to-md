
# 更新日志

<details >
  <summary>目录</summary>

  &emsp;&emsp;[[0.10.1] - 2023-05-03](#0101---2023-05-03)<br/>
  &emsp;&emsp;&emsp;&emsp;[Fixed](#fixed)<br/>
  &emsp;&emsp;[[0.10.0] - 2023-04-20](#0100---2023-04-20)<br/>
  &emsp;&emsp;&emsp;&emsp;[Added](#added)<br/>
  &emsp;&emsp;&emsp;&emsp;[Fixed](#fixed)<br/>
  &emsp;&emsp;[[0.9.1] - 2023-04-02](#091---2023-04-02)<br/>
  &emsp;&emsp;&emsp;&emsp;[Added](#added)<br/>
  &emsp;&emsp;[[0.9.0] - 2023-04-02](#090---2023-04-02)<br/>
  &emsp;&emsp;&emsp;&emsp;[Added](#added)<br/>
  &emsp;&emsp;[[0.8.6] - 2023-03-21](#086---2023-03-21)<br/>
  &emsp;&emsp;&emsp;&emsp;[Added](#added)<br/>

</details>

## [0.10.1] - 2023-05-03

### Fixed

* 修复以下场景生成目录在 `Github` 中导航不正确
   * 存在 `()` 包裹的内容
   * 存在 `（）` 包裹的内容
   * 存在 `**` 包裹的内容
   * 存在 `?` 的内容
   * 存在 `？` 的内容


## [0.10.0] - 2023-04-20

### Added

* 添加用于生成锚点的工具方法： `getAnchor` 


### Fixed

* 修复以下场景生成目录在 `Github` 中导航不正确
   * 存在 `[]` 包裹的内容
   * 存在<code> `` </code>包裹的内容


## [0.9.1] - 2023-04-02

### Added

* 更新 `README` 中示例效果图


## [0.9.0] - 2023-04-02

### Added

* 新增命令参数 `--jsx` ,可用于指定 `JSX` 的编译方式，从而决定是否需要手动引入 `React` 


## [0.8.6] - 2023-03-21

### Added

* 实现基础命令行工具
* 实现基础函数API和基础组件

