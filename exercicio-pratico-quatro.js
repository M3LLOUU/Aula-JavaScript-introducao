let numeros = [45, 12, 78, 23, 67, 89, 34];
let maior = numeros[0];

for (let numero of numeros) {
    if (numero > maior) {
        maior = numero;
    }
}

console.log("Números:", numeros);
console.log("Maior número:", maior);