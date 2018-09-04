/**
 * Created by haksookim on 2016-08-02.
 */

const assert = require('assert');
const BigInteger = require('../dist/jsbn');

exports.bigInteger = {

    '1' : () => {
        const x = new BigInteger('abcd1234', 16);
        const y = new BigInteger('beef', 16);
        const z = x.mod(y);
        assert.strictEqual(z.toString(16).toUpperCase(), 'B60C');
    },

    '2' : () => {
        const a = new BigInteger('91823918239182398123');
        assert.strictEqual(a.bitLength(), 67);
    }
};
