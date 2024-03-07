class ContaBancaria {
  // atributo privado
  _saldo;
  /**
   * os atributos privados só devem ser acessados de
   * dentro da minha classe.
   * 
   * o _ antes do nome é uma convenção entre os programadores
   * javascript.
   */
  nomeTitular;
  agencia;
  conta;
  banco;

  constructor(nomeTitular, agencia, conta, banco = 'Bradesco'){
    this._saldo = 0;
    this.nomeTitular = nomeTitular
    this.agencia = agencia
    this.conta = conta
    this.banco = banco
  }

  // get nomeTitular(){
  //   return this._nomeTitular
  // }

  // set nomeTitular(novoNome){
  //   this._nomeTitular = novoNome
  // }

  depositar(valor){
    // this.saldo = this.saldo + valor
    this._saldo += valor
  }

  sacar(valor){
    if(valor > this._saldo){
      console.log("Saldo insuficiente!")
      return
    }

    // this.saldo = this.saldo - valor
    this._saldo -= valor
  }

  transferir(){

  }

  exibirSaldo(){
    console.log(`A conta do(a) titular ${this.nomeTitular} possui R$ ${this._saldo} em saldo.`)
  }
}

class ContaPoupanca extends ContaBancaria {
  tipo = 'Poupança';
  taxa = 1;
  descontoEmprestimo;
  rendimento;

  constructor(
    nomeTitular,
    agencia,
    conta,
    descontoEmprestimo, 
    rendimento,
    banco,
    )
  {
    super(nomeTitular, agencia, conta, banco)
    this.descontoEmprestimo = descontoEmprestimo
    this.rendimento = rendimento
  }
}

class ContaCorrente extends ContaBancaria {
  tipo = 'Corrente';
  taxa = 2;
}

let contaP = new ContaPoupanca("Bruno", 1234, 123456, 10, 2)
contaP.exibirSaldo()
console.log(contaP)
