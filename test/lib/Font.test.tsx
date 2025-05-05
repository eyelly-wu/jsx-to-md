import React, {
  Bold,
  Italic,
  BoldItalic,
  StrikeThrough,
  render,
} from '../../src/lib'

it('Font', () => {
  const res = render(
    <>
      <Italic>italic</Italic>
      <Italic mark="_">italic</Italic>
      <Bold>bold</Bold>
      <Bold mark="_">bold</Bold>
      <BoldItalic>bold italic</BoldItalic>
      <BoldItalic mark="_">bold italic</BoldItalic>
      <StrikeThrough>Strike Through</StrikeThrough>
    </>,
  )
  expect(res).toBe(
    [
      '*italic*',
      '_italic_',
      '**bold**',
      '__bold__',
      '***bold italic***',
      '___bold italic___',
      '~~Strike Through~~',
    ].join(''),
  )
})
