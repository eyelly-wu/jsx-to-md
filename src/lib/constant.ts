import { H1, H2, H3, H4, H5, H6 } from '../lib/components/Header'

export const STRING_HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export const BLOCK_NODES = [
  'div',
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'table',
  'tbody',
  'tr',
  'th',
  'td',
  ...STRING_HEADINGS,
]

export const NO_END_NODES = ['br', 'input', 'img', 'hr', 'meta']

export const FUNC_HEADINGS = [H1, H2, H3, H4, H5, H6]

export const TABLE_OF_CONTENTS_PLACEHOLDER =
  '\n' + Math.random().toString(32).slice(2) + '\n'
