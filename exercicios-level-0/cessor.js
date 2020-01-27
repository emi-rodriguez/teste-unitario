var assert = require('assert');


var antecessor = function (a) {
    return a-1;
}

var sucessor = function(a) {
    return a+1;
}

try {

    assert.equal(9, antecessor(10));
    assert.equal(3, antecessor(4));

    assert.equal(11, sucessor(10));
    assert.equal(5, sucessor(4));

} catch(e) {
    console.log(e);
}
