const operacoes = {
    somar : (numeroA, numeroB) => numeroA + numeroB,
    subtrair : (numeroA, numeroB) => numeroA - numeroB,
    multiplicar : (numeroA, numeroB) => numeroA * numeroB,
    dividir : (numeroA, numeroB) => {
        return numeroB === 0 ? "Não é possível dividir por ZERO" : numeroA / numeroB;
    }
}

module.exports = operacoes