var assert = require('assert');


var custoFinal = function (custoFabrica, distribuidor, impostos) {
    return custoFabrica+(distribuidor*custoFabrica)+(impostos*custoFabrica);
}

try {

    assert.equal(17300, custoFinal(10000, 0.28, 0.45));

} catch(e) {
    console.log(e);
}
