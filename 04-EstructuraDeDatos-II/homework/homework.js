'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.
function Node(value){
  this.value = value
  this.next = null
}

function LinkedList() {
  this._length = 0
  this.head = null
}

LinkedList.prototype.add = function(x){
  if (!this.head){
    this.head = new Node(x)
    return this.head
  }

  while(this.head.next){
    this.head = this.head.next
  }

  this.head.next = new Node(x)
}


LinkedList.prototype.remove = function(){
  //Chequear que no sea una lista de uno o menos elementos
  if (!this.head){
    return null
  }
  if (!this.head.next){
    let removed = this.head.value
    this.head=null
    return removed
  }
  //
  
  //Ir al ultimo elemento
  while(this.head.next.next){
    this.head = this.head.next
  }


  //remover el elemento y retornarlo
  const removed = this.head.next.value
  this.head.next = null
  return removed
}

LinkedList.prototype.search = function(args){
  let current = this.head

  if (!current) return null

  while (current){
    if (current.value === args) return current.value
    else if (typeof args === "function"){
      if (args(current.value)) return current.value
    }
    current = current.next
  }
  return null
}


// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.buckets = []
  this.numBuckets = 35
}

HashTable.prototype.hash = function(key){
  let sum = 0

  for (let i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i) 
  }

  return sum % this.numBuckets
}

HashTable.prototype.set = function(key, value){
  let index = this.hash(key)

  if (typeof key !== 'string') throw new TypeError('Keys must be strings')
  if (!this.buckets[index]){
    this.buckets[index] = {}
  }
  this.buckets[index][key] = value
}

HashTable.prototype.get = function(key){
  let index = this.hash(key)
  return this.buckets[index][key]
}

HashTable.prototype.hasKey = function(key){
  let index = this.hash(key)
  return this.buckets[index].hasOwnProperty(key)
}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
