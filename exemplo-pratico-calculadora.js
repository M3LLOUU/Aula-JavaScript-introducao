function calculadora(a, b, operacao) {
    switch (operacao) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': 
            return b !== 0 ? a / b : "Erro: Divisão por zero!";
        default: return "Operação inválida!";
    }
}

// Exemplos de uso
console.log("Soma: ", calculadora(10, 5, '+'));
console.log("Subtração: ", calculadora(10, 5, '-'));
console.log("Multiplicação: ", calculadora(10, 5, '*'));
console.log("Divisão: ", calculadora(10, 5, '/'));
console.log("Divisão por zero: ", calculadora(10, 0, '/'));
console.log("Operação inválida: ", calculadora(10, 5, '%'));