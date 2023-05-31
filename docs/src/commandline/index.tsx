import React, { H1, H2, H3, Table, Column, TableOfContents } from '@lib'
import { CONFIG_NAME } from '@bin/constant'
import { initI18N } from '../utils'

function getCommonTableColumns() {
  const commonTableColumns: Column[] = [
    {
      title: t('名称'),
      fieldName: 'name',
      align: 'center',
    },
    {
      title: t('类型'),
      fieldName: 'type',
      align: 'center',
    },
    {
      title: t('是否必设'),
      fieldName: 'required',
      align: 'center',
    },
    {
      title: t('默认值'),
      fieldName: 'default',
      align: 'center',
    },
    {
      title: t('说明'),
      fieldName: 'description',
    },
  ]

  return commonTableColumns
}

type RecordItem = Record<
  'name' | 'type' | 'required' | 'default' | 'description',
  string | JSX.Element | number
>

function BasicConfig() {
  const data: RecordItem[] = [
    {
      name: 'source',
      type: '[Source](#source)[]',
      required: t('是'),
      default: '-',
      description: t('数据源相关配置'),
    },
  ]

  return (
    <>
      <H3>{t('基础配置')}</H3>
      <Table columns={getCommonTableColumns()} data={data} />
    </>
  )
}

function Source() {
  const data: RecordItem[] = [
    {
      name: 'entry',
      type: 'string',
      required: t('是'),
      default: '-',
      description: t('文档入口文件（绝对路径）'),
    },
    {
      name: 'output',
      type: 'string',
      required: t('否'),
      default: '-',
      description: t('生成 Markdown 文件的路径（绝对路径）'),
    },
    {
      name: 'params',
      type: 'Record<string,unknown>',
      required: t('否'),
      default: `{}`,
      description: t('入口文件接收到的 props 属性'),
    },
  ]

  return (
    <>
      <H3>{t('Source')}</H3>
      {t('数据源相关配置')}
      <Table columns={getCommonTableColumns()} data={data} />
    </>
  )
}

function Config() {
  return (
    <>
      <H2>1. {t('{0}配置', ` \`${CONFIG_NAME}\` `)}</H2>
      <BasicConfig />
      <Source />
    </>
  )
}

function CommandList() {
  const columns: Column[] = [
    {
      title: t('命令'),
      fieldName: 'command',
      align: 'center',
    },
    {
      title: t('简写'),
      fieldName: 'shorthand',
      align: 'center',
    },
    {
      title: t('用法'),
      fieldName: 'usage',
    },
    {
      title: t('说明'),
      fieldName: 'description',
    },
  ]

  type CommandRecordItem = Record<
    'command' | 'shorthand' | 'usage' | 'description',
    string | JSX.Element | number
  >

  const data: CommandRecordItem[] = [
    {
      command: 'init',
      shorthand: '-',
      usage: '`npx jtm init`',
      description: t('初始化配置文件'),
    },
    {
      command: 'run',
      shorthand: '-',
      usage: '`npx jtm run`',
      description: t('读取配置生成 Markdown 文件'),
    },
  ]

  return (
    <>
      <H3>{t('命令列表')}</H3>
      <Table columns={columns} data={data} />
    </>
  )
}

function CommandProp() {
  const columns: Column[] = [
    {
      title: t('参数名'),
      fieldName: 'name',
      align: 'center',
    },
    {
      title: t('参数值'),
      fieldName: 'value',
      align: 'center',
    },
    {
      title: t('适用命令'),
      fieldName: 'command',
      align: 'center',
    },
    {
      title: t('用法'),
      fieldName: 'usage',
    },
    {
      title: t('说明'),
      fieldName: 'description',
    },
  ]

  type CommandRecordItem = Record<
    'name' | 'value' | 'command' | 'usage' | 'description',
    string | JSX.Element | number
  >

  const data: CommandRecordItem[] = [
    {
      name: '--watch',
      value: ' `true` \\| `false` ',
      command: ' `run` ',
      usage: (
        <>
          `npx jtm run`
          <br />
          `npx jtm run --watch true`
          <br />
          `npx jtm run --watch false`
        </>
      ),
      description: (
        <>
          {t(
            '指定是否启用文件监听，该配置默认开启，启用后相关文件变化会重新生成 Markdown 文件',
          )}
        </>
      ),
    },
    {
      name: '--jsx',
      value: ' `classic` \\| `automatic` ',
      command: ' `run` ',
      usage: (
        <>
          `npx jtm run`
          <br />
          `npx jtm run --jsx classic`
          <br />
          `npx jtm run --jsx automatic`
        </>
      ),
      description: (
        <>
          {t(
            '可用于指定{0}的编译方式，从而决定是否需要手动引入{1}',
            ' `JSX` ',
            ' `React` ',
          )}
          <br />
          <br />
          <b>classic</b>:{' '}
          {t(
            '{0}会编译为{1}需要引入{2}',
            ' `JSX` ',
            ' `React.createElement` ',
            ' `React` ',
          )}
          <b>automatic</b>:{' '}
          {t(
            '内部默认会从{0}中引入{1}和{2}，不需要引入{3}',
            ' `jsx-to-md/jsx-runtime` ',
            ' `jsx` ',
            ' `jsxs` ',
            ' `React` ',
          )}
        </>
      ),
    },
  ]

  return (
    <>
      <H3>{t('命令参数')}</H3>
      <Table columns={columns} data={data} />
    </>
  )
}

function Command() {
  return (
    <>
      <H2>2. {t('命令')}</H2>
      <CommandList />
      <CommandProp />
    </>
  )
}

export default function CommandLine(props) {
  initI18N(props)

  return (
    <>
      <H1 skip>{t('命令行')}</H1>
      <TableOfContents text={t('目录')} open={false} />
      <Config />
      <Command />
    </>
  )
}
