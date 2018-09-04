#!/usr/bin/env node

[
    require('./bigInt'),
    require('./rsa'),

].forEach(x => Object.entries(x).forEach(([name1, y]) => {
    Object.entries(y).forEach(([name2, fn]) => {
        process.stdout.write(`${name1} - ${name2}`)
        if (fn.call) {
            try {
                fn()
                process.stdout.write(' - pass\n');
            } catch (e) {
                process.stdout.write(`- ${e.stack}\n`);
            }
        } else {
            process.stdout.write(` - fail - ${fn}`);
        }
    })
}))
