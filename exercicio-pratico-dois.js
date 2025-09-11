/* Portugol 
   inteiro idade = 20
   
    se (idade < 13) {
        escreva("Criança")
    }senao se (idade < 18) {
        escreva("Adolescente")
    }senao se (idade > 18) {
        escreva("Adulto")
    } senao {
        escreva("Idoso")
    }     
*/

//JavaScript
let idade = 20;

if (idade < 13) {
    console.log("Criança");
} else if (idade < 18){
    console.log("Adolescente");
} else if (idade > 18){
    console.log("Adulto");
} else {
    console.log("Idoso");
}