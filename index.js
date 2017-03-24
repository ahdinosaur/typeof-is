'use strict'

;[
  'boolean',
  'function',
  'number',
  'object',
  'string',
  'symbol',
  'undefined'
].forEach(type => {
  exports[type] = Is(type)
})

function Is (type) {
  return function (value) {
    return typeof value === type
  }
}

/*
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
*/
