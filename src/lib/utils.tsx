export function getAnchor(text: string): string {
  return (
    '#' +
    text
      ?.trim?.()
      .toLocaleLowerCase()
      .replaceAll(/( ?`\b)|(\b` ?)/g, '-')
      .replace(/ +/g, '-')
      .replaceAll('.', '')
      .replaceAll(/(\[)|(\])/g, '')
  )
}
