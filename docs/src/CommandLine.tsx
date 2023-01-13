import React, { H1, H2, H3, Table, Column } from '@lib'
import { CONFIG_NAME } from '@bin/constant'

function getCommonTableColumns() {
  const commonTableColumns: Column[] = [
    {
      title: i18n('名称'),
      fieldName: 'name',
      align: 'center',
    },
    {
      title: i18n('类型'),
      fieldName: 'type',
      align: 'center',
    },
    {
      title: i18n('是否必设'),
      fieldName: 'required',
      align: 'center',
    },
    {
      title: i18n('默认值'),
      fieldName: 'default',
      align: 'center',
    },
    {
      title: i18n('说明'),
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
      required: i18n('是'),
      default: '-',
      description: i18n('数据源相关配置'),
    },
  ]

  return (
    <>
      <H3>{i18n('基础配置')}</H3>
      <Table columns={getCommonTableColumns()} data={data} />
    </>
  )
}

function Source() {
  const data: RecordItem[] = [
    {
      name: 'entry',
      type: 'string',
      required: i18n('是'),
      default: '-',
      description: i18n('文档入口文件（绝对路径）'),
    },
    {
      name: 'output',
      type: 'string',
      required: i18n('否'),
      default: '-',
      description: i18n('生成 Markdown 文件的路径（绝对路径）'),
    },
    {
      name: 'params',
      type: 'Record<string,unknown>',
      required: i18n('否'),
      default: `{}`,
      description: i18n('入口文件接收到的 props 属性'),
    },
  ]

  return (
    <>
      <H3>{i18n('Source')}</H3>
      {i18n('数据源相关配置')}
      <Table columns={getCommonTableColumns()} data={data} />
    </>
  )
}

function Config() {
  return (
    <>
      <H2>1. {i18n('{0}配置', ` \`${CONFIG_NAME}\` `)}</H2>
      <BasicConfig />
      <Source />
    </>
  )
}

function CommandList() {
  const columns: Column[] = [
    {
      title: i18n('命令'),
      fieldName: 'command',
      align: 'center',
    },
    {
      title: i18n('简写'),
      fieldName: 'shorthand',
      align: 'center',
    },
    {
      title: i18n('用法'),
      fieldName: 'usage',
    },
    {
      title: i18n('说明'),
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
      description: i18n('初始化配置文件'),
    },
    {
      command: 'run',
      shorthand: '-',
      usage: '`npx jtm run`',
      description: i18n('读取配置生成 Markdown 文件'),
    },
  ]

  return (
    <>
      <H3>{i18n('命令列表')}</H3>
      <Table columns={columns} data={data} />
    </>
  )
}

function CommandProp() {
  const columns: Column[] = [
    {
      title: i18n('参数名'),
      fieldName: 'name',
      align: 'center',
    },
    {
      title: i18n('参数值'),
      fieldName: 'value',
      align: 'center',
    },
    {
      title: i18n('适用命令'),
      fieldName: 'command',
      align: 'center',
    },
    {
      title: i18n('用法'),
      fieldName: 'usage',
    },
    {
      title: i18n('说明'),
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
          {i18n(
            '指定是否启用文件监听，该配置默认开启，启用后相关文件变化会重新生成 Markdown 文件',
          )}
        </>
      ),
    },
  ]

  return (
    <>
      <H3>{i18n('命令参数')}</H3>
      <Table columns={columns} data={data} />
    </>
  )
}

function Command() {
  return (
    <>
      <H2>2. {i18n('命令')}</H2>
      <CommandList />
      <CommandProp />
    </>
  )
}

export default function CommandLine() {
  return (
    <>
      <H1>{i18n('命令行')}</H1>
      <Config />
      <Command />
    </>
  )
}
