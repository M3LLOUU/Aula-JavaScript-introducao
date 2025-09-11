let frutas = ["maçã", "banana", "laranja"];

//for...of (mais legivel)
for (let fruta of frutas) {
    console.log("Fruta:", fruta);
}

// ForEach (funcional)
frutas.forEach(fruta => {
    console.log("Fruta:", fruta);
});

//for (tradicional)
for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta:", frutas[i]);
}