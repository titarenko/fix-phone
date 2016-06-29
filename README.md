# fix-phone

[![Build Status](https://secure.travis-ci.org/titarenko/fix-phone.png?branch=master)](https://travis-ci.org/titarenko/fix-phone) [![Coverage Status](https://coveralls.io/repos/titarenko/fix-phone/badge.png)](https://coveralls.io/r/titarenko/fix-phone)

Validate and format phone number, or return nothing, if such phone is not valid.

## Installation

```bash
npm i fix-phone --save
```

## Usage

```js
var fix = require('fix-phone');

fix('ua', '050-121-22-33'); // returns +380501212233
fix('ua', '010-121-22-33'); // returns null
```

## Supported country codes

- ua
- ru
- kz
- ro

## License

MIT
