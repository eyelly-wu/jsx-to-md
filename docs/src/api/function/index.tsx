import React, { H2, H3, Break, getAnchor } from '@lib'
import CodeDemo from '../CodeDemo'

export default function FunctionList() {
  const commonTips =
    '📢📢📢：' +
    t(
      '如果配合当前的库的命令行工具使用，根节点的渲染无需使用该函数，只需要将根节点默认导出就可以',
    )

  return (
    <>
      <H2>{t('函数API')}</H2>
      <H3>{t('函数列表')}</H3>
      <table>
        <tr>
          <th>{t('函数名')}</th>
          <th>{t('类型')}</th>
          <th>{t('说明')}</th>
        </tr>
        <tr>
          <td>render</td>
          <td>
            <pre>{`(element: JSX.element) => string`}</pre>
          </td>
          <td>
            {t('渲染 JSX 元素，返回生成的 Markdown 字符内容')}
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
            {t('异步渲染 JSX 元素，返回生成的 Markdown 字符内容')}
            <br />
            <br />
            {t(
              '当前函数只能用于渲染根节点，需要异步渲染的内容需要搭配 AsyncWrapper 来使用',
            )}
            <br />
            {commonTips}
          </td>
        </tr>
        <tr>
          <td>getAnchor</td>
          <td>
            <pre>{`(text: string) => string`}</pre>
          </td>
          <td>{t('基于标题内容获取生成的锚点')}</td>
        </tr>
      </table>
      <Break />
      <H3>{t('示例代码')}</H3>
      <CodeDemo
        code={`
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
  // ${t('输出：{0}', 'Hello World!')}

  console.log(getAnchor('Hello World'))
  // ${t('输出：{0}', getAnchor('Hello World'))}
}

Test()
`}
      />
    </>
  )
}
