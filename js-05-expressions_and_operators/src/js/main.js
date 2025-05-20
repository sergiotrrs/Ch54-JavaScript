/*
 En JavaScript, una expresión es cualquier fragmento de código que 
 produce un valor. Puede ser tan simple como un número o una variable, 
 o más compleja, como una operación matemática o una llamada a función.

Ejemplos:

10          // Número (expresión literal)
x           // Variable (si x está definida)
5 + 3       // Expresión aritmética (devuelve 8)
true && false // Expresión lógica (devuelve false)
"Hola".length // Expresión con propiedad (devuelve 4)

*/


// ---------------- Opéradores aritméticos ----------------
/* 
   Los operadores aritméticos toman valores numéricos 
   (ya sean literales o variables) como sus operandos 
   y devuelven un solo valor numérico.

   adición +
   multiplicación *
   substracción -
   división /
   resto %
   exponencial **  - Math.pow(2, 3)   2**3
*/
// ---- Precedencia de operadores -------------------------
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let a2, b2, c2;
let a3;
let b3;
let c3;

let a4 = a5 = a6 = true // ESTO NUNCA SE HACE, AUQUE SEA CORRECTO NO TODOS SE DECLARAN CON LET a5 y a6 SE TERMINAN DE DECLARAR CON var 

console.log(  3 * 2 / 2  ); // resultado 3 ,se le da prioridad a la multiplicación y despues a la división 
console.log(  3 / 2 * 2  ); //  resultado 3
console.log(  2 * 4 / 2**3 ); // resulado 1
console.log(  3 ** 2 ** 3  ); // 6561 se resuelve de derecha a izquierda 

// ---------------- Opéradores relacionales ----------------
/*
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than
  
  Un operador de comparación compara sus operandos y devuelve un valor 
  Boolean basado en si la comparación es verdadera o no.

  <  menor que
  >  mayor que
  <= menor o igual que
  >= mayor o igual que

   - Valores booleanos true y false se convierten en 1 y 0 respectivamente.
   - null se convierte a 0.
   - undefined se convierte a NaN.
*/
console.log(  3 < 5 ); // true
console.log(  3 > 5 ); // false
console.log(  3 <= 3 ); // true
console.log(  3 >= 3 ); // true


              //0
console.log( null <= 0 ); // true 

              //NaN no es cero
console.log( undefined <= 0 ); // False porque cualquier cosa que hagas con un NaN es false

console.log(  "3" >= 3 ); // true porque se convierte en number
console.log(  "tree" >= 3 ); // false porque no es equivalente 


// ---------------- Operadores de igualdad ----------------
/*
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Equality

  Un operador de igualdad compara dos valores y devuelve un valor Boolean
  basado en si la comparación es verdadera o no.
  ==  igual que
  !=  diferente que
  === igual que y mismo tipo de dato
  !== diferente que y mismo tipo de dato

  - null y undefined NO son convertidos a cero

*/
console.log(  3 == 3 );  // 
console.log(  3 == "3" ); // true porque lo convierte en su equivalente
console.log(  3 === "3" ); // 
console.log(  3 !== "3" ); // true porque son diferente tipo de dato 
console.log(  3 != "3" );  // false 3 no es diferente de 3

// Si un operando es null y el otro undefined, devuelve verdadero(true).
console.log( null == undefined ); // true

// Si ambos son objetos, devuelve true solo si ambos operandos hacen 
// referencia al mismo objeto.
const obj1 = { name: "Juan" };
const obj2 = { name: "Juan" };
const obj3 = obj1;

console.log( obj1 == obj2 ); // 
console.log( obj1 == obj3 ); // 

//--- Si los operandos son de diferente tipos, intenta convertirlos al mismo tipo antes de comparar:-----
// Al comparar un número con una cadena, convierte la cadena en un valor numérico.
console.log(  3 == "3" ); // true


// Si uno de los operandos es booleano, convierte el operando booleano en 
// 1 si es verdadero y en 0 en el caso de falso.
console.log(  1 == true ); // true  porque true es 1
console.log(  0 == false ); // true porquer false es 0 

//--- Si los operandos tienen el mismo tipo, se comparan de la siguiente manera:-----
// String: devuelve verdadero solo si ambos operandos tienen los mismos caracteres y en el mismo orden.
console.log( "hola" == "hola" ); // true 
console.log( "hola" == "Hola" ); // flase 
console.log( 'Hola "Ch5x" ' == 'Hola "Ch5x" ' ); //true , tener en cuenta que los espacios tambien se consideran
console.log ( "Hola \"Ch54 \" " == `Hola "Ch54"`); //true \ es un caracter de escape, cuando se imprime no aparece 

/*
  Uso del caracter de escape:
  \n  nueva línea
  \t  tabulación
  \\  barra invertida
  \'  comilla simple
  \"  comilla doble
  \`  comilla invertida
  \b  retroceso
  \uXXX unicode  \u00A9 = ©
*/

// Se recomienda usar el método localCompare(): compara cadenas de texto de acuerdo con las reglas de un idioma específico
console.log("apple".localeCompare("banana")); // -1 
console.log("grape".localeCompare("grape"));  // 0 si son iguales son cero 
console.log("pear".localeCompare("orange"));  // 1
console.log("a".localeCompare("A", "en", { sensitivity: "base" })); // 0
                                              // configuración que hace que no importa si son mayusculas o minisculas que las compara por igual

// Number: devuelve verdadero solo si ambos operandos tienen el mismo valor. 
// +0 y -0 se tratan como el mismo valor. 
// Si alguno de los operandos es NaN, devuelve falso.
console.log(  +0 == -0 ); // true
console.log(  NaN == NaN ); // false 
console.log(  1 == 1 ); // true 
console.log(  1 == 1.0 ); // true
console.log(  1 == 1.1 ); // false

console.log(  isNaN("hola" / 3 )  ); // true 
              //funcion para saber si un valor es NaN

// ------- Operadores de asignación ----------------
/*
 Asigna un valor a su operador izquierdo basándose en el valor
 de su operando derecho:

 asignación =
 
 Operadores abreviados ( compuestos ):
  op1 += op2  -> op1 = op1 + op2
  op1 -= op2  -> op1 = op1 - op2
  op1 *= op2  -> op1 = op1 * op2

*/
let suma = 0;
// Agregar 2 al valor de suma
// suma = suma  + 2;
suma += 2;

// --------- ejercicio mental --------------------
let valorA = 15;
valorA *= 2; 


// --------- ejercicio mental --------------------
let mensaje = "Me voy a de vacaciones";
mensaje += 2; //me voy de vacaciones + 2
//imprime "Me voy de vacaciones2"

//---------- ejercicio mental con for -----------
// que imprime el console.log ? o no imprime?
for( let i=1; i <= 10; i+=2){
  console.log(i); 
}
// imprime 1,3,5,7,9


// -------------- Operadores unarios ------------------
// Solo actuan sobre un operando
// Negación unaria (cambia el signo en números)
let numero = 3;
let dinero = -numero; // 
console.log( numero, dinero); // 3, -3

// suma unaria (No cambia el signo el números) Si mi valor es negativo NO lo pasa a positivo
let pago = +dinero; // 
console.log( pago ); // -3 porque no cambia el signo este operador, solo ayuda a reforzar que un valor es positivo

let intereses = +"5.23"; // cuando sea un string este se convierte en su valor numerico
console.log( 5 + intereses ); // 10.23 
console.log( 5 + parseInt(intereses) ); // 10

let pagoFinal = 0;
console.log( pagoFinal += 5 + + "3" ); // 8
console.log( pagoFinal += 5 + parseFloat ("3") ); // 16
                //8     +  5     +     3   = 16
//pagoFinal = 0
//pagoFinal = 0 + 5 + 3 = 8
//pagoFinal = 8 + 5 + 3 = 16

// Operador de incremento y decremento en unidad.
/*
  Operador de pre-incremento y pre-decremento
    ++ valor 
    -- valor

  Operador de post-incremento y post-decremento
    valor ++
    valor --

*/

let number = 10;
++ number; // number = number + 1
console.log( number ); // 11
number ++; // number; number = number + 1; 
console.log( number ); // 12

// Uso de post-incremento
number = 20;
console.log( number ); // 20
console.log( number = number + 1 ); // 21
// valor++
number = 20;
console.log( number++ ); // 
console.log( number ); // 21 

// Uso de pre-incremento
number = 40;
console.log( number = number + 1 ); // 
console.log( number ); // 41

// ++valor
number = 40;
console.log( ++number ); // 41 
console.log( number ); // 41

number = 100;
let kati = 10;
console.log( kati + + number  ); // 110
console.log( kati + ++number  ); // 111

// ------------ Ejercicio Mental ---------------------
let x = 3;
let y = x++; // y:3   x:4

console.log(`x :${ x++ } y:${ ++y }`); // 4 , 4
                                       // 
console.log(`x :${ x } y:${ y }`); // 5 , 4

// ------------ Ejercicio Mental ---------------------

// let a = b = 0; b es declara con var
let a = 0, b = 0; // a y b son declaradas con let

for( ; a < 3 ; b = a++){ 
  console.log( a , b ); 
            // 0,   0
            // 1,   0
            // 2,   1
}
console.log( a , b ); // 3 , 2

// ------------ Ejercicio Mental ---------------------
a = 0, b = 0; // 

for(    ; a < 3 ; b = ++a){ // 
  console.log( a , b ); 
            // 0 , 0
            // 1 , 1
            // 2,  2
}
console.log( a , b ); // 3, 3








// ---------------- Operadores lógicos && y || ---------------
/*
 También son conocidos como operadores de corto circuito ( short-circuit operators ).

 OP1 && OP2 Si OP1 es verdadero, se retorna la expresión de OP2.
 OP1 || OP2 Si OP1 es verdadero, se retorna la expresión de OP1.

 Se consideran falsos: "", 0, null, undefined, NaN
*/
console.log( true && false ); // false 
console.log( true && "Usando corto circuito ");// 
console.log( "false" && "Mi mente sigue de vacaciones");// 
console.log( 0 && "Chau, chau"); // 
console.log( "" && "Chau, chau"); // 
console.log( false && "Chau, chau"); // 

console.log( true || false ); // true 
console.log( true || "Usando corto circuito "); // true
console.log( "false" || "Mi mente sigue de vacaciones"); // "false"
console.log( 0 || "Chau, chau"); //  "Chau, chau"
console.log( "" || "Chau, chau"); // "Chau, chau"
console.log( false || "Chau, chau"); // "Chau, chau"
console.log( false || undefined ); // undefine 

console.log( "Activado" && undefined ); // 

// ------------- casos prácticos -----------------------
// console.log(   variableSinDeclarar ); // La variable no ha sido declarada
console.log( true || variableSinDeclarar   ); 

// -----------------------------------------------------
let loggedIn = false;
loggedIn && console.log("Bienvenido Usuario"); // no se imprime

// ------------ ejercicio-------------------------------
// Mostrar en consola "Acceso permitido" solo si la variable esAdmin = true
let esAdmin = true;

esAdmin && console.log("accesso permitido");


// ------------------------------------------------------
let nombre = "";
let usuario = nombre || "Invitado";
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
//let usuario = nombre ?? "Invitado"; // funciona para null y undefined

console.log( "Hola " + usuario ); // Invitado

// ------------------ Ejercicio --------------------------
/*
  Imprimir en consola "Acceso Denegado" Si la variable esAutorizado = false
  En caso contrario imprimir "Acceso concedido".
*/
let esAutorizado = true;

esAutorizado || console.log("Es autorizado");
esAutorizado && console.log ("Acceso concedido ")


console.log( esAutorizado ? "Acceso Concedido" : "Acceso Denegado" );