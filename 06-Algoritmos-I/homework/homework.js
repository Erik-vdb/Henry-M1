'use strict'
// No cambies los nombres de las funciones.
function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [1, ]
  let div = 2

  while(num !== 1){
    if(num%div===0){
      arr.push(div)
      num = num / div
    } else div++
  }
  return arr
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length; i++){
    for(let x = 0; x < ( array.length - i -1 ); x++){
      if(array[x] > array[x+1]){
        let temp = array[x]
        array[x] = array[x + 1]
        array[x + 1] = temp
      }
    }
  }
  return array
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let aux = array[i];
    for (let x = 0; x < i; x++) {
      if (aux<array[x]){
        aux = array[x]
        array[x] = array[i]
        array[i] = aux
      }
    }
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    let min = array[i]
    let curr = i

    for (let x = i+1; x < array.length; x++) {
      if (min > array[x]){
        min = array[x]
        curr = x
      }
    }
      if (curr !== i){
        array[curr] = array[i]
        array[i] = min
      }
    }
    return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

