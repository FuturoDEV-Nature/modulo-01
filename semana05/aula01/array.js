// variáveis simples
// let numero = 15;

let arrayNomes = ["Bruno", "Josue", "Narciso", "Maria", "Diego", "Geovanna"]
// arrayNomes.push('Maria')
// arrayNomes.unshift('Maria')
// arrayNomes.splice(1, 2, "Raphael", "Anderson")
// let novoArray = arrayNomes.slice(1, 3)
// console.log(novoArray)
console.log(arrayNomes.join(" "))
// arrayNomes.pop()
// arrayNomes.shift()
// console.log(arrayNomes)


// let nota1 = 5
// let nota2 = 5
// let nota3 = 7
// let nota4 = 7
const notas = [5, 5, 7, 7]
let media = 0
let soma = 0

for(let contador = 0; contador < notas.length; contador++){
  soma = soma + notas[contador]
}

media = soma / notas.length;

if(media >= 7){
  console.log("ALUNO APROVADO!")
} else {
  console.log("ALUNO REPROVADO!")
}