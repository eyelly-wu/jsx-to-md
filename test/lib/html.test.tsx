import React, { render } from '../../src/lib'

describe('html', () => {
  type Test = [
    string, // desc
    JSX.Element, // res
    string, // expectRes
  ]

  const tests: Test[] = [
    ['empty tag', <div></div>, '<div></div>'],
    ['no end tag: br', <br />, '<br />'],
    ['no end tag: img', <img src="xxx" />, '<img src="xxx" />'],
    [
      'style: height',
      <div style={{ height: 10 }}></div>,
      '<div style="height: 10px;"></div>',
    ],
    [
      'style: marginRight',
      <div style={{ marginRight: 10 }}></div>,
      '<div style="margin-right: 10px;"></div>',
    ],
    [
      'style: height&marginRight',
      <div style={{ height: 10, marginRight: 10 }}></div>,
      '<div style="height: 10px;margin-right: 10px;"></div>',
    ],
    [
      'style: height&color',
      <div style={{ height: 10, color: 'red' }}></div>,
      '<div style="height: 10px;color: red;"></div>',
    ],
    [
      'multiple map',
      <div>
        {['a', 'b', 'c'].map((item) => (
          <span>{item}</span>
        ))}
      </div>,
      `<div>
  <span>a</span><span>b</span><span>c</span>
</div>`,
    ],
    [
      'nest',
      <table>
        <tr>
          <th>title1</th>
          <th>title2</th>
        </tr>
        <tr>
          <td>body1</td>
          <td>body2</td>
        </tr>
      </table>,
      `<table>
  <tr>
    <th>title1</th>
    <th>title2</th>
  </tr>
  <tr>
    <td>body1</td>
    <td>body2</td>
  </tr>
</table>`,
    ],
    [
      'nest:break line',
      <pre>
        {`const a = 'a'
    const b = 'b'`}
      </pre>,
      `<pre>
const a = 'a'
    const b = 'b'
</pre>`,
    ],
    [
      'multiple prop',
      <div id="id" contentEditable="true" style={{ height: 20 }}></div>,
      `<div id="id" contentEditable="true" style="height: 20px;"></div>`,
    ],
    [
      'svg props',
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="800"
        height="1267"
        style={{ backgroundColor: '#fff' }}
      >
        <image
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xlinkHref="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        />
      </svg>,
      `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800" height="1267" style="background-color: #fff;">
  <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"></image>
</svg>`,
    ],
  ]

  it.each(tests)('%s', (desc, resProp, expectRes) => {
    const res = render(resProp)
    expect(res).toBe(expectRes)
  })
})
