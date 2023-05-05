
# API

<details >
  <summary>目录</summary>

  &emsp;&emsp;[函数API](#函数api)<br/>
  &emsp;&emsp;&emsp;&emsp;[函数列表](#函数列表)<br/>
  &emsp;&emsp;&emsp;&emsp;[示例代码](#示例代码)<br/>
  &emsp;&emsp;[组件](#组件)<br/>
  &emsp;&emsp;&emsp;&emsp;[布局](#布局)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#布局-组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#布局-属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#布局-示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[标题](#标题)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#标题-组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#标题-属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#标题-示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[字体](#字体)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#字体-组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#字体-属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#字体-示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[引用块](#引用块)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#引用块-组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#引用块-属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#引用块-示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[代码](#代码)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#代码-组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#代码-属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#代码-示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[图片](#图片)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#图片-组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#图片-属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#图片-示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[链接](#链接)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#链接-组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#链接-属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#链接-示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[列表](#列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#列表-组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#列表-属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[类型说明](#列表-类型说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Items](#items)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#列表-示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[表格](#表格)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#表格-组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#表格-属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[类型说明](#表格-类型说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Column](#column)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#表格-示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[任务清单](#任务清单)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#任务清单-组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#任务清单-属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[类型说明](#任务清单-类型说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[TaskItem](#taskitem)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#任务清单-示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[目录](#目录)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#目录-组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#目录-属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#目录-示例代码)<br/>
  &emsp;&emsp;&emsp;&emsp;[异步渲染包装器](#异步渲染包装器)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[组件列表](#异步渲染包装器-组件列表)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[属性说明](#异步渲染包装器-属性说明)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[示例代码](#异步渲染包装器-示例代码)<br/>

</details>

## 函数API

### 函数列表
<table>
  <tr>
    <th>函数名</th>
    <th>类型</th>
    <th>说明</th>
  </tr>
  <tr>
    <td>render</td>
    <td>
      <pre>(element: JSX.element) => string</pre>
    </td>
    <td>
      渲染 JSX 元素，返回生成的 Markdown 字符内容<br /><br />📢📢📢：如果配合当前的库的命令行工具使用，根节点的渲染无需使用该函数，只需要将根节点默认导出就可以
    </td>
  </tr>
  <tr>
    <td>renderAsync</td>
    <td>
      <pre>(element: JSX.element) => Promise&lt;string&gt;</pre>
    </td>
    <td>
      异步渲染 JSX 元素，返回生成的 Markdown 字符内容<br /><br />当前函数只能用于渲染根节点，需要异步渲染的内容需要搭配 AsyncWrapper 来使用<br />📢📢📢：如果配合当前的库的命令行工具使用，根节点的渲染无需使用该函数，只需要将根节点默认导出就可以
    </td>
  </tr>
  <tr>
    <td>getAnchor</td>
    <td>
      <pre>(text: string) => string</pre>
    </td>
    <td>基于标题内容获取生成的锚点</td>
  </tr>
</table>

### 示例代码

<details open="true">
  <summary>代码</summary>

```tsx
import React, { renderAsync, AsyncWrapper, render, getAnchor } from 'jsx-to-md'

async function Test() {
  type Data = {
    name: string
  }
  const data: Promise<Data> = Promise.resolve({ name: 'World' })

  const res = await renderAsync(
    <AsyncWrapper data={data}>
      {({ name }) => {
        return <>{render(<>Hello {name}!</>)}</>
      }}
    </AsyncWrapper>,
  )

  console.log(res)
  // 输出：Hello World!

  console.log(getAnchor('Hello World'))
  // 输出：#hello-world
}

Test()
```


</details>


## 组件

### 布局
这里提供布局相关的组件
<h4 id="布局-组件列表">组件列表</h4>

* Break
* HorizontalRule


<h4 id="布局-属性说明">属性说明</h4>

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|mark|`'_'` \| `'-'` \| `'*'`|否|`'_'`|生成对应 Markdown 语法的标记符<br /><br />该属性针对 `Break` 无效|

<h4 id="布局-示例代码">示例代码</h4>

<details open="true">
  <summary>代码</summary>

```tsx
import React, { Break, HorizontalRule } from 'jsx-to-md'

export default function () {
  return (
    <>
      abc
      <Break />
      efg
      <Break />
      hij
      <Break />
      <Break />
      klm
      <HorizontalRule />
      <HorizontalRule mark="*" />
      <HorizontalRule mark="-" />
      new line
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
abc
efg
hij

klm
___

***

---
new line
```



  </details><details open="true">
    <summary>渲染内容</summary>

abc
efg
hij

klm
___

***

---
new line


  </details>

</details>


### 标题
对应 HTML 中 h1-h6 标签，使用方式也类似
<h4 id="标题-组件列表">组件列表</h4>

* H1
* H2
* H3
* H4
* H5
* H6


<h4 id="标题-属性说明">属性说明</h4>

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|skip|boolean|false|false|控制当前标题是否跳过生成目录|
|id|string|false|-|类似于 `h1-h6` 中的 `id` 属性，可用于生成独立的锚点<br /><br />如果设置该属性，最终生成的字符将不再是 `Markdown` 语法，而是 `HTML` 语法|

<h4 id="标题-示例代码">示例代码</h4>

<details open="true">
  <summary>代码</summary>

```tsx
import React, { H1, H2, H3, H4, H5, H6, TableOfContents } from 'jsx-to-md'

export default function () {
  return (
    <>
      <TableOfContents text="目录" />
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6>Heading 6</H6>
      {/** 跳过生成目录 */}
      <H1 skip>Skip Heading 1</H1>
      <H1 id="id">Custom ID</H1>
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
<details open>
  <summary>目录</summary>

  [Heading 1](#heading-1)<br/>
  &emsp;&emsp;[Heading 2](#heading-2)<br/>
  &emsp;&emsp;&emsp;&emsp;[Heading 3](#heading-3)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Heading 4](#heading-4)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Heading 5](#heading-5)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Heading 6](#heading-6)<br/>
  [Custom ID](#id)<br/>

</details>

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

# Skip Heading 1

<h1 id="id">Custom ID</h1>
```



  </details><details open="true">
    <summary>渲染内容</summary>


<details open>
  <summary>目录</summary>

  [Heading 1](#heading-1)<br/>
  &emsp;&emsp;[Heading 2](#heading-2)<br/>
  &emsp;&emsp;&emsp;&emsp;[Heading 3](#heading-3)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Heading 4](#heading-4)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Heading 5](#heading-5)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Heading 6](#heading-6)<br/>
  [Custom ID](#id)<br/>

</details>

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

# Skip Heading 1

<h1 id="id">Custom ID</h1>



  </details>

</details>


### 字体

<h4 id="字体-组件列表">组件列表</h4>

* Italic
* Bold
* BoldItalic
* StrikeThrough


<h4 id="字体-属性说明">属性说明</h4>

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|mark|'*' \| '_'|false|'*'|生成对应 Markdown 语法的标记符<br /><br />该属性针对 `StrikeThrough` 无效|

<h4 id="字体-示例代码">示例代码</h4>

<details open="true">
  <summary>代码</summary>

```tsx
import React, { Italic, Bold, BoldItalic, StrikeThrough, Break } from 'jsx-to-md'

export default function () {
  return (
    <>
      <Italic>斜体</Italic>
      <Break />
      <Bold>粗体</Bold>
      <Break />
      <BoldItalic>倾斜加粗</BoldItalic>
      <Break />
      <StrikeThrough>删除线</StrikeThrough>
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
*斜体*
**粗体**
***倾斜加粗***
~~删除线~~
```



  </details><details open="true">
    <summary>渲染内容</summary>

*斜体*
**粗体**
***倾斜加粗***
~~删除线~~


  </details>

</details>


### 引用块

<h4 id="引用块-组件列表">组件列表</h4>

* BlockQuote


<h4 id="引用块-属性说明">属性说明</h4>

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|level|number|false|1|层级，适用于多层嵌套的场景|

<h4 id="引用块-示例代码">示例代码</h4>

<details open="true">
  <summary>代码</summary>

```tsx
import React, { BlockQuote, Break } from 'jsx-to-md'

export default function () {
  return (
    <>
      <BlockQuote>普通引用</BlockQuote>
      <Break />
      <BlockQuote>
        嵌套引用
        <BlockQuote level={2}>
          Nest Block Quote Text1
          <BlockQuote level={3}>
            Nest Block Quote Text2
            <BlockQuote level={4}>Nest Block Quote Text3</BlockQuote>
          </BlockQuote>
        </BlockQuote>
      </BlockQuote>
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
>普通引用

>嵌套引用
>>Nest Block Quote Text1
>>>Nest Block Quote Text2
>>>>Nest Block Quote Text3
```



  </details><details open="true">
    <summary>渲染内容</summary>


>普通引用

>嵌套引用
>>Nest Block Quote Text1
>>>Nest Block Quote Text2
>>>>Nest Block Quote Text3


  </details>

</details>


### 代码

<h4 id="代码-组件列表">组件列表</h4>

* InlineCode
* CodeBlock


<h4 id="代码-属性说明">属性说明</h4>

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|code|string|true|-|代码内容<br /><br />该属性针对 `InlineCode` 无效|
|langType|string|false|js|代码类型<br /><br />该属性针对 `InlineCode` 无效|

<h4 id="代码-示例代码">示例代码</h4>

<details open="true">
  <summary>代码</summary>

```tsx
import React, { H1, InlineCode, CodeBlock } from 'jsx-to-md'

export default function () {
  return (
    <>
      <H1>行内代码</H1>
      <InlineCode>console.log('Hello World!')</InlineCode>
      <H1>代码块</H1>
      <CodeBlock
        code={`
function foo(){
  console.log('Hello World!')
}

foo()`}
      />
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
# 行内代码
`console.log('Hello World!')`
# 代码块

```js
function foo(){
  console.log('Hello World!')
}

foo()
``` // 这里为了避免与 Markdown 语法冲突，多添加了此描述
```



  </details><details open="true">
    <summary>渲染内容</summary>


# 行内代码
`console.log('Hello World!')`
# 代码块

```js
function foo(){
  console.log('Hello World!')
}

foo()
```



  </details>

</details>


### 图片

<h4 id="图片-组件列表">组件列表</h4>

* Image


<h4 id="图片-属性说明">属性说明</h4>

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|src|string|true|-|图片链接地址|
|alt|string|true|-|图片加载异常显示的文案|
|title|string|false|-|鼠标悬浮显示的提示信息|

<h4 id="图片-示例代码">示例代码</h4>

<details open="true">
  <summary>代码</summary>

```tsx
import React, { Image } from 'jsx-to-md'

export default function () {
  return (
    <>
      <Image
        title="图片标题"
        alt="图片说明"
        src="https://commonmark.org/help/images/favicon.png"
      />
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
![图片说明](https://commonmark.org/help/images/favicon.png "图片标题")
```



  </details><details open="true">
    <summary>渲染内容</summary>

![图片说明](https://commonmark.org/help/images/favicon.png "图片标题")


  </details>

</details>


### 链接

<h4 id="链接-组件列表">组件列表</h4>

* Link


<h4 id="链接-属性说明">属性说明</h4>

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|href|string|true|-|链接地址|
|title|string|false|-|鼠标悬浮显示的提示信息|

<h4 id="链接-示例代码">示例代码</h4>

<details open="true">
  <summary>代码</summary>

```tsx
import React, { Link } from 'jsx-to-md'

export default function () {
  return (
    <>
      <Link
        title="链接标题"
        href="https://github.com/eyelly-wu/jsx-to-md"
      >
        jsx-to-md
      </Link>
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
[jsx-to-md](https://github.com/eyelly-wu/jsx-to-md "链接标题")
```



  </details><details open="true">
    <summary>渲染内容</summary>

[jsx-to-md](https://github.com/eyelly-wu/jsx-to-md "链接标题")


  </details>

</details>


### 列表

<h4 id="列表-组件列表">组件列表</h4>

* 语义型
   * OderList
   * UnorderedList
   * ListItem
* 简易型
   * List


<h4 id="列表-属性说明">属性说明</h4>

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|level|number|false|1|嵌套层级<br /><br />适用于 `OderList`、`UnorderedList`|
|mark|`_` \| `*`|false|*|生成对应 Markdown 语法的标记符<br /><br />适用于 `OderList`、`UnorderedList`|
|items|[Items](#items)|false|-|列表项配置<br /><br />适用于 `List`|

<h4 id="列表-类型说明">类型说明</h4>

##### Items
正是由于如下复杂的嵌套类型，使得 `List` 可以通过简洁的语法拼凑出复杂的嵌套列表
```ts
/**
 * 列表类型
 * O | o标识有序列表
 * U | u标识无序列表
 */
type ListType = 'O' | 'o' | 'U' | 'u'

/**
 * 列表项内容
 */
type ListItem = string | JSX.Element | [string, Items]

/**
 * 列表项内容
 */
type Items =
  | [ListType, ...string[]]
  | [ListType, ListItem]
  | [ListType, ListItem, ListItem]
  | [ListType, ListItem, ListItem, ListItem]
  | [ListType, ListItem, ListItem, ListItem, ListItem]
  | [ListType, ListItem, ListItem, ListItem, ListItem, ListItem]
  | [ListType, ListItem, ListItem, ListItem, ListItem, ListItem, ListItem]
  | [
      ListType,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
    ]
  | [
      ListType,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
    ]
  | [
      ListType,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
    ]
  | [
      ListType,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
      ListItem,
    ]
      
```

<h4 id="列表-示例代码">示例代码</h4>

<details open="true">
  <summary>代码</summary>

```tsx
import React, {
  H1,
  H2,
  H3,
  List,
  ListItem,
  OderList,
  UnorderedList,
} from 'jsx-to-md'

export default function () {
  return (
    <>
      <H1>列表</H1>
      <H2>语义型</H2>
      <H3>无序列表</H3>
      <UnorderedList>
        <ListItem>列表项1</ListItem>
        <ListItem>列表项2</ListItem>
        <ListItem>列表项3</ListItem>
      </UnorderedList>
      <H3>有序列表</H3>
      <OderList>
        <ListItem>列表项1</ListItem>
        <ListItem>列表项2</ListItem>
        <ListItem>列表项3</ListItem>
      </OderList>
      <H3>嵌套列表</H3>
      <UnorderedList>
        <ListItem>
          开发
          <OderList level={2}>
            <ListItem>
              前端
              <UnorderedList level={3}>
                <ListItem>JavaScript</ListItem>
                <ListItem>HTML</ListItem>
                <ListItem>CSS</ListItem>
                <ListItem>...</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              后端
              <UnorderedList level={3}>
                <ListItem>Java</ListItem>
                <ListItem>SQL</ListItem>
                <ListItem>...</ListItem>
              </UnorderedList>
            </ListItem>
          </OderList>
        </ListItem>
        <ListItem>
          测试
          <UnorderedList level={2}>
            <ListItem>
              单元测试
              <OderList level={3}>
                <ListItem>JUnit</ListItem>
                <ListItem>Jest</ListItem>
                <ListItem>Vitest</ListItem>
                <ListItem>...</ListItem>
              </OderList>
            </ListItem>
            <ListItem>
              E2E测试
              <OderList level={3}>
                <ListItem>Cypress</ListItem>
                <ListItem>...</ListItem>
              </OderList>
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>...</ListItem>
      </UnorderedList>
      <H2>简易型</H2>
      <H3>无序列表</H3>
      <List items={['U', '列表项1', '列表项2', '列表项3']} />
      <H3>有序列表</H3>
      <List items={['O', '列表项1', '列表项2', '列表项3']} />
      <H3>嵌套列表</H3>
      <List
        items={[
          'O',
          [
            '开发',
            [
              'O',
              ['前端', ['U', 'JavaScript', 'HTML', 'CSS', '...']],
              ['后端', ['U', 'Java', 'SQL', '...']],
            ],
          ],
          [
            '测试',
            [
              'U',
              ['单元测试', ['O', 'JUnit', 'Jest', 'Vitest']],
              ['E2E测试', ['O', 'Cypress', '...']],
            ],
          ],
          '...',
        ]}
      />
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
# 列表

## 语义型

### 无序列表

* 列表项1
* 列表项2
* 列表项3


### 有序列表

1. 列表项1
2. 列表项2
3. 列表项3


### 嵌套列表

* 开发
   1. 前端
      * JavaScript
      * HTML
      * CSS
      * ...
   2. 后端
      * Java
      * SQL
      * ...
* 测试
   * 单元测试
      1. JUnit
      2. Jest
      3. Vitest
      4. ...
   * E2E测试
      1. Cypress
      2. ...
* ...


## 简易型

### 无序列表

* 列表项1
* 列表项2
* 列表项3


### 有序列表

1. 列表项1
2. 列表项2
3. 列表项3


### 嵌套列表

1. 开发
   1. 前端
      * JavaScript
      * HTML
      * CSS
      * ...
   2. 后端
      * Java
      * SQL
      * ...
2. 测试
   * 单元测试
      1. JUnit
      2. Jest
      3. Vitest
   * E2E测试
      1. Cypress
      2. ...
3. ...
```



  </details><details open="true">
    <summary>渲染内容</summary>


# 列表

## 语义型

### 无序列表

* 列表项1
* 列表项2
* 列表项3


### 有序列表

1. 列表项1
2. 列表项2
3. 列表项3


### 嵌套列表

* 开发
   1. 前端
      * JavaScript
      * HTML
      * CSS
      * ...
   2. 后端
      * Java
      * SQL
      * ...
* 测试
   * 单元测试
      1. JUnit
      2. Jest
      3. Vitest
      4. ...
   * E2E测试
      1. Cypress
      2. ...
* ...


## 简易型

### 无序列表

* 列表项1
* 列表项2
* 列表项3


### 有序列表

1. 列表项1
2. 列表项2
3. 列表项3


### 嵌套列表

1. 开发
   1. 前端
      * JavaScript
      * HTML
      * CSS
      * ...
   2. 后端
      * Java
      * SQL
      * ...
2. 测试
   * 单元测试
      1. JUnit
      2. Jest
      3. Vitest
   * E2E测试
      1. Cypress
      2. ...
3. ...




  </details>

</details>


### 表格

<h4 id="表格-组件列表">组件列表</h4>

* Table


<h4 id="表格-属性说明">属性说明</h4>

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|columns|[Column[]](#column)|true|-|列头配置|
|data|any[]|true|-|表体数据内容|

<h4 id="表格-类型说明">类型说明</h4>

##### Column

```ts
type Column = {
  title: string // 表格标题
  fieldName: string // 当前列字段名
  align?: 'left' | 'center' | 'right' // 当前列文本对齐方式
}
```

<h4 id="表格-示例代码">示例代码</h4>

<details open="true">
  <summary>代码</summary>

```tsx
import React, { Table } from 'jsx-to-md'

export default function () {
  return (
    <>
      <Table
        columns={[
          { fieldName: 'field1', title: '靠左标题' },
          { fieldName: 'field2', title: '居中标题', align: 'center' },
          { fieldName: 'field3', title: '靠右标题', align: 'right' },
        ]}
        data={Array(10)
          .fill(0)
          .map((item) => {
            return ['field1', 'field2', 'field3'].reduce((res, item) => {
              res[item] = '文本内容'
              return res
            }, {})
          })}
      />
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
|靠左标题|居中标题|靠右标题|
|:-|:-:|-:|
|文本内容|文本内容|文本内容|
|文本内容|文本内容|文本内容|
|文本内容|文本内容|文本内容|
|文本内容|文本内容|文本内容|
|文本内容|文本内容|文本内容|
|文本内容|文本内容|文本内容|
|文本内容|文本内容|文本内容|
|文本内容|文本内容|文本内容|
|文本内容|文本内容|文本内容|
|文本内容|文本内容|文本内容|
```



  </details><details open="true">
    <summary>渲染内容</summary>


|靠左标题|居中标题|靠右标题|
|:-|:-:|-:|
|文本内容|文本内容|文本内容|
|文本内容|文本内容|文本内容|
|文本内容|文本内容|文本内容|
|文本内容|文本内容|文本内容|
|文本内容|文本内容|文本内容|
|文本内容|文本内容|文本内容|
|文本内容|文本内容|文本内容|
|文本内容|文本内容|文本内容|
|文本内容|文本内容|文本内容|
|文本内容|文本内容|文本内容|



  </details>

</details>


### 任务清单

<h4 id="任务清单-组件列表">组件列表</h4>

* TaskList


<h4 id="任务清单-属性说明">属性说明</h4>

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|items|[TaskItem[]](#taskitem)|true|-|任务项配置<br /><br />支持多层级任务，内部会根据子任务的状态计算出父任务的状态|

<h4 id="任务清单-类型说明">类型说明</h4>

##### TaskItem

```ts
// 任务状态 0: 未完成，1：已完成
type TaskStatus = 0 | 1
// 任务项，任务状态默认为已完成
type TaskItem = string | [string, TaskStatus] | [string, TaskItem[]]
```

<h4 id="任务清单-示例代码">示例代码</h4>

<details open="true">
  <summary>代码</summary>

```tsx
import React, { H1, H2, TaskList } from 'jsx-to-md'

export default function TaskListDemo() {
  return (
    <>
      <H1>任务列表</H1>
      <H2>基础</H2>
      <TaskList items={['done1', ['undo', 0], ['done2', 1]]} />
      <H2>嵌套</H2>
      <TaskList
        items={[
          ['twoLevel', [['child1', 0], 'child2']],
          [
            'threeLevel',
            [
              ['child1', ['grandchild1', ['grandchild2', 0]]],
              [
                'child2',
                [
                  ['grandchild1', 0],
                  ['grandchild2', 0],
                ],
              ],
              ['child3', ['grandchild1', 'grandchild2']],
            ],
          ],
          ['twoLevelEmpty', []],
        ]}
      />
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
# 任务列表

## 基础

- [x] done1
- [ ] undo
- [x] done2


## 嵌套

- [ ] twoLevel
  - [ ] child1
  - [x] child2
- [ ] threeLevel
  - [ ] child1
    - [x] grandchild1
    - [ ] grandchild2
  - [ ] child2
    - [ ] grandchild1
    - [ ] grandchild2
  - [x] child3
    - [x] grandchild1
    - [x] grandchild2
- [x] twoLevelEmpty
```



  </details><details open="true">
    <summary>渲染内容</summary>


# 任务列表

## 基础

- [x] done1
- [ ] undo
- [x] done2


## 嵌套

- [ ] twoLevel
  - [ ] child1
  - [x] child2
- [ ] threeLevel
  - [ ] child1
    - [x] grandchild1
    - [ ] grandchild2
  - [ ] child2
    - [ ] grandchild1
    - [ ] grandchild2
  - [x] child3
    - [x] grandchild1
    - [x] grandchild2
- [x] twoLevelEmpty




  </details>

</details>


### 目录
对应 `Markdown` 语法中的 `[TOC]` 
<h4 id="目录-组件列表">组件列表</h4>

* TableOfContents


<h4 id="目录-属性说明">属性说明</h4>

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|text|string|false|Table of Contents|目录显示文案|
|open|boolean|false|true|是否默认展开目录|
|indent|`Array<'&nbsp; \| '&ensp; \| '&emsp; \| '&thinsp; \| '&zwnj; \| '&zwj;'>`|false|`['&emsp;', '&emsp;']`|目录缩进<br /><br />目录的层次结构是基于缩进来实现的|

<h4 id="目录-示例代码">示例代码</h4>

<details open="true">
  <summary>代码</summary>

```tsx
import React, { Break, H1, H2, H3, H4, H5, H6, TableOfContents } from 'jsx-to-md'

export default function () {
  const props = { skip: true }

  return (
    <>
      <TableOfContents text="目录" indent={['&ensp;']} />
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6 id="Heading 6">Heading 6</H6>

      <h1>HTML Heading 1</h1>
      <h2>HTML Heading 2</h2>
      <h3>HTML Heading 3</h3>
      <h4>HTML Heading 4</h4>
      <h5>HTML Heading 5</h5>
      <h6 id="HTML Heading 6">HTML Heading 6</h6>
      <Break />
      {/** 跳过生成目录 */}
      <H1 skip>Skip Heading 1</H1>

      <h1 {...props}>Skip HTML Heading 1</h1>
    </>
  )
}
```
<details open="true">
    <summary>生成 Markdown 字符内容</summary>


```markdown
<details open>
  <summary>目录</summary>

  [Heading 1](#heading-1)<br/>
  &ensp;[Heading 2](#heading-2)<br/>
  &ensp;&ensp;[Heading 3](#heading-3)<br/>
  &ensp;&ensp;&ensp;[Heading 4](#heading-4)<br/>
  &ensp;&ensp;&ensp;&ensp;[Heading 5](#heading-5)<br/>
  &ensp;&ensp;&ensp;&ensp;&ensp;[Heading 6](#heading-6)<br/>
  [HTML Heading 1](#html-heading-1)<br/>
  &ensp;[HTML Heading 2](#html-heading-2)<br/>
  &ensp;&ensp;[HTML Heading 3](#html-heading-3)<br/>
  &ensp;&ensp;&ensp;[HTML Heading 4](#html-heading-4)<br/>
  &ensp;&ensp;&ensp;&ensp;[HTML Heading 5](#html-heading-5)<br/>
  &ensp;&ensp;&ensp;&ensp;&ensp;[HTML Heading 6](#html-heading-6)<br/>

</details>

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

<h6 id="heading-6">Heading 6</h6>
<h1>HTML Heading 1</h1><h2>HTML Heading 2</h2><h3>HTML Heading 3</h3><h4>HTML Heading 4</h4><h5>HTML Heading 5</h5><h6 id="HTML Heading 6">HTML Heading 6</h6>

# Skip Heading 1
<h1>Skip HTML Heading 1</h1>
```



  </details><details open="true">
    <summary>渲染内容</summary>


<details open>
  <summary>目录</summary>

  [Heading 1](#heading-1)<br/>
  &ensp;[Heading 2](#heading-2)<br/>
  &ensp;&ensp;[Heading 3](#heading-3)<br/>
  &ensp;&ensp;&ensp;[Heading 4](#heading-4)<br/>
  &ensp;&ensp;&ensp;&ensp;[Heading 5](#heading-5)<br/>
  &ensp;&ensp;&ensp;&ensp;&ensp;[Heading 6](#heading-6)<br/>
  [HTML Heading 1](#html-heading-1)<br/>
  &ensp;[HTML Heading 2](#html-heading-2)<br/>
  &ensp;&ensp;[HTML Heading 3](#html-heading-3)<br/>
  &ensp;&ensp;&ensp;[HTML Heading 4](#html-heading-4)<br/>
  &ensp;&ensp;&ensp;&ensp;[HTML Heading 5](#html-heading-5)<br/>
  &ensp;&ensp;&ensp;&ensp;&ensp;[HTML Heading 6](#html-heading-6)<br/>

</details>

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

<h6 id="heading-6">Heading 6</h6>
<h1>HTML Heading 1</h1><h2>HTML Heading 2</h2><h3>HTML Heading 3</h3><h4>HTML Heading 4</h4><h5>HTML Heading 5</h5><h6 id="HTML Heading 6">HTML Heading 6</h6>

# Skip Heading 1
<h1>Skip HTML Heading 1</h1>


  </details>

</details>


### 异步渲染包装器
用于支持异步渲染
<h4 id="异步渲染包装器-组件列表">组件列表</h4>

* AsyncWrapper


<h4 id="异步渲染包装器-属性说明">属性说明</h4>

|属性名|类型|是否必须|默认值|说明|
|:-:|:-:|:-:|:-:|:-|
|data|Promise&lt;T&gt;|true|-|异步加载的数据|

<h4 id="异步渲染包装器-示例代码">示例代码</h4>

<details open="true">
  <summary>代码</summary>

```tsx
import React, { List, AsyncWrapper } from 'jsx-to-md'

export default function AsyncDemo() {
  type Data = {
    name: string
  }
  const asyncData1 = new Promise<Data>((resolve) => {
    setTimeout(() => {
      resolve({
        name: '朋友',
      })
    }, 50)
  })

  const asyncData2 = new Promise<Data>((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'jsx-to-md',
      })
    }, 100)
  })

  return (
    <>
      <List
        items={[
          'U',
          [
            '基础的',
            [
              'U',
              <AsyncWrapper data={asyncData1}>
                {({ name }) => {
                  return <>Hi {name}</>
                }}
              </AsyncWrapper>,
            ],
          ],
          [
            '嵌套的',
            [
              'U',
              <AsyncWrapper data={asyncData1}>
                {({ name }) => {
                  return (
                    <>
                      Hi {name}
                      <AsyncWrapper data={asyncData2}>
                        {({ name }) => {
                          return (
                            <>
                              , this is {name}, 欢迎使用
                            </>
                          )
                        }}
                      </AsyncWrapper>
                    </>
                  )
                }}
              </AsyncWrapper>,
            ],
          ],
        ]}
      />
    </>
  )
}
```
<details open="true">
    <summary>渲染内容</summary>


* 基础的
   * Hi 朋友
* 嵌套的
   * Hi 朋友, this is jsx-to-md, 欢迎使用




  </details>

</details>

