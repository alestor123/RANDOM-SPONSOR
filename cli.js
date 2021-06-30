#!/usr/bin/env node

const chalk = require('chalk')
const ghn = require('./App');

(async () => {
  const { username } = await ghn(process.argv[2], process.argv[3] || 1)
  console.log(chalk.greenBright.bold(`Thanks you ${username} for sponsoring ${process.argv[2]}`))
})()
