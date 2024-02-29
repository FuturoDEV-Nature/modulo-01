const aluno = {
  nome: "Bruno",
  email: "email@email.com",
  turma: "Nature"
}

// const aluno2 = {...aluno, nome: "Conrado"}

// aluno.nome = "Conrado"
// console.log(aluno.nome)

const aluno2 = {...aluno}

aluno2.nome = "Conrado"
console.log(aluno)
console.log(aluno2)
const frutas = ["Maça", "Laranja", "Abacaxi"]

const frutas2 = [...frutas]
const frutas3 = [...frutas, ...frutas2]
frutas.push("Acerola")

console.log(frutas)
console.log(frutas2)
console.log(frutas3)