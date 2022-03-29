 'use strict'

function BinarioADecimal(num) { 
  // tu codigo aca
  /*
  Translate binary to Array (.split)
  Use ForLoop to calculate every number
  Sum the results
  */
  
  let binary = num.split("").reverse() //Separate individual numbers and reverse them
  var decimal = 0 // dump sum target
  
  for (let x = 0; x < binary.length; x++) {
    decimal += binary[x] * Math.pow(2, x)
    dump.unshift(calc)
  }

  return decimal
}

function DecimalABinario(num) { 
  // tu codigo aca
  var arr = []
  while (num > 0) {
  arr.unshift(Math.ceil(num % 2))
  num = Math.floor(num / 2)
 }
 return arr.join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}