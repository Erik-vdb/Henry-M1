'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

function BinarySearchTree(val) { 
  // Create the root of the tree with the given value and left & right entries
  this.value = val
  this.left = null
  this.right = null
  
  this.gSize = 1
}

BinarySearchTree.prototype.insert = function(val){
  let node = new BinarySearchTree(val)
  
  if (val <= this.value && this.left == null){
    this.left = node
    this.gSize++
    return node.value
  } else if (val > this.value && this.right == null){
    this.right = node
    this.gSize++
    return node.value
  } else if (val <= this.value && this.left !== null){
    return this.left.insert(val)
  } else if (val > this.value && this.right !== null){
    return this.right.insert(val)
  }
}


BinarySearchTree.prototype.contains = function(val){
  if (this.value === val) return true
  
  if (val <= this.value && !this.left){
    return this.left.contains(val)
  } else if (val > this.value && !this.right){
    return this.right.contains(val)
  }
  return false
}

BinarySearchTree.prototype.depthFirstForEach = function(){
}

BinarySearchTree.prototype.breadthFirstForEach = function(){
}

BinarySearchTree.prototype.size = function(){
  return this.gSize
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
