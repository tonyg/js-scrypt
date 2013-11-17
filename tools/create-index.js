
var version = require('./version')

var hogan = require('hogan.js')
var fs = require('fs')
var path = require('path')
var index = fs.readFileSync(resolve('src/index.mustache'), 'utf8')
var raw = fs.readFileSync(resolve('src/scrypt_raw.js'), 'utf8')
var cooked = fs.readFileSync(resolve('src/scrypt_cooked.js'), 'utf8')
var template = hogan.compile(index)
var context = { SCRYPTRAW: raw , SCRYPTCOOKED: cooked }

fs.writeFileSync(resolve('index.js'), template.render(context))

function resolve(pathname) {
  return path.resolve(__dirname, '../' + pathname)
}
