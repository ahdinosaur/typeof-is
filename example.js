const is = require('typeof-is')

is.boolean('true') // false
is.boolean(true) // true
is.function(() => {}) // true
is.number(true) // false
is.number(NaN) // true
is.object({}) // true
is.object(null) // true
is.object(undefined) // false
is.string('') // true
is.string(1) // false
is.symbol(Symbol('a')) // true
is.undefined(null) // false
