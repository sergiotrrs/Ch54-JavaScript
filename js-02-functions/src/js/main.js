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
  console.log("Que te gustaria de regalo de cumpleaños " + nombre);
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

const darRegalo = function (nombre, regalo){
  console.log(` Felicidades ${nombre}, te traje ${regalo}`);
}
darRegalo ("Jen", "sopa Maruchan de camarón")

/*
 Realizar una función declarada que sume dos números 
 y retorne el resultado. */
 
 sumatoria("10","15")

 function sumatoria(numero1, numero2){
  const num1 = Number(numero1);
  const num2 = Number(numero2)

  const suma= num1 + num2;


  console.log(`La suma es ${suma}`);
 }


 /*Realizar una función expresada que reste dos números 
 y retorne el resultado.
 
*/

const expresada = function(minuendo, sustraendo){

const opcion1 = Number(minuendo);
const opcion2 = Number(sustraendo);

const resta= opcion1-opcion2;

console.log(`La resta es ${resta}`);

}

expresada(20,12)


/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/

(function() {
  console.log("Configuración de la aplicación");
})(); 

(function( Data) {
  console.log("Configuración de la aplicación");
  console.log(``)
})(); 
/* los parentesis  autoinvocan a la misma función, solo se puede usa un vez este tipo de función*/
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


Son similares a las funciones expresadas pero no requieren la palabra reservada "function".
Si tienen una sola instrucción, no necesitan llaves.
Si la única instrucción es el retorno, no se requiere la palabra "return".
La sintaxis básica es: (parámetros) => expresión
Si hay más de una instrucción, se deben usar llaves y la palabra "return".
Con un solo parámetro, se pueden omitir los paréntesis.
Con ningún parámetro o más de dos, se necesitan los paréntesis.
*/

<button onclick="(function inicializacion(){
        console.log('Hola desde el botón');
        console.log('Alguien cumple años hoy?')
      })()">Click me</button>

// Realizar una función declarada que calcule al área de un triángulo
// al función debe retornar el resultado.

console.log(`El area del triungulo es: ${base_triangulo(15,10)}`)

function base_triangulo(base, altura) {
  return (base * altura) / 2;
}
 
const calculaArea2 = function (base, altura) {
  return (base*altura)/2;
}
console.log(calculaArea2(12, 20));

// realizar una funcion de flecha 
 
const calcularArea3 = (base, altura) => base * altura / 2;

console.log(`Resultado usando arrow funtion: ${calcularArea3(12,20)}`)

// ¿Qué sucede si uso console.log como retorno?


function imprimirEnConsole (mensaje) {
  console.log(mensaje);
}
console.log(imprimirEnConsole("Hola Mundo")); // imprime undefine

// Realizar la funcion flecha que calcule el área de un circulo
// Area = pi * radio2
// Usar una función flecha para imprimir el resultado en un párrafo id="area-circulo"

const pi = 3.1416
const areaCirculo = (radio) => (radio * radio) * pi; // cuando se tiene un solo parametro como en este caso en radio SE OMITEN PARENTESIS
console.log(`El área de el circulo es: ${areaCirculo(9)}`)

const imprimirAreaCirculo = (radio) =>
  document.getElementById("area-circulo").innerText = areaCirculo(radio);
imprimirAreaCirculo(5);




/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/

const saludar = (nombre) => console.log(`Hola ${nombre}, ya nos vamos a descansar`);

saludar(); // Hola undefined, ya nos vamos a descansar

const saludar = (nombre="persona invitada") => console.log(`Hola ${nombre}, ya nos vamos a descansar`);

saludar(); // se le puede agregegar un argumento predefinido

const saludar = (nombre="persona invitada") => console.log(`Hola ${nombre}, ya nos vamos a descansar`);

saludar("Yessi"); // aunque este el argumento predefinido como se establece el parametro lo respeta y se imprime

console.log( parseInt("5")); // 5
console.log( parseInt("1000")); //1000 (base 10)
console.log( parseInt("1000" , 10)); //1000 (/base 10)
console.log( parseInt("1000" , 2)); //8 (base 10)

//  La función parseInt(string, radix) convierte una cadena de texto en un número entero, y opcionalmente puedes indicar la base numérica (llamada radix).





/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

const imprimirMensaje = (fnCallBack) => fnCallBack("Hola Ch54")
                                          //18("Hola Ch54")
                                          //Patito("Hola Ch54")
                                          //console.log("Hola Ch54")
                                          // undefine("Hola Ch54")


//imprimirMensaje( 18 ); //fnCallBack is not a function
//imprimirMensaje( "Patito" );//fnCallBack is not a function
imprimirMensaje( console.log); // Hola Ch54 ESTE SI ES CORRECTO

//imprimirMensaje( console.log ("LUIS")); // //"LUIS"
//imprimirMensaje( undefined); ////fnCallBack is not a function



const enviarParafo = (mensaje) => {
  const saluda = "Hola buen día";
  const referencia = document.getElementById("Saludo-callBack");
  referencia.innerHTML = `${saluda} ${mensaje}`;

};
imprimirMensaje( enviarParafo) //Hola buen día Hola Ch54

 // usando la función imprimirMensaje, enviar un callback para que
 // imprima con alert

 imprimirMensaje (alert)

 /*
  Realizar una función que sume dos numeros y que imprima
  el resultado.
   - inicialmente se imprimirá en la consola
   - es posible que se te pida imprimir en el dom
   - es posible que se te pida imprimir en un alert
*/

/*const sumarDosNumeros = ( a, b) => a  + b;
const sumarEImprimir = ( a, b , opcion = "consola") => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
   imprimir(mensaje)
    //imprimir en consola
   if( opcion === "consola") console.log(mensaje);
   else if (opcion === "parrafo") document.getElementById("resultado-sumatoria").innerText = mensaje;
   else if (opcion === "h2")document.getElementById("resultadoH2-sumatoria").innerText = mensaje;
   else alert(mensaje)
}
sumarEImprimir (10, 14, console.log) //se imprime en consola
//sumarEImprimir(50, 50 "parrafo") // se imprime en parrafo */


const sumarDosNumeros = ( a, b) => a  + b;

const sumarEImprimir = ( a, b , opcion = "consola") => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
   imprimir(mensaje)
    //imprimir en consola
   
}
sumarEImprimir (10, 14, console.log) //se imprime en consola
//sumarEImprimir(50, 50 "parrafo") // se imprime en parrafo

const sumarEImprimir = ( a, b , imprimir = console.log) => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
   imprimir(mensaje)
}
sumarEImprimir( 10, 14); // se imprimr en consola 
const imprimirEnDOMParagraph = (mensaje) =>{
  const refParagraph = document.getElementById("resultado-sumatoria");
  refParagraph.innerText = mensaje;
}
const imprimirEnDOMH2 = (mensaje) =>{
  const refParagraph = document.getElementById("resultadoH2-sumatoria");
  refParagraph.innerText = mensaje;
}
sumarEImprimir( 10, 14, imprimirEnDOMParagraph); // se imprime en paragraph
sumarEImprimir( 10, 14, imprimirEnDOMH2); // se imprime en h2

//imprmir en alert 
sumarEImprimir( 10, 14, alert);

//imprimir el el DOM


// calculando el factorial con recursividad

function factorialConRecursividad( numero ){
    console.log(`Resolviendo el factorial de ${numero}`);
    if( numero <= 1  ) return 1 ;    
    const result = factorialConRecursividad( numero - 1 ) * numero ;
    console.log(`El factorial de ${numero} es ${result}`);
    return result;
}
console.log(`Resultado final: ${ factorialConRecursividad(5)}`); // 120

/*
    parámetro   recursividad(n-1)   returnFnc
    5              5-1 = 4             120
    4              4-1 = 3             24
    3              3-1 = 2             6
    2              2-1 = 1             2
    1               ----               1
                              
*/
/*
 Generar una función recursiva que muestre en consola un saludo
 donde se indique el número saludo deseado.
  ej: saludar 10 veces
  Saludo 1
  Saludo 2
  Saludo 3
  Saludo 4
  Saludo 5
  Saludo 6
   ....
  Saludo 10
*/

function saludito (numeroSaludo){
  let contador = 1
  console.log(`Hola ${numeroSaludo}`);
  if (contador < numeroSaludo ) {
    saludito()
  }
}