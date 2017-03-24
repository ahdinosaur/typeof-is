const { keys } = Object
const test = require('tape')

const is = require('../')

const fixtures = {
  boolean: [
    true,
    false,
    Boolean()
  ],
  function: [
    function () {},
    () => {},
    Function() // eslint-disable-line no-new-func
  ],
  number: [
    0,
    1,
    NaN,
    Infinity
  ],
  object: [
    {},
    null,
    new RegExp('a'),
    []
  ],
  string: [
    '',
    'a',
    '0',
    String(0),
    String('a')
  ],
  symbol: [
    Symbol('a'),
    Symbol.for('a')
  ],
  undefined: [
    undefined
  ]
}

test('typeof-is', function (t) {
  t.ok(is, 'module is require-able')
  keys(fixtures).forEach(type => {
    const trueCases = fixtures[type]
    const falseCases = keys(fixtures)
      .reduce((sofar, otherType) => {
        if (type === otherType) return sofar
        return [...sofar, ...fixtures[otherType]]
      }, [])
    trueCases.forEach(value => {
      t.ok(is[type](value), `${JSON.stringify(value)} is ${type}`)
    })
    falseCases.forEach(value => {
      t.notOk(is[type](value), `${JSON.stringify(value)} is not ${type}`)
    })
  })
  t.end()
})
