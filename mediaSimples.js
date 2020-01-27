var assert = require('assert');


var media = function (a, b, c) {
    return (a+b+c)/3;
}

try {

    assert.equal(20, media(10, 20, 30));    
    assert.equal(23, media(46, 18, 5));


} catch(e) {
    console.log(e);
}
