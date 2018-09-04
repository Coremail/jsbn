
# jsbn: javascript big number 

CommonJS Porting (NodeJS / webpack / etc.) for jsbn library

[![NPM](https://nodei.co/npm/js-jsbn.png)](https://www.npmjs.com/package/js-jsbn)

[Tom Wu's Original Website](http://www-cs-students.stanford.edu/~tjw/jsbn/)

## Installation

```bash
npm install js-jsbn
```

## Examples

for BigInteger 
```js
const BigInteger = require('js-jsbn');
const bi = new BigInteger('91823918239182398123');
console.log(bi.bitLength()); // 67
```

for RSA encryption
```js
const RSAKey = require('js-jsbn/dist/rsa');
const assert = require('assert');

// Example for RSA encryption
const modulus = ` 
        8a42ff7f26dfc41345259b01406754591b70843cb2b8893e1da42ddf7c63a3e3 
        b704ac8ca0042c093e10e0bf219357e8d6c02539adf669fcfc1a666fb13d771f 
        9d602583eb40c1997af02e74c4da38e09c44fe90d7620ce75f01055af3c928e7 
        d7eaa5c8fd64421217ea6ef9ba694cbb193725120dff599ecb964c01c4e82925
`.replace(/\s+/g, '');
const publicExponent = '010001';

const publicKey = new RSAKey();
publicKey.setPublic(modulus, publicExponent);
console.log(publicKey.encrypt('foobar'));

// Example for RSA decryption
const privateExponent = ` 
        5c5c0316ea5e023a292fc4cae23de44f9e0fdc963b812054f9320a5ec7563c4d
        ca9d79b27ad62ea081f07e61cf4901298e034f1aa7c5fae93f735748776aaade 
        d4cd05febbd256e4cb8dd6866fa753d7747690efc7ec8259220926446df3529e 
        b62a8def8d0503c255371bcc12da7b49d958e96bacddaccd332939aa609d72a1
`.replace(/\s+/g, '');

const encryptedData = `
        6f653cce0ad7b70a6e713ab9cf37895a8ce85562ae896445cfc62a53f480675c
        61cd0601bc26a97dec52143137419b63587041293037ed1b5dc1867ff5a5be45
        fefdac03de36cd169236d5167614eb1476b08f3bb1fa10d4fe449a0f2c1f07ee
        1635f4cd89df876fdb5f823a596f08d2cbf73eaab81cd653242f82c1651295a1
`.replace(/\s+/g, '');

const privateKey = new RSAKey();
privateKey.setPrivate(modulus, publicExponent, privateExponent);
assert.strictEqual(privateKey.decrypt(encryptedData), 'foobar');
```

