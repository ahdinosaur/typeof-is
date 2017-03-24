# typeof-is

utility functions to check primitive types using [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

```shell
npm install --save typeof-is
```

## background

i prefer using functions over `typeof ===` expressions`, so i often find myself writing these functions inline in my modules.

i wrote this module because the related modules i found seemed to implement the kitchen sink of types, when i usually only need these and i'd rather install a specific module for other types.

## example

```js
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
```

## usage

### `is = require('typeof-is')`
### `is.boolean(value)`
### `is.function(value)`
### `is.number(value)`
### `is.object(value)`
### `is.string(value)`
### `is.symbol(value)`
### `is.undefined(value)`

## license

The Apache License

Copyright &copy; 2017 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
