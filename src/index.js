function multiplicacao (num1, num2) {
    const result = num1 * num2
    return result
}

function divisao (num1, num2) {
    if (num1 || num2 === 0) {
        throw new Error('Não existe divisão por 0!');
      }

    const result = num1/num2
    return result
}

module.exports = {multiplicacao, divisao}