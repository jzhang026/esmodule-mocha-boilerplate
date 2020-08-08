# A quick set up boilerplate to test es module with [mocha](https://github.com/mochajs/mocha) and [nyc](https://github.com/istanbuljs/nyc)

use [esm](https://github.com/standard-things/esm) as the module loader

## Getting started

```
npm install
```

### to check the coverage report run

```
npm run coverage
```

### dev and watch the changes

```
npm run dev
```

## What makes it work

- the `-r esm` argument, when running `mocha`

- the `"require": ["esm"]` setting, in `.nycrc`

```json
  "require": [
    "esm"
  ],
```

- the `cjs: true` setting, in package.json

```json
  "esm": {
    "cjs": true
  },
```

## Example
![test2](https://github.com/jzhang026/esmodule-mocha-boilerplate/blob/master/script/test2.png "Test 2")
![test1](https://github.com/jzhang026/esmodule-mocha-boilerplate/blob/master/script/test1.png "Test 1")

