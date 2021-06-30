const tap = require('tap')
const ghn = require('./App')
tap.test('Error test', async t => {
  await t.rejects(ghn(6464646, 98498), { message: 'Please enter a vaild username' })
  await t.rejects(ghn(undefined, 98498), { message: 'Please enter a vaild username' })
  await t.rejects(ghn('', 98498), { message: 'Please enter a vaild username' })
  await t.rejects(ghn('sindresorhus', ''), { message: 'Enter a valid page number range' })
  await t.rejects(ghn('sindresorhus'), { message: 'Enter a valid page number range' })
})
tap.test('Output test', async t => {
  const main = await ghn('sindresorhus', 5)
  t.equal(typeof main.username, 'string')
  t.equal(typeof main.avatar, 'string')
})
