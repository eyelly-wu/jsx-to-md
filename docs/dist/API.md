
# API

<details >
  <summary>Table of Contents</summary>

  &emsp;&emsp;[Function API](#function-api)<br/>
  &emsp;&emsp;&emsp;&emsp;[Function List](#function-list)<br/>
  &emsp;&emsp;&emsp;&emsp;[Sample Code](#sample-code)<br/>
  &emsp;&emsp;[Component](#component)<br/>
  &emsp;&emsp;&emsp;&emsp;[Layout](#layout)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Component List](#layout-component-list)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Attribute Description](#layout-attribute-description)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Sample Code](#layout-sample-code)<br/>
  &emsp;&emsp;&emsp;&emsp;[Heading](#heading)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Component List](#heading-component-list)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Attribute Description](#heading-attribute-description)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Sample Code](#heading-sample-code)<br/>
  &emsp;&emsp;&emsp;&emsp;[Font](#font)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Component List](#font-component-list)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Attribute Description](#font-attribute-description)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Sample Code](#font-sample-code)<br/>
  &emsp;&emsp;&emsp;&emsp;[Block Quote](#block-quote)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Component List](#block-quote-component-list)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Sample Code](#block-quote-sample-code)<br/>
  &emsp;&emsp;&emsp;&emsp;[Code](#code)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Component List](#code-component-list)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Attribute Description](#code-attribute-description)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Sample Code](#code-sample-code)<br/>
  &emsp;&emsp;&emsp;&emsp;[Image](#image)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Component List](#image-component-list)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Attribute Description](#image-attribute-description)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Sample Code](#image-sample-code)<br/>
  &emsp;&emsp;&emsp;&emsp;[Link](#link)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Component List](#link-component-list)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Attribute Description](#link-attribute-description)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Sample Code](#link-sample-code)<br/>
  &emsp;&emsp;&emsp;&emsp;[List](#list)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Component List](#list-component-list)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Attribute Description](#list-attribute-description)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Type Description](#list-type-description)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Items](#items)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Sample Code](#list-sample-code)<br/>
  &emsp;&emsp;&emsp;&emsp;[Table](#table)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Component List](#table-component-list)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Attribute Description](#table-attribute-description)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Type Description](#table-type-description)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Column](#column)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Sample Code](#table-sample-code)<br/>
  &emsp;&emsp;&emsp;&emsp;[Task list](#task-list)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Component List](#task-list-component-list)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Attribute Description](#task-list-attribute-description)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Type Description](#task-list-type-description)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[TaskItem](#taskitem)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Sample Code](#task-list-sample-code)<br/>
  &emsp;&emsp;&emsp;&emsp;[Table of Contents](#table-of-contents)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Component List](#table-of-contents-component-list)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Attribute Description](#table-of-contents-attribute-description)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Sample Code](#table-of-contents-sample-code)<br/>
  &emsp;&emsp;&emsp;&emsp;[Asynchronous Rendering Wrapper](#asynchronous-rendering-wrapper)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Component List](#asynchronous-rendering-wrapper-component-list)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Attribute Description](#asynchronous-rendering-wrapper-attribute-description)<br/>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[Sample Code](#asynchronous-rendering-wrapper-sample-code)<br/>

</details>

## Function API

### Function List
<table>
  <tr>
    <th>Function Name</th>
    <th>Type</th>
    <th>description</th>
  </tr>
  <tr>
    <td>render</td>
    <td>
      <pre>(element: JSX.element) => string</pre>
    </td>
    <td>
      Render JSX elements and return the generated Markdown character content<br /><br />📢📢📢：If used in conjunction with the command line tools of the current library, the root node does not need to use this function for rendering, but only needs to export the root node by default
    </td>
  </tr>
  <tr>
    <td>renderAsync</td>
    <td>
      <pre>(element: JSX.element) => Promise&lt;string&gt;</pre>
    </td>
    <td>
      Asynchronous rendering of JSX elements, returning the generated Markdown character content<br /><br />The current function can only be used to render the root node. The content to be rendered asynchronously needs to be used with AsyncWrapper<br />📢📢📢：If used in conjunction with the command line tools of the current library, the root node does not need to use this function for rendering, but only needs to export the root node by default
    </td>
  </tr>
  <tr>
    <td>getAnchor</td>
    <td>
      <pre>(text: string) => string</pre>
    </td>
    <td>Retrieve generated anchor points based on title content</td>
  </tr>
</table>

### Sample Code

<details open="true">
  <summary>Code</summary>

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
  // Output: Hello World!

  console.log(getAnchor('Hello World'))
  // Output: #hello-world
}

Test()
```


</details>


## Component

### Layout
Layout related components are provided here
<h4 id="layout-component-list">Component List</h4>

* Break
* HorizontalRule


<h4 id="layout-attribute-description">Attribute Description</h4>

|Attribute Name|Type|Whether it is necessary|Default|description|
|:-:|:-:|:-:|:-:|:-|
|mark|`'_'` \| `'-'` \| `'*'`|No|`'_'`|Generate markers corresponding to Markdown syntax<br /><br />This attribute is valid for  `HorizontalRule` |
|lines|number|No|`1`|The number of line breaks<br /><br />This attribute is valid for  `Break` |

<h4 id="layout-sample-code">Sample Code</h4>

<details open="true">
  <summary>Code</summary>

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
      <Break lines={3} />
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
    <summary>Generate Markdown character content</summary>


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
    <summary>Render Content</summary>

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


### Heading
The corresponding h1-h6 tags in HTML are used in a similar way
<h4 id="heading-component-list">Component List</h4>

* H1
* H2
* H3
* H4
* H5
* H6


<h4 id="heading-attribute-description">Attribute Description</h4>

|Attribute Name|Type|Whether it is necessary|Default|description|
|:-:|:-:|:-:|:-:|:-|
|skip|boolean|false|false|Controls whether the current title skips generate directories|
|id|string|false|-|Similar to the  `id`  attribute in  `h1-h6` , it can be used to generate independent anchors<br /><br />If this property is set, the final generated characters will no longer be  `Markdown`  syntax, but  `HTML`  syntax|

<h4 id="heading-sample-code">Sample Code</h4>

<details open="true">
  <summary>Code</summary>

```tsx
import React, { H1, H2, H3, H4, H5, H6, TableOfContents } from 'jsx-to-md'

export default function () {
  return (
    <>
      <TableOfContents text="Table of Contents" />
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6>Heading 6</H6>
      {/** Skip generate directory */}
      <H1 skip>Skip Heading 1</H1>
      <H1 id="id">Custom ID</H1>
    </>
  )
}
```
<details open="true">
    <summary>Generate Markdown character content</summary>


```markdown
<details open>
  <summary>Table of Contents</summary>

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
    <summary>Render Content</summary>


<details open>
  <summary>Table of Contents</summary>

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


### Font

<h4 id="font-component-list">Component List</h4>

* Italic
* Bold
* BoldItalic
* StrikeThrough


<h4 id="font-attribute-description">Attribute Description</h4>

|Attribute Name|Type|Whether it is necessary|Default|description|
|:-:|:-:|:-:|:-:|:-|
|mark|'*' \| '_'|false|'*'|Generate markers corresponding to Markdown syntax<br /><br />This property is not valid for  `StrikeThrough` |

<h4 id="font-sample-code">Sample Code</h4>

<details open="true">
  <summary>Code</summary>

```tsx
import React, { Italic, Bold, BoldItalic, StrikeThrough, Break } from 'jsx-to-md'

export default function () {
  return (
    <>
      <Italic>Italic</Italic>
      <Break />
      <Bold>Bold</Bold>
      <Break />
      <BoldItalic>Oblique Bold</BoldItalic>
      <Break />
      <StrikeThrough>Strikethrough</StrikeThrough>
    </>
  )
}
```
<details open="true">
    <summary>Generate Markdown character content</summary>


```markdown
*Italic*
**Bold**
***Oblique Bold***
~~Strikethrough~~
```



  </details><details open="true">
    <summary>Render Content</summary>

*Italic*
**Bold**
***Oblique Bold***
~~Strikethrough~~


  </details>

</details>


### Block Quote

<h4 id="block-quote-component-list">Component List</h4>

* BlockQuote


<h4 id="block-quote-sample-code">Sample Code</h4>

<details open="true">
  <summary>Code</summary>

```tsx
import React, { BlockQuote, Break } from 'jsx-to-md'

export default function () {
  return (
    <>
      <BlockQuote>General reference</BlockQuote>
      <Break />
      <BlockQuote>
        Nested Reference
        <BlockQuote>
          Nest Block Quote Text1
          <BlockQuote>
            Nest Block Quote Text2
            <BlockQuote>Nest Block Quote Text3</BlockQuote>
          </BlockQuote>
        </BlockQuote>
      </BlockQuote>
    </>
  )
}
```
<details open="true">
    <summary>Generate Markdown character content</summary>


```markdown
> General reference<br/>

> Nested Reference<br/>
>> Nest Block Quote Text1<br/>
>>> Nest Block Quote Text2<br/>
>>>> Nest Block Quote Text3<br/>
```



  </details><details open="true">
    <summary>Render Content</summary>


> General reference<br/>

> Nested Reference<br/>
>> Nest Block Quote Text1<br/>
>>> Nest Block Quote Text2<br/>
>>>> Nest Block Quote Text3<br/>


  </details>

</details>


### Code

<h4 id="code-component-list">Component List</h4>

* InlineCode
* CodeBlock


<h4 id="code-attribute-description">Attribute Description</h4>

|Attribute Name|Type|Whether it is necessary|Default|description|
|:-:|:-:|:-:|:-:|:-|
|code|string|true|-|Code content<br /><br />该属性针对 `InlineCode` 无效|
|langType|string|false|js|Code Type<br /><br />该属性针对 `InlineCode` 无效|

<h4 id="code-sample-code">Sample Code</h4>

<details open="true">
  <summary>Code</summary>

```tsx
import React, { H1, InlineCode, CodeBlock } from 'jsx-to-md'

export default function () {
  return (
    <>
      <H1>Inline code</H1>
      <InlineCode>console.log('Hello World!')</InlineCode>
      <H1>Code block</H1>
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
    <summary>Generate Markdown character content</summary>


```markdown
# Inline code
`console.log('Hello World!')`
# Code block

```js
function foo(){
  console.log('Hello World!')
}

foo()
``` // This description is added here to avoid conflicts with Markdown syntax
```



  </details><details open="true">
    <summary>Render Content</summary>


# Inline code
`console.log('Hello World!')`
# Code block

```js
function foo(){
  console.log('Hello World!')
}

foo()
```



  </details>

</details>


### Image

<h4 id="image-component-list">Component List</h4>

* Image


<h4 id="image-attribute-description">Attribute Description</h4>

|Attribute Name|Type|Whether it is necessary|Default|description|
|:-:|:-:|:-:|:-:|:-|
|src|string|true|-|Image link address|
|alt|string|true|-|Image loading abnormally displayed text|
|title|string|false|-|Prompt information displayed by mouse hovering|

<h4 id="image-sample-code">Sample Code</h4>

<details open="true">
  <summary>Code</summary>

```tsx
import React, { Image } from 'jsx-to-md'

export default function () {
  return (
    <>
      <Image
        title="Image Title"
        alt="The description of image"
        src="https://commonmark.org/help/images/favicon.png"
      />
    </>
  )
}
```
<details open="true">
    <summary>Generate Markdown character content</summary>


```markdown
![The description of image](https://commonmark.org/help/images/favicon.png "Image Title")
```



  </details><details open="true">
    <summary>Render Content</summary>

![The description of image](https://commonmark.org/help/images/favicon.png "Image Title")


  </details>

</details>


### Link

<h4 id="link-component-list">Component List</h4>

* Link


<h4 id="link-attribute-description">Attribute Description</h4>

|Attribute Name|Type|Whether it is necessary|Default|description|
|:-:|:-:|:-:|:-:|:-|
|href|string|true|-|Link Address|
|title|string|false|-|Prompt information displayed by mouse hovering|

<h4 id="link-sample-code">Sample Code</h4>

<details open="true">
  <summary>Code</summary>

```tsx
import React, { Link } from 'jsx-to-md'

export default function () {
  return (
    <>
      <Link title="Link Title" href="https://github.com/eyelly-wu/jsx-to-md">
        jsx-to-md
      </Link>
    </>
  )
}
```
<details open="true">
    <summary>Generate Markdown character content</summary>


```markdown
[jsx-to-md](https://github.com/eyelly-wu/jsx-to-md "Link Title")
```



  </details><details open="true">
    <summary>Render Content</summary>

[jsx-to-md](https://github.com/eyelly-wu/jsx-to-md "Link Title")


  </details>

</details>


### List

<h4 id="list-component-list">Component List</h4>

* Semantic Type
   * OderList
   * UnorderedList
   * ListItem
* Simple Type
   * List


<h4 id="list-attribute-description">Attribute Description</h4>

|Attribute Name|Type|Whether it is necessary|Default|description|
|:-:|:-:|:-:|:-:|:-|
|level|number|false|1|Nesting Level<br /><br />Applicable to `OderList` and `UnorderedList`|
|mark|`_` \| `*`|false|*|Generate markers corresponding to Markdown syntax<br /><br />Applicable to `OderList` and `UnorderedList`|
|items|[Items](#items)|false|-|List Item Configuration<br /><br />For `List`|

<h4 id="list-type-description">Type Description</h4>

##### Items
Because of the following complex nested types, `List` can piece together complex nested lists through simple syntax
```ts
/**
 * List Type
 * O | o identifies a sequence list
 * U | u identifies an unordered list
 */
type ListType = 'O' | 'o' | 'U' | 'u'

/**
 * List item content
 */
type ListItem = string | JSX.Element | [string, Items]

/**
 * List item content
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

<h4 id="list-sample-code">Sample Code</h4>

<details open="true">
  <summary>Code</summary>

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
      <H1>List</H1>
      <H2>Semantic Type</H2>
      <H3>Unordered list</H3>
      <UnorderedList>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </UnorderedList>
      <H3>Ordered list</H3>
      <OderList>
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </OderList>
      <H3>Nested list </H3>
      <UnorderedList>
        <ListItem>
          development
          <OderList level={2}>
            <ListItem>
              front end
              <UnorderedList level={3}>
                <ListItem>JavaScript</ListItem>
                <ListItem>HTML</ListItem>
                <ListItem>CSS</ListItem>
                <ListItem>...</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              back-end
              <UnorderedList level={3}>
                <ListItem>Java</ListItem>
                <ListItem>SQL</ListItem>
                <ListItem>...</ListItem>
              </UnorderedList>
            </ListItem>
          </OderList>
        </ListItem>
        <ListItem>
          test
          <UnorderedList level={2}>
            <ListItem>
              unit testing 
              <OderList level={3}>
                <ListItem>JUnit</ListItem>
                <ListItem>Jest</ListItem>
                <ListItem>Vitest</ListItem>
                <ListItem>...</ListItem>
              </OderList>
            </ListItem>
            <ListItem>
              E2E test
              <OderList level={3}>
                <ListItem>Cypress</ListItem>
                <ListItem>...</ListItem>
              </OderList>
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>...</ListItem>
      </UnorderedList>
      <H2>Simple Type</H2>
      <H3>Unordered list</H3>
      <List items={['U', 'List Item 1', 'List Item 2', 'List Item 3']} />
      <H3>Ordered list</H3>
      <List items={['O', 'List Item 1', 'List Item 2', 'List Item 3']} />
      <H3>Nested list </H3>
      <List
        items={[
          'O',
          [
            'development',
            [
              'O',
              ['front end', ['U', 'JavaScript', 'HTML', 'CSS', '...']],
              ['back-end', ['U', 'Java', 'SQL', '...']],
            ],
          ],
          [
            'test',
            [
              'U',
              ['unit testing ', ['O', 'JUnit', 'Jest', 'Vitest']],
              ['E2E test', ['O', 'Cypress', '...']],
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
    <summary>Generate Markdown character content</summary>


```markdown
# List

## Semantic Type

### Unordered list

* List Item 1
* List Item 2
* List Item 3


### Ordered list

1. List Item 1
2. List Item 2
3. List Item 3


### Nested list 

* development
   1. front end
      * JavaScript
      * HTML
      * CSS
      * ...
   2. back-end
      * Java
      * SQL
      * ...
* test
   * unit testing 
      1. JUnit
      2. Jest
      3. Vitest
      4. ...
   * E2E test
      1. Cypress
      2. ...
* ...


## Simple Type

### Unordered list

* List Item 1
* List Item 2
* List Item 3


### Ordered list

1. List Item 1
2. List Item 2
3. List Item 3


### Nested list 

1. development
   1. front end
      * JavaScript
      * HTML
      * CSS
      * ...
   2. back-end
      * Java
      * SQL
      * ...
2. test
   * unit testing 
      1. JUnit
      2. Jest
      3. Vitest
   * E2E test
      1. Cypress
      2. ...
3. ...
```



  </details><details open="true">
    <summary>Render Content</summary>


# List

## Semantic Type

### Unordered list

* List Item 1
* List Item 2
* List Item 3


### Ordered list

1. List Item 1
2. List Item 2
3. List Item 3


### Nested list 

* development
   1. front end
      * JavaScript
      * HTML
      * CSS
      * ...
   2. back-end
      * Java
      * SQL
      * ...
* test
   * unit testing 
      1. JUnit
      2. Jest
      3. Vitest
      4. ...
   * E2E test
      1. Cypress
      2. ...
* ...


## Simple Type

### Unordered list

* List Item 1
* List Item 2
* List Item 3


### Ordered list

1. List Item 1
2. List Item 2
3. List Item 3


### Nested list 

1. development
   1. front end
      * JavaScript
      * HTML
      * CSS
      * ...
   2. back-end
      * Java
      * SQL
      * ...
2. test
   * unit testing 
      1. JUnit
      2. Jest
      3. Vitest
   * E2E test
      1. Cypress
      2. ...
3. ...




  </details>

</details>


### Table

<h4 id="table-component-list">Component List</h4>

* Table


<h4 id="table-attribute-description">Attribute Description</h4>

|Attribute Name|Type|Whether it is necessary|Default|description|
|:-:|:-:|:-:|:-:|:-|
|columns|[Column[]](#column)|true|-|Column Header Configuration|
|data|any[]|true|-|Table Body Data Content|

<h4 id="table-type-description">Type Description</h4>

##### Column

```ts
type Column = {
  title: string // Table Title
  fieldName: string // Current column field name
  align?: 'left' | 'center' | 'right' // Current column text alignment
}
```

<h4 id="table-sample-code">Sample Code</h4>

<details open="true">
  <summary>Code</summary>

```tsx
import React, { Table } from 'jsx-to-md'

export default function () {
  return (
    <>
      <Table
        columns={[
          { fieldName: 'field1', title: 'Left Title' },
          { fieldName: 'field2', title: 'Centered Title', align: 'center' },
          { fieldName: 'field3', title: 'Right Title', align: 'right' },
        ]}
        data={Array(10)
          .fill(0)
          .map((item) => {
            return ['field1', 'field2', 'field3'].reduce((res, item) => {
              res[item] = 'text content'
              return res
            }, {})
          })}
      />
    </>
  )
}
```
<details open="true">
    <summary>Generate Markdown character content</summary>


```markdown
|Left Title|Centered Title|Right Title|
|:-|:-:|-:|
|text content|text content|text content|
|text content|text content|text content|
|text content|text content|text content|
|text content|text content|text content|
|text content|text content|text content|
|text content|text content|text content|
|text content|text content|text content|
|text content|text content|text content|
|text content|text content|text content|
|text content|text content|text content|
```



  </details><details open="true">
    <summary>Render Content</summary>


|Left Title|Centered Title|Right Title|
|:-|:-:|-:|
|text content|text content|text content|
|text content|text content|text content|
|text content|text content|text content|
|text content|text content|text content|
|text content|text content|text content|
|text content|text content|text content|
|text content|text content|text content|
|text content|text content|text content|
|text content|text content|text content|
|text content|text content|text content|



  </details>

</details>


### Task list

<h4 id="task-list-component-list">Component List</h4>

* TaskList


<h4 id="task-list-attribute-description">Attribute Description</h4>

|Attribute Name|Type|Whether it is necessary|Default|description|
|:-:|:-:|:-:|:-:|:-|
|items|[TaskItem[]](#taskitem)|true|-|Task item configuration<br /><br />Support multi-level tasks. The status of the parent task will be calculated internally according to the status of the sub task|

<h4 id="task-list-type-description">Type Description</h4>

##### TaskItem

```ts
// Task Status 0: hang in the air，1：Completed
type TaskStatus = 0 | 1
// Task item, task status is completed by default
type TaskItem = string | [string, TaskStatus] | [string, TaskItem[]]
```

<h4 id="task-list-sample-code">Sample Code</h4>

<details open="true">
  <summary>Code</summary>

```tsx
import React, { H1, H2, TaskList } from 'jsx-to-md'

export default function TaskListDemo() {
  return (
    <>
      <H1>Task list</H1>
      <H2>Basics</H2>
      <TaskList items={['done1', ['undo', 0], ['done2', 1]]} />
      <H2>Nesting</H2>
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
    <summary>Generate Markdown character content</summary>


```markdown
# Task list

## Basics

- [x] done1
- [ ] undo
- [x] done2


## Nesting

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
    <summary>Render Content</summary>


# Task list

## Basics

- [x] done1
- [ ] undo
- [x] done2


## Nesting

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


### Table of Contents
Corresponds to  `[TOC]`  in  `Markdown`  syntax
<h4 id="table-of-contents-component-list">Component List</h4>

* TableOfContents


<h4 id="table-of-contents-attribute-description">Attribute Description</h4>

|Attribute Name|Type|Whether it is necessary|Default|description|
|:-:|:-:|:-:|:-:|:-|
|text|string|false|Table of Contents|Directory display copy|
|open|boolean|false|true|Expand directory by default|
|indent|`Array<'&nbsp; \| '&ensp; \| '&emsp; \| '&thinsp; \| '&zwnj; \| '&zwj;'>`|false|`['&emsp;', '&emsp;']`|Table of Contents Indent<br /><br />The directory hierarchy is implemented based on indentation|

<h4 id="table-of-contents-sample-code">Sample Code</h4>

<details open="true">
  <summary>Code</summary>

```tsx
import React, { Break, H1, H2, H3, H4, H5, H6, TableOfContents } from 'jsx-to-md'

export default function () {
  const props = { skip: true }

  return (
    <>
      <TableOfContents text="Table of Contents" indent={['&ensp;']} />
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
      {/** Skip generate directory */}
      <H1 skip>Skip Heading 1</H1>

      <h1 {...props}>Skip HTML Heading 1</h1>
    </>
  )
}
```
<details open="true">
    <summary>Generate Markdown character content</summary>


```markdown
<details open>
  <summary>Table of Contents</summary>

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
<h1>HTML Heading 1</h1><h2>HTML Heading 2</h2><h3>HTML Heading 3</h3><h4>HTML Heading 4</h4><h5>HTML Heading 5</h5><h6 id="html-heading-6">HTML Heading 6</h6>

# Skip Heading 1
<h1>Skip HTML Heading 1</h1>
```



  </details><details open="true">
    <summary>Render Content</summary>


<details open>
  <summary>Table of Contents</summary>

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
<h1>HTML Heading 1</h1><h2>HTML Heading 2</h2><h3>HTML Heading 3</h3><h4>HTML Heading 4</h4><h5>HTML Heading 5</h5><h6 id="html-heading-6">HTML Heading 6</h6>

# Skip Heading 1
<h1>Skip HTML Heading 1</h1>


  </details>

</details>


### Asynchronous Rendering Wrapper
Used to support asynchronous rendering
<h4 id="asynchronous-rendering-wrapper-component-list">Component List</h4>

* AsyncWrapper


<h4 id="asynchronous-rendering-wrapper-attribute-description">Attribute Description</h4>

|Attribute Name|Type|Whether it is necessary|Default|description|
|:-:|:-:|:-:|:-:|:-|
|data|Promise&lt;T&gt;|true|-|Data loaded asynchronously|

<h4 id="asynchronous-rendering-wrapper-sample-code">Sample Code</h4>

<details open="true">
  <summary>Code</summary>

```tsx
import React, { List, AsyncWrapper } from 'jsx-to-md'

export default function AsyncDemo() {
  type Data = {
    name: string
  }
  const asyncData1 = new Promise<Data>((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'friend',
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
            'Basic',
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
            'Nested',
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
                              , this is {name}, welcome to use
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
    <summary>Render Content</summary>


* Basic
   * Hi friend
* Nested
   * Hi friend, this is jsx-to-md, welcome to use




  </details>

</details>

