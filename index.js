'use strict'

;[
  'boolean',
  'function',
  'number',
  'object',
  'string',
  'symbol',
  'undefined'
].forEach(function (type) {
  exports[type] = isTypeOf(type)
})

function isTypeOf (type) {
  return function (value) {
    return typeof value === type
  }
}
