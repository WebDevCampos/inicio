function soma(a, b) {
  console.log( a + b);
}

function sum(callback) {
  var a = 2
  let b = 6
  callback(a, b);
}


sum(soma)



