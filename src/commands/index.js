const path = require('path')
const challs = require(path.join(__dirname, './challs'))
const chall = require(path.join(__dirname, './chall'))
const submit = require(path.join(__dirname, './submit'))
const help = require(path.join(__dirname, './help'))

module.exports = {
	challs,
	chall,
	submit,
	help
}