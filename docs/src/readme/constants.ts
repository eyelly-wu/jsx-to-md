import { Image, Link, ArrayObject } from './types'

export const langs = [
  {
    code: 'en',
    locale: 'en-US',
    name: 'English',
    filename: 'README.md',
  },
  {
    code: 'zh',
    locale: 'zh-CN',
    name: '简体中文',
    filename: 'README_zh-CN.md',
  },
]

export const localeFileNameMap = langs.reduce((res, item) => {
  res[item.code] = item.filename
  return res
}, {})

const links = [
  {
    title: 'npm',
    href: 'https://www.npmjs.com/package/jsx-to-md',
  },
  {
    title: 'github',
    href: 'https://github.com/eyelly-wu/jsx-to-md',
  },
  {
    title: 'github-stars',
    href: 'https://github.com/eyelly-wu/jsx-to-md/stargazers',
  },
  {
    title: 'codecov',
    href: 'https://codecov.io/gh/eyelly-wu/jsx-to-md',
  },
] as const

type LinkTitleType = ArrayObject<typeof links, 'title'>

type LinkObject = Record<LinkTitleType, Link>

export const linkObj = links.reduce((res, item) => {
  res[item.title] = item
  return res
}, {} as LinkObject)

const images = [
  {
    title: 'npm-version',
    alt: 'npm-version',
    src: 'https://img.shields.io/npm/v/jsx-to-md.svg?style=flat-square',
  },
  {
    title: 'npm-download',
    alt: 'npm-download',
    src: 'https://img.shields.io/npm/dm/jsx-to-md',
  },
  {
    title: 'github-stars',
    alt: 'github-stars',
    src: 'https://img.shields.io/github/stars/eyelly-wu/jsx-to-md?style=social',
  },
  {
    title: 'last-commit',
    alt: 'last-commit',
    src: 'https://img.shields.io/github/last-commit/eyelly-wu/jsx-to-md',
  },
  {
    title: 'codecov',
    alt: 'codecov',
    src: 'https://codecov.io/gh/eyelly-wu/jsx-to-md/branch/main/graph/badge.svg?token=tocki8cvYM',
  },
  {
    title: 'demo',
    alt: 'demo',
    src: 'https://s3.bmp.ovh/imgs/2023/04/02/ea796b84837c91dd.gif',
  },
] as const

type ImageTitleType = ArrayObject<typeof images, 'title'>

type ImageObject = Record<ImageTitleType, Image>

export const imageObj = images.reduce((res, item) => {
  res[item.title] = item
  return res
}, {} as ImageObject)
