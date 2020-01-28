var assert = require('assert');


var juros = function (c, i, n) {
    return c*i*n;
}

try {

    assert.equal(2560, juros(16000, 0.04, 4));

} catch(e) {
    console.log(e);
}
