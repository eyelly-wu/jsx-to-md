export default function getText(text, type: 'normal' | 'code' = 'code') {
  if (type == 'normal') return text

  return ` \`${text}\` `
}
