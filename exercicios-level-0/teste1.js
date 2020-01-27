var assert = require('assert');


var processamento = function (a) {
    return a;
}

try {

    var expected = 100;
    var actual   = 100;

    assert.equal(expected, processamento(actual));

} catch(e) {
    console.log(e);
}
