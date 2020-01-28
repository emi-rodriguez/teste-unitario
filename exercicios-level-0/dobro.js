var assert = require('assert');


var dobro = function (a) {
    return a*2;
}

try {

    assert.equal(20, dobro(10));

} catch(e) {
    console.log(e);
}
