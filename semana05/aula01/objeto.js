// const numero = 10
// numero = 15

const usuario = {
  nome: "Bruno",
  senha: "1234",
  email: "bruno@email.com",
  setor: 1,
  cep: "63505020",
  dataNascimento: new Date(Date.parse("1999-01-25"))
}

usuario.nome = "Breno"
usuario.telefone = "(88) 99999-9999"

console.log(usuario.dataNascimento.toISOString())