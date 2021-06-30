'use strict'
const Xray = require('x-ray')
const xray = Xray()

module.exports = async (username, pgrange) => {
  if (!(username && typeof username === 'string' && username.length > 0)) throw new Error('Please enter a vaild username')
  else if (!(pgrange && typeof pgrange === 'number' && pgrange > 0)) throw new Error('Enter a valid page number range')
  const data = await getSponsors(username, Math.floor(Math.random() * pgrange) + 1)
  return data[Math.floor(Math.random() * data.length)]
}
async function getSponsors (username, page) {
  const data = await xray(`https://github.com/sponsors/${username}/sponsors_partial?page=${page}`, 'img', [{
    avatar: '@src',
    username: '@alt'
  }])
  data.forEach(user => { user.username = user.username.substring(1) })
  return data
}
