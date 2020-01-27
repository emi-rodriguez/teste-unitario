var assert = require('assert');


var diasNoMes = function (a) {
    return a*30;
}

try {

    assert.equal(210, diasNoMes(7));

} catch(e) {
    console.log(e);
}
