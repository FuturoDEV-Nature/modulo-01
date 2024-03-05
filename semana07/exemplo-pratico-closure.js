{/* <input id="numero" /> */}

function ModuloMatematico(){
  let total = 0;

  function SomaUm(){
    // let numero = document.getElementById("numero")
    // total = total + numero.value
    total = total + 1
    console.log(total)
  }
  
  function SubtraiUm(){
    total = total - 1
    console.log(total)
  }

  return {
    somaUm: SomaUm,
    subtraiUm: SubtraiUm
  }
}

let modulo = ModuloMatematico()

modulo.somaUm()
modulo.somaUm()
modulo.somaUm()
modulo.subtraiUm()
modulo.subtraiUm()
modulo.subtraiUm()



console.log("Olá alunos")
console.log(5)
console.log(true)