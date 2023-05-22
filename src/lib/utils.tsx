export function getAnchor(text: string): string {
  return (
    '#' +
    text
      ?.trim?.()
      .toLocaleLowerCase()
      .replaceAll(/( ?`\b)|(\b` ?)/g, '-')
      .replaceAll('`', ' ')
      .replace(/ +/g, '-')
      .replace(/(\[)|(\])|[.()（）?？]|(\*\*)/g, '')
  )
}
