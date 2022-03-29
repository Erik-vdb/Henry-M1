# Scope & Hoisting

1)
```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a(8), b(9), c(10)) {
  var x = 10;
  console.log(x);
  console.log(a);

  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }

  f(a,b,c);
  console.log(b);
}

c(8,9,10);
console.log(b);
console.log(x);
```

### Output
10
8
8
9
10
1


2)
```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```
## Output
undefined/error
undefined/error
'Hola!'

3)
```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
```
## Output
"Franco"

4)
```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);
```
## Output
"Tony"
"Franco"
"Tony"

5)
```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);
```
## Output
"The Flash"
"Reverse Flash"
"The Flash"
"Franco"



# Coercion De Datos

6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = undefined
{}[0] = [0]
parseInt("09") = 9
5 && 2 = 2
2 && 5 = 5
5 || 0 = 5
0 || 5 = 0
[3]+[3]-[10] = 23
3>2>1 = false
[] == ![] = true

# Hoisting

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```
## Respuesta
undefined
2

Debido a que la variante a esta definida despues del console log, a no esta definida para cuando es llamada a la consola. Pero por el proceso de Hoisting, foo() ya estaba guardada en memoria y pudo ejecutarse sin problema.

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
```
## Respuesta
'Meow Mix' retorna como resultado del "false" ifStatement.


# This

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```
## Respuesta
Aurelio De Rosa (porque prop llama a getFullName)
Juan Perez (porque var "test" toma las propiedades de la funcion "getFullName" y se ejecuta en el entorno global)

# Event Loop
```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
## Respuesta
1 El primer log es ejecutado
-> 2 El segundo log es enviado al WebAPI con un delay de 1s
-> 3 El tercer log es enviado al WebAPI con un delay de 0s
4 El cuarto log es ejecutado
<- El tercer log entra a la cola inmediatamente
3
<- 2 El segundo log entra a la cola tras 1s
2 El segundo log es ejecutado