'use strict'

module.exports = {
  'boolean': isBoolean,
  'function': isFunction,
  number: isNumber,
  object: isObject,
  string: isString,
  symbol: isSymbol,
  'undefined': isUndefined
}

function isBoolean (value) {
  return typeof value === 'boolean'
}

function isFunction (value) {
  return typeof value === 'function'
}

function isNumber (value) {
  return typeof value === 'number'
}

function isObject (value) {
  return typeof value === 'object'
}

function isString (value) {
  return typeof value === 'string'
}

function isSymbol (value) {
  return typeof value === 'symbol'
}

function isUndefined (value) {
  return typeof value === 'undefined'
}
