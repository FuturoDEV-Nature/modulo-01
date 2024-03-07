class Pessoa { // superclasse ou classe mãe
  nome;
  dataNascimento;
  cidadeAtual;

  constructor(nome, dataNascimento, cidadeAtual){
    this.nome = nome
    this.dataNascimento = dataNascimento
    this.cidadeAtual = cidadeAtual
  }
}

// a relação de herança é do tipo *é um*
class Aluno extends Pessoa { // subclasse ou classe filha
  curso;
  turma;

  constructor (
    nome, 
    dataNascimento, 
    cidadeAtual,
    turma,
    curso = 'Futuro Dev', 
    ){

    super(nome, dataNascimento, cidadeAtual)
    this.curso = curso
    this.turma = turma
  }

  descrever(){
    console.log(`O aluno ${this.nome} nasceu em ${this.dataNascimento}`)
  }
}

class Funcionario extends Pessoa {
  cargaHoraria;
  salario;
}

class Professor extends Funcionario {
  curso;
  turma;
}

class Diretor extends Funcionario {
}

let professor = new Professor()

let aluno = 
new Aluno(
  "Bruno", 
  "1999-01-25",
  "Iguatu",
  "Futuro Dev", 
  "Nature"
)
aluno.descrever()