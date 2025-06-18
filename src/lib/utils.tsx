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
      .replace(/(\[)|(\])|[.()（）?？,，':：]|(\*\*)/g, '')
  )
}

export function getHtmlAttributeName(name: string) {
  return name.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase())
}
