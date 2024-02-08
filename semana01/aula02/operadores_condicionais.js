// simples
// if(!(10 < 5)){
//   console.log("Bloco verdade")
// }

// composta
// if(2 < 1){
//   console.log("Bloco verdade")
// } else {
//   console.log("Bloco senão")
// }

// concatenada
// let turno = 'noite'

// if(turno == 'dia'){
//   console.log("Bom dia")
// } else if(turno == 'tarde') {
//   console.log("Boa tarde")
// } else {
//   console.log("Boa noite")
// }

// operador ternário
// let resultado = 11 % 2 == 0 ? "PAR" : "ÍMPAR"
// console.log(resultado)

// operador de escolha
let turno = 'noite'

switch(turno){
  case 'dia':
    console.log("Bom dia")
    break;
  case 'tarde':
    console.log("Boa tarde")
    break;
  case 'noite':
    console.log("boa noite")
    break;
  default:
    console.log("Não consegui encontrar um resultado!")
    break;
}