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
  console.log(`Que te gustaria de regalo de cumpleaños ${nombre}`);

}
/*
 Realizar una función declarada que sume dos números 
 y retorne el resultado.
 
 Realizar una función expresada que reste dos números 
 y retorne el resultado.
 
*/

function sumar(sum1, sum2) {
  let resultado;
  resultado = sum1 + sum2;
  return resultado;
}
console.log("4 + 10 = " + sumar(4, 10));



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

darRegalo("Jen", "Sopa maruchan de camarón con habanero");


const resta = function (num1, num2) {
  console.log(num1 - num2);

};

resta(2, 3);

/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/

(function setUp() {
  console.log("configuración inicial de la aplicación")
})();
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







/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/

const calculoAreaCirculo = (radio) => Math.PI * radio ^ 2;
const imprimirAreaCirculo = (radio) => document.getElementById("area-circulo").innerText = calculoAreaCirculo(radio);
imprimirAreaCirculo(5);




/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

// Realizar una función declarada que calcule al área de un triángulo, la función debe retornar el resultado.
console.log(`Area de triangulo =  ${areaDeTriagulo(4, 10)}`);
function areaDeTriagulo(base, altura) {
  let resultado;
  resultado = base * altura / 2;
  return resultado;
}

//realizar una funcion expresada que calcule el área de un triangulo 
const areaTriagulo = function (base, altura) {
  console.log(base * altura / 2 );

};
areaTriagulo(4, 10);

//realizar una funcion flecha que calcule el área de un triangulo
const calculoAreaTriangulo = (base, altura) => base * altura / 2;
console.log(`resultado usando arrow function: ${calculoAreaTriangulo(4, 10)}`);


const sumarDosNumeros = ( a, b) => a  + b;
const sumarEImprimir = ( a, b) => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
   // imprimir en consola
   // console.log(mensaje);
   document.getElementById("resultado-sumatoria").innerText = mensaje;
}
sumarEImprimir( 10, 14);



const sumarEImprimir = ( a, b , opcion = "consola") => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
    //imprimir en consola
   if( opcion === "consola") console.log(mensaje);
   else if (opcion === "parrafo") document.getElementById("resultado-sumatoria").innerText = mensaje;
   else if (opcion === "h2")document.getElementById("resultadoH2-sumatoria").innerText = mensaje;
   else alert(mensaje)
}

sumarEImprimir( 50, 14);
