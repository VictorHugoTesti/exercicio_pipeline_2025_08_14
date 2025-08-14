const {multiplicacao} = require("../src/index")
const {divisao} = require("../src/index")

test('Divisão por 0', () => {
    expect(() => divisao(100, 0)).toThrow('Não existe divisão por 0!')
})

test('Multiplicação funcionando corretamente', () => {
    expect(multiplicacao(2, 5)).toBe(10)
})