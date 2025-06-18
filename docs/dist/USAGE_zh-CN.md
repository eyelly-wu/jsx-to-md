

# 快速上手

<details >
  <summary>目录</summary>

  &emsp;&emsp;[1. 安装](#1-安装)<br/>
  &emsp;&emsp;[2. ​创建JSX文件](#2-​创建jsx文件)<br/>
  &emsp;&emsp;[3. 初始化命令行配置文件](#3-初始化命令行配置文件)<br/>
  &emsp;&emsp;[4. 调整 `jsx-to-md.config.js` 配置](#4-调整-jsx-to-mdconfigjs-配置)<br/>
  &emsp;&emsp;[5. 执行生成命令](#5-执行生成命令)<br/>

</details>

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
```tsx
import { Link } from 'jsx-to-md'

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
在命令行终端输入如下命令，[更多命令](https://github.com/eyelly-wu/jsx-to-md/blob/v0.12.3/docs/dist/COMMAND_LINE_zh-CN.md#2-命令)
```bash
npx jtm init
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
根据需求自行调整配置文件中的配置项，配置项的[说明](https://github.com/eyelly-wu/jsx-to-md/blob/v0.12.3/docs/dist/COMMAND_LINE_zh-CN.md)

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
> Hello [jsx-to-md](https://github.com/eyelly-wu/jsx-to-md)!<br/>

并且 `docs/index.tsx` 内容发生调整，保存后，对应的 Markdown 文件也会实时同步变化