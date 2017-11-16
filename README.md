# fix-phone

[![Build Status](https://secure.travis-ci.org/titarenko/fix-phone.png?branch=master)](https://travis-ci.org/titarenko/fix-phone) 
[![Coverage Status](https://coveralls.io/repos/github/titarenko/fix-phone/badge.svg?branch=master)](https://coveralls.io/github/titarenko/fix-phone?branch=master)

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

fix.decompose('ua', '050-121-22-33'); // returns { country: '+380', local: '50', phone: '1212233' }
fix.decompose('ua', '010-121-22-33'); // returns null
```

## Supported country codes

- ua
- ru
- kz
- ro
- bg
- si
- cz
- pl
- hr
- ee
- lt
- lv
- th
- ro
- kg
- gr
- cy
- es
- pt
- it
- fr
- vn

## Contributors

- [akhll](https://github.com/akhll)
- [MaksimVovk](https://github.com/MaksimVovk)
- [Erushenko](https://github.com/erushenko)

## License

MIT
