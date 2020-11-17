function subtracao(n1, n2) {
    return n1 - n2;
}

function adicao(n1, n2) {
    return n1 + n2;
}

function multiplicacao(n1, n2) {
    return n1 * n2;
}

function divisao(n1, n2) {
    if (n2 == 0){
        return "invalido"
    }
    return n1 / n2;
}

module.exports = {
    sub: subtracao,
    add: adicao,
    mult: multiplicacao,
    div: divisao
};