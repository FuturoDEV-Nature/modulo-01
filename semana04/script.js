// let nome1 = "Rayane";

// function imprimeOi(mensagem="mmm", mensagem2, mensagem3="!"){

//     console.log(mensagem);
//     console.log(mensagem2);
//     console.log(mensagem3);
//     // return mensagem + mensagem2 + mensagem3;
// }

// // imprimeOi("oi", "mundo", "!");

// //exercicio slide 01 - pagina 16
// function convite(){
//     let nome = prompt('Digite seu nome: ');
//     document.write(`Olá ${nome}, te convido para o casamento de Maria e João!`)
// }
// convite();

// //função anômima
// // const soma = function(){

// // }

// soma();

// //linha que pega os dados do back
// function pegarDados(callback){
//      let idade = //service.getIdade();
//      callback(idade);
// }
// //fazer uma soma
// const soma = function(idade){
//     return idade +10;
// }

// pegarDados(function(idade){
//     return idade +10;
// });

// //arrow function
// const subtracao = ()=>{

// }

// subtracao();

// Estrutura de repetição - for

// for (i = 0; i < 5; i++) {
//   console.log("contador:" + i);
// }

//resposta slide 02 - pagina 06
// for (i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//       document.write(i + "<br>")
//     }
// }

// //for of
// const array = ['a', 'b', 'c'];
// for (var element of array) {
//   console.log("Elemento: ",element);
// }

//while
var contador = "2";
while (contador == "2") {
  console.log('contador:', contador);

  contador = prompt("você aceita a opção 1 ou 2?");
}

do{
  console.log('contador:', contador);
  contador = prompt("você aceita a opção 1 ou 2?");
}while(contador == "2");

let array = ["item","item 2","item 3","item 4"]

array.forEach((item)=>{

})