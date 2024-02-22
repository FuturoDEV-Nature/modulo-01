const numeros = [10, 2, 3, 5]

// numeros.map((numeroAtual) => {
//   console.log("O número atual é ", numeroAtual)
// })

// uma copia do dobro de cada número
// const copia = numeros.map((numeroAtual) => {
//   return numeroAtual * 2
// })

// retorno implícito
const copia = numeros.map((numeroAtual) => numeroAtual * 2)

console.log(copia)
console.log(numeros)