console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/

// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/

saludar("Jen");

function saludar(nombre) {
  console.log("Qué te gustaría de regalo de cumpleaños " + nombre);
}

/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

const darRegalo = function (nombre, regalo) {
  console.log(`Felicidades ${nombre}, te traje ${regalo}`);
};

darRegalo("Jen", "Sopa Nisin con camarón");

/*
 Realizar una función declarada que sume dos números 
 y retorne el resultado.
 
 Realizar una función expresada que reste dos números 
 y retorne el resultado.
 
*/
function sumar(a, b) {
  return a + b;
}
const restar = function (a, b) {
  return a - b;
};

/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/

(function (data) {
  console.log("Configuración inicial de la aplicación");
  console.log(`Valor de data ${data}`);
})(18);
//setUp();

/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una sola instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

// Realizar una función declarada que calcule al área de un triángulo
// al función debe retornar el resultado.
// Área = (base * altura) / 2
console.log(`El área del triángulo es: ${area(5, 10)}`);

function area(a, b) {
  return (a * b) / 2;
}

// Realizar una función expresada que calcule el área de un triángulo
const calculaArea2 = function (base, altura) {
  return (base * altura) / 2;
};
console.log(`Resultado usando función expresada: ${calculaArea2(12, 20)}`);

// Realizar una función flecha que calcule el área de un triángulo
const calculaArea3 = (base, altura) => (base * altura) / 2;

console.log(`Resultado usando arrow function: ${calculaArea3(12, 20)}`);

// ¿Qué sucede si uso console.log como retorno?
const imprimirArea = (base, altura) => console.log(calculaArea3(base, altura));

console.log(imprimirArea(12, 20));

function imprimirEnConsole(mensaje) {
  console.log(mensaje);
}
console.log(imprimirEnConsole("Hola mundo")); // undefined

// Realizar una función flecha que calcule el área de un círculo
// Área = pi * radio^2
// Usar una función flecha para imprimir el resultado en un párrafo id="area-circulo"
const circleArea = (radio) => Math.PI * radio ** 2;
const imprimirAreaCirculo = (radio) =>
  document.getElementById("area-circulo").innerText = circleArea(radio);

imprimirAreaCirculo(5);
/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/
const saludarPersona = ( nombre="persona invitada" ) => console.log(`Hola ${nombre}, ya nos vamos a descansar`);

saludarPersona(); // Hola persona invitada, ya nos vamos a descansar
saludarPersona("Mich"); // Hola Mich, ya nos vamos a descansar

console.log( parseInt("5") ); // 5 (base 10: 0,1,2,3,4,5,6,7,8,9)
console.log( parseInt("1000") ); // 1000 (base 10)
console.log( parseInt("1000", 10) ); // 1000 (base 10)
console.log( parseInt("1000", 2) ); // 8 (base 10)
console.log( parseInt("D2042D") ); // NaN (base 10)
console.log( parseInt("D2042D", 16) ); // 13763629

/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

 const imprimirMensaje = ( fncCallBack ) => fncCallBack("Hola Ch54");
                                            // 18("Hola Ch54");
                                            // "patito"("Hola Ch54");
                                            // console.log("Hola Ch54");
                                            // undefined("Hola Ch54");
                                            // enviarAParrafo("Hola Ch54")

 // imprimirMensaje( 18 ); // fncCallBack is not a function
 // imprimirMensaje( "Patito" ); // fncCallBack is not a function
 imprimirMensaje( console.log ); // "Hola Ch54"
 // imprimirMensaje( console.log("Luis") ); //  fncCallBack is not a function
 // imprimirMensaje( undefined ); //  fncCallBack is not a function

 const enviarAParrafo = ( mensaje ) => {
    const saluda = "Hola, buen día";
    const referencia = document.getElementById("saludo-callback");
    referencia.innerHTML = `${saluda} ${mensaje}`;
 };

 imprimirMensaje( enviarAParrafo ); // El saludo es: Hola, buen día Hola Ch54
 
 // usando la función imprimirMensaje, enviar un callback para que
 // imprima con alert