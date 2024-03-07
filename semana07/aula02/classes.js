class Carro {
  // atributos ou propriedades
  modelo;
  marca;
  cor;

  constructor(modelo, marca, cor = "Branca"){
    this.modelo = modelo
    this.marca = marca
    this.cor = cor
  }

  // métodos / ações
  acelerar(){
    console.log("O carro está acelerando!")
  }

  alterarCor(novaCor){
    this.cor = novaCor
  }

  descreverCarro(){
    console.log(this)
  }
}

// instância
let carro = new Carro("Fiat", "Uno", "Prata");
carro.acelerar()
// carro.alterarCor("Amarelo")
carro.descreverCarro()
