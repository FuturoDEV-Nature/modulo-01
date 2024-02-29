const numeros = [10, 5, 2, 3, 10, 45]

// realize a soma dos números acima
const resultado = numeros
.reduce((soma, numeroAtual) => {
  return soma + numeroAtual
}, 0)

console.log(resultado)