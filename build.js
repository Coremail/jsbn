#!/usr/bin/env node

const Path = require('path');
const fs = require('fs');


const combine = (name, parts) => {
    fs.existsSync(`${__dirname}/dist`) || fs.mkdirSync(`${__dirname}/dist`);
    fs.writeFileSync(`${__dirname}/dist/${name}.js`, parts.join(''), {encoding : 'utf8'})
    console.log(`dist/${name}.js generated`)
};
const importOriginal = filename =>
        `\n// === original: ${filename}\n` + fs.readFileSync(`${__dirname}/tjw/${filename}`, {encoding : 'utf8'});

const generateAll = () => {
    // language=JavaScript
    combine('jsbn', [
        "var navigator = typeof self === 'undefined' ? {} : self.navigator || {};\n",
        importOriginal('jsbn.js'), importOriginal('jsbn2.js'),
        '\n// === footer\n',
        'module.exports = BigInteger',
    ]);


    // language=JavaScript
    combine('rng', [
        importOriginal('prng4.js'), importOriginal('rng.js'),
        '\n// === footer\n',
        'module.exports = SecureRandom',
    ]);


    // language=JavaScript
    combine('rsa', [
        "var BigInteger = require('./jsbn');\n",
        "var SecureRandom = require('./rng');\n",
        importOriginal('rsa.js'), importOriginal('rsa2.js'),
        '\n// === footer\n',
        'module.exports = RSAKey\n',
    ]);
}

if (!fs.existsSync(`${__dirname}/dist/rsa.js`)) {
    generateAll();
}
