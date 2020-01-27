var assert = require('assert');


var areaQuadrada = function (a) {
    return a*a;
}

try {

    assert.equal(100, areaQuadrada(10));
    assert.equal(25, areaQuadrada(5));

} catch(e) {
    console.log(e);
}
