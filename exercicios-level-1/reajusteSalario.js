var assert = require('assert');


var reajuste = function (salario, percentual) {
    return salario*percentual;
}

try {

    assert.equal(150, reajuste(1000, 0.15));

} catch(e) {
    console.log(e);
}
