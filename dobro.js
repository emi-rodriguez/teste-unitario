var assert = require('assert');


var dobro = function (a) {
    return a*2;
}

try {

    var expected = 20;
    var actual   = 10;

    assert.equal(expected, dobro(actual));

} catch(e) {
    console.log(e);
}
