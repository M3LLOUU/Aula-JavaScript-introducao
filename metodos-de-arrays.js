let frutas = ["Maçã", "Banana"];

// Adicionar
frutas.push("Laranja"); // Adiciona no final
frutas.unshift("Morango"); // Adiciona no início

// Remover
frutas.pop(); // Remove do final
frutas.shift(); // Remove do início

// Informações
console.log("Tamanho:", frutas.length);
console.log("Posição da banana:", frutas.indexOf("banana"));