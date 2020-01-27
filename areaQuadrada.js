var assert = require('assert');


var areaQuadrada = function (a, b) {
    return a*b;
}

try {

    assert.equal(30, areaQuadrada(3, 10));
    assert.equal(84, areaQuadrada(42,2));

} catch(e) {
    console.log(e);
}
