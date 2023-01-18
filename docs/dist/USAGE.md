

# Quick Start

<details >
  <summary>Table of Contents</summary>

  &emsp;&emsp;[1. Install](#1-install)<br/>
  &emsp;&emsp;[2. Create JSX file](#2-create-jsx-file)<br/>
  &emsp;&emsp;[3. Initialize command line configuration file](#3-initialize-command-line-configuration-file)<br/>
  &emsp;&emsp;[4. Adjust  `jsx-to-md.config.js`  configuration](#4-adjust-jsx-to-mdconfigjs-configuration)<br/>
  &emsp;&emsp;[5. Execute run command](#5-execute-run-command)<br/>

</details>

## 1. Install

```bash
npm i -D jsx-to-md
# or
yarn add jsx-to-md --dev
# or
pnpm i -D jsx-to-md
```

## 2. Create JSX file
Create a directory named  `docs`  under the root directory, and create  `index.tsx`  file under this directory
```text
.
├── ...Other relevant files
├── docs
│   └── index.tsx
├── node_modules
└── package.json
        
```
Suppose the content of  `index.tsx`  is as follows:
>Here JSX syntax is in the form of  `React.createElement` , so  `React`  needs to be imported by default
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
Enter the following command at the command line terminal, [More Commands](https://github.com/eyelly-wu/jsx-to-md/blob/v0.8.4/docs/dist/COMMAND_LINE.md#2-command)
```bash
npx jtm init
```
Then a  `jsx-to-md.config.js`  file will be generated in the current directory

Then your file directory is like this
```text
.
├── ...Other relevant files
├── docs
│   └── index.tsx
├── jsx-to-md.config.js
├── node_modules
└── package.json
        
```


## 4. Adjust  `jsx-to-md.config.js`  configuration
Adjust the configuration items in the configuration file according to the requirements [description](https://github.com/eyelly-wu/jsx-to-md/blob/v0.8.4/docs/dist/COMMAND_LINE.md)

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

## 5. Execute run command
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