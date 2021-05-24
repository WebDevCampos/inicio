

const soma = (a, b) => a + b


function sum(callback) {
  var a = 2
  let b = 6
  callback(a, b);
}


console.log(sum(soma))

function myFunction(x, y) {
if ((x % y) == 0 ){

  return x

}else{
  return (x % y) 
  
}
}

console.log(myFunction(1, 23))