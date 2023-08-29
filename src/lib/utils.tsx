export function getAnchor(text: string): string {
  return (
    '#' +
    text
      ?.trim?.()
      .toLocaleLowerCase()
      .replaceAll(/( `)|(` )/g, '-')
      .replaceAll('`', ' ')
      .replace(/ +$/, '')
      .replace(/ +/g, '-')
      .replace(/(\[)|(\])|[.()（）?？,，']|(\*\*)/g, '')
  )
}
