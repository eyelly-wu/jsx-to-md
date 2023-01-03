import React, { H2, H3, Break } from '@lib'
import CodeDemo from '../CodeDemo'

export default function FunctionList() {
  const commonTips =
    '📢📢📢：' +
    i18n(
      '如果配合当前的库的命令行工具使用，根节点的渲染无需使用该函数，只需要将根节点默认导出就可以',
    )

  return (
    <>
      <H2>{i18n('函数API')}</H2>
      <H3>{i18n('属性')}</H3>
      <table>
        <tr>
          <th>{i18n('函数名')}</th>
          <th>{i18n('类型')}</th>
          <th>{i18n('说明')}</th>
        </tr>
        <tr>
          <td>render</td>
          <td>
            <pre>{`(element: JSX.element) => string`}</pre>
          </td>
          <td>
            {i18n('渲染 JSX 元素，返回生成的 Markdown 字符内容')}
            <br />
            <br />
            {commonTips}
          </td>
        </tr>
        <tr>
          <td>renderAsync</td>
          <td>
            <pre>{`(element: JSX.element) => Promise&lt;string&gt;`}</pre>
          </td>
          <td>
            {i18n('异步渲染 JSX 元素，返回生成的 Markdown 字符内容')}
            <br />
            <br />
            {i18n(
              '当前函数只能用于渲染根节点，需要异步渲染的内容需要搭配 AsyncWrapper 来使用',
            )}
            <br />
            {commonTips}
          </td>
        </tr>
      </table>
      <Break />
      <H3>{i18n('示例代码')}</H3>
      <CodeDemo
        code={`
import React, { renderAsync, AsyncWrapper, render } from 'jsx-to-md'

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
  // ${i18n('输出：{0}', 'Hello World!')}
}

Test()
`}
      />
    </>
  )
}
