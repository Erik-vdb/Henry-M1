"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array
  
    let pivot = Math.floor(Math.random() * array.length)
    let left = new Array;
    let right = new Array;

    for (let i = 0; i < array.length; i++) {
      if (i !== pivot) {
        if (array[i] < array[pivot]) {
          left[left.length] = array[i];
        } else {
          right[right.length] = array[i];
        }
      }
    }
    console.log('left = [' + left+'] | pivot = ' + array[pivot] + ' | right = [' + right + ']')
    return [].concat(quickSort(left), array[pivot], quickSort(right))
}



function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1) return array
  

  let half = Math.ceil(array.length/2)
  if (array.length <= 1) return array

  let arrLeft = array.slice(0, half)
  let arrRight = array.slice(half)
  return merge(mergeSort(arrLeft), mergeSort(arrRight))
}

function merge(left, right){
  let res = []
  while(left.length && right.length){
    if (left[0] <= right[0]){
      res.push(left.shift())
    } else res.push(right.shift())
  }

  while (left.length) res.push(left.shift())
  while (right.length) res.push(right.shift())
  return res
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
