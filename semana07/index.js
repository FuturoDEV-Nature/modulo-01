// escopo global
let a = 2;

function soma(){
  // escopo local
  let b = 3;
  return a + b;
}

console.log(soma())

function soma(x) {
  // x = 5
  return function (y) {
    // x = 5 / y = 2
    return x + y;
  };
}

var add5 = soma(5);
console.log(add5(2))