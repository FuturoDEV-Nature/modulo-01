/* Desenvolva um programa em Javascript com duas variáveis: 
uma que armazene o limite de velocidade em km/h
outra que armazene a velocidade do automóvel registrada pelo sensor
Caso a velocidade esteja acima do permitido exiba a seguinte mensagem: “Velocidade acima do permitido. O condutor poderá ser multado!” */
const prompt = require("prompt-sync")();
let velocidade = prompt("Digite a velocidade: ")
const limite = 60

// condicao
if(velocidade > limite){
  // resultado
  console.log("Velocidade acima do permitido. O condutor poderá ser multado!")
} else {
  // resultado
  console.log("Condutor dentro da velocidade permitida!")
}