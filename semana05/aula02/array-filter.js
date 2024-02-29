// const numeros = [10, 2, 3, 5]

// const copia = numeros.filter(numeroAtual => {
//   if(numeroAtual >= 5){
//     return true
//   }
// })

// console.log(copia)

const nomes = ['Leiliane', 'Edson', 'Geovanna', 'Douglas']

// filtre somente os nomes que tem a letra E
const copia = nomes.filter(nome => {
  if(nome.toLowerCase().includes('e')){
    return true
  }
})

console.log(copia)