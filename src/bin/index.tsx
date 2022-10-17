#! /usr/bin/env node
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { exec } from 'shelljs'
import { initConfig, getConfig } from './utils'

const params = process.argv.slice(2)

switch (true) {
  case params.includes('init'):
    initConfig()
    break
  case params.includes('run'):
    {
      const runScriptPath = join(__dirname, './run.tsx')
      const config = getConfig()

      if (config.length == 0) {
        console.log('no config')
        break
      }

      config.forEach((configItem) => {
        const { entry, output, params = {} } = configItem
        const paramsStr = JSON.stringify(params)

        const runScipt = `
import { writeFileSync } from 'node:fs'
// const fs = require('fs')
// const { writeFileSync } = fs
import { join } from 'node:path'
// const path = require('path')
// const { join } = path
// const Doc = require('${entry}')
import Doc from '${entry}'
import React, { render } from '../lib/'
// const React = require('../lib/')
// const { render } = React

const res = render(<Doc {...(${paramsStr}) as any}/>)

writeFileSync('${output}', res, {
  encoding: 'utf8',
})
        `

        // Generate temp script file
        writeFileSync(runScriptPath, runScipt, {
          encoding: 'utf8',
        })

        exec('npx ts-node-dev --respawn ' + runScriptPath)
      })
    }
    break
  default:
    console.log('no match command found')
    break
}
