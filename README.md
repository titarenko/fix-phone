# fix-phone

Validate and format phone number, or return nothing, if such phone is not valid.

## Installation

```bash
npm i fix-phone
```

## Usage

```js
var fix = require('fix-phone');

fix('ua', '050-121-22-33'); // returns +380501212233
fix('ua', '010-121-22-33'); // returns null
```

## License

MIT
