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
//Declaracion de la funcion
function saludar( nombre ){
  console.log("Que te gustaria de regalo de cumpleaños" + nombre );
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

const darRegalo = function ( nombre, regalo){
  console.log( `Felicidades ${nombre}, te traje ${regalo}`);
};

darRegalo("Jen", "Sopa Nissin con camaron")

/*
 Realizar una función declarada que sume dos números 
 y retorne el resultado.
 
 Realizar una función expresada que reste dos números 
 y retorne el resultado.
 
*/

function suma(a, b) {
  return a + b;
}

const resta = function(a, b) {
  return a - b;
};



/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/
(function setUp(){
  console.log("Configuración inicial de la aplicación");
})()
//setUp();


/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
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

console.log(`El área del triangulo es: ${area (5,10)}`);
function area (a,b){
  return (a * b) / 2; 
}
console.log(`Resultado usando función expresada:  ${calculaArea2(12, 20)}`);

// Realizar una función flecha que calcule el área de un triángulo
const calculaArea3 = ( base, altura) => base * altura / 2;

console.log(`Resultado usando arrow function: ${calculaArea2(12,20)}`)

// ¿Qué sucede si uso console.log como retorno? 
// Función que imprime directamente (no recomendado)
const imprimirArea = (base, altura) => console.log(calculaArea3(base, altura));

console.log(imprimirArea(12, 20));

function imprimirEnConsole(mensaje){
  console.log(mensaje);
}
console.log(imprimirEnConsole("Hola mundo")); //undefined

// Realizar una función flecha que calcule el área de un círculo
// Área = pi * radio^2
// Usar una función flecha para imprimir el resultado en un párrafo id="area-circulo"

const circleArea = (radio) => Math.PI * radio ** 2;
const imprimirAreaCirculo = (radio) =>
  document.getElementById("area-circulo").innerText = circleArea(radio);

imprimirAreaCirculo(5);

// Función flecha para mostrar el resultado en el párrafo
const mostrarAreaCirculo = (radio) => {
  const area = calcularAreaCirculo(radio);
  const elemento = document.getElementById('area-circulo');
  elemento.textContent = `El área del círculo con radio ${radio} es: ${area.toFixed(2)}`;
};

const saludarPersona= (nombre="persona invitada") => console.log(Hola$ {nombre}), ya nos vamos a descansar

saludarPersona();// Hola undefined, ya nos vamos a descansar 
saludarPersona("Mich"); // Hola Mich, ya nos vamos a descansar 

console.log( paseInt("5")); // % (base 10: 0,1,2,3,4,5,6,7,8,9)
console.log( paseInt ("1000")  ); // 1000 (base 10)
console.log( paseInt ("1000")  ); // 1000 (base 10)
console.log( paseInt ("1000")  ); // 8 (base 10)
console.log( paseInt ("D2042D")  ); // Nan (base10)
console.log( paseInt ("D2042D")  ); //13763629
// Ejemplo de uso
mostrarAreaCirculo(5); // Calcula y muestra el área para un radio de 5

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/





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
                                            //enviarAParrafo("Hola Ch54")
 // imprimirMensaje( 18 ); // fncCallBack is not a function
 // imprimirMensaje( "Patito" ); // fncCallBack is not a function
 imprimirMensaje( console.log ); // "Hola Ch54"
 // imprimirMensaje( console.log("Luis") ); //  fncCallBack is not a function
 // imprimirMensaje( undefined ); //  fncCallBack is not a function

 const enviarAParrafo = ( mensaje ) => {
  const saluda = "Hola buen día";
  const referencia = document.getElementById("saludo-callback");
referencia.innerHTML = ´${saluda} ${mensaje}´;
 };

 imprimirMensaje( enviarAParrafo) // El saludo es: Hola, buen día Hola Ch54

 //usando la funcion impirmirMensaje, enviar un callback para que
 //imprima con alert 

 //imprimirMensaje(alert);  Mostrará "Hola Ch54" en un alert

 /*Realizar una funcion que sume dos numeros y que imprima el resultado 
 -inicialmente se imprimira en la consola 
 -es porsible que se te pida imprimir en el dom 
 -es posible que se te pida imprimir en un alert */ 

 const sumarDosNumeros = ( a, b) => a  + b;
 const sumarEImprimir = ( a, b) => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
   imprimirArea(mensaje)
 
   
}
sumarEImprimir( 10, 14);

// Calcular el factorial de un número
// factorial de 5: 5 * 4 * 3 * 2 * 1;
function factorialConCicloFor( numero ) {
  let factorial = 1;
  for (let i=0; i < numero; i++) {
    factorial *= (numero - i); // factorial = factorial * (numero - i);
    console.log(`i: ${i}, factorial: ${factorial}, numero: ${numero - i}` );
  }
  return factorial;
}
console.log(`El factorial de 5 es: ${factorialConCicloFor(5)}`); // 120
// calculando el factorial con recursividad

function factorialConRecursividad( numero ){
  console.log(`Resolviendo el factorial de ${numero}`);
  if( numero <= 1  ) return 1 ;    
  const result = factorialConRecursividad( numero - 1 ) * numero ;
  console.log(`El factorial de ${numero} es ${result}`);
  return result;
}
console.log(`Resultado final: ${ factorialConRecursividad(5)}`); // 12


/*
    parámetro   recursividad(n-1)   returnFnc
     5              5-1 = 4            120
     4              4-1 = 3            24
     3              3-1 = 2            6       
     2              2-1 = 1            2         
     1               ----              1
  
/*
Generar una función recursiva que muestre en consola un saludo donde se indique el numero saludo deseado.

aj: saludar 10 veces*/

function saludarRecursivo(veces) {
  if (veces <= 0) return; // Caso base: detener la recursión
  
  console.log(`¡Hola! (Saludo ${veces})`);
  saludarRecursivo(veces - 1); // Llamada recursiva
}

// Ejemplo de uso:
saludarRecursivo(10);