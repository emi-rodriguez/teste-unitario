var assert = require('assert');


var soma = function (a, b) {
    return a+b;
}

var subtracao = function (a, b) {
    return a-b;
}

var multiplicacao = function (a, b) {
    return a*b;
}

var divisao = function (a, b) {
    return a/b;
}

try {

    //check sum
    assert.equal(16, soma(12, 4));

    //check subtraction
    assert.equal(8, subtracao(12, 4));

    //check multiplication
    assert.equal(48, multiplicacao(12, 4));

    //check division
    assert.equal(3, divisao(12, 4));

} catch(e) {
    console.log(e);
}
