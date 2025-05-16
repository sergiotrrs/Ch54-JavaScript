/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/
/* Crear un arrow function que reciba el valor de edad
 si la edad es mayor a 18 que la función te retorne "Eres mayor de edad"
 
 En caso contrario, retrornar el mensaja "Eres menor de edad"
 Realiza la versión de if-else sin usar bloque de código*/
 
 let edad = prompt("¿Cuantos años tienes?");
 edad = Number(edad);
    if (edad >= 18)
        console.log("Eres mayor de edad");
    else
    console.log("Eres menor de edad, sorry!");

/* 
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18 y menos de 30, la función debe
 retornar el mensaje "Tu luchador es Mistico".
 
 Si es mayor a igual a 31 el mesaje es "tu luchador es el Perro Aguayo"
 Si es menor a 18 el mensaje "tu luchador es Penta"


*/

const luchador = edad2 => {
    if (edad2 < 18) {
        return "Tu luchador es Penta"; 
    }
    else if (edad2 >= 18 && edad2<= 30) {
        return "Tu luchador es Mistico";
    }
    else {
        return "Tu luchador es Perro Aguayo";
    }
}

console.log(luchador(35));

// Bloque de codigo

// las variables no pueden salir fuera de este bloque de código

{
    let myVarLet = 30;
    const myVarConst = 40;
    var myVarVar = 50;
    console.log(myVarLet, myVarConst, myVarVar) //30, 40, 50
    {
        let myVarLet = 100;
        const myVarConst = 110;
        var myVarVar = 120;
        console.log(myVarLet, myVarConst, myVarVar) //100, 110, 120
    }
    console.log(myVarLet, myVarConst, myVarVar) //30, 40, 120
} // en este caso var es 120 porque si tiene block scope, su valor puede escapar de este bloque de codigo y se puede volver a llamar 

// ejercicios mentales
// Ejercicios mentales
let active = false
if( active === true ); {
  console.log("Está activo")
}
console.log("Fin del programa");
// --------------Ejercicio 2-----------------
active = false;
if( active )
  console.log("Está activo");
  console.log("Tiene autorización");
console.log("Fin del programa");
// --------------Ejercicio 3-----------------
active = false;
if( active ); console.log("Está activo");
//else console.log("No está activo"); // Unexpected token 'else'
// console.log("Fin del programa");




//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/

//Ejercicio 
const evaluarNombre = ( nombre ) => {
    let resultado;
    switch (nombre){
        case "Lua":
            resultado = "es de Abril";
            break
        default:
            resultado = "No es de Abril";
    }
    return resultado
}
console.log(evaluarNombre("Lua")); // es de Abril porque breakk rompe el código 

// Ejercicio 2
const evaluarNombre = ( nombre ) => {
    let resultado;
    switch ( nombre){
        case "Lua":
            resultado = "Es de Abril";
            break;
        case "Borrego": 
        case "Besito":
        case "Fijól":
        case "Paco":
            resultado = "Es de Yessica";
            break;
        case "Milo":
            resultado = "Es de Carlos";
            break
        case "Cuchara":
            resultado = "Es de Ricardo";
            break;
        default:
            resultado ="No se sabe de quién es";        
    }
    return resultado;
}
console.log( evaluarNombre("Lua") ); // Es de Abril
console.log( evaluarNombre("Milo") ); // Es de Carlos
console.log( evaluarNombre("Borrego") ); // Es de Yessica

/**
 * Función que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param {number} velocidad
 * @returns {string} mensaje
 * 
 * Realizar dos versiones, una versión con switch y otra con if-else
 */
const ventilador = (velocidad) => {
    let velocidad;
    switch(String(velocidad)){
    
        case "0":
            velocidad = "Esta apagado";
            break;
        case "1":
            velocidad = "Velocidad Baja";
            break;
        case "2":
            velocidad = "Velovidad media";
            break;
        case "3":
            velocidad = "Velovidad alta";
            break;
        default:
            resultado = "Ya lo quemaste";
    }
    return resultado;
}

console.log(ventilador("5"));



// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/
const verficarPagoDeTarjeta = ( estaPagado ) =>{
    let msj;
    if( estaPagado) {
        msj = "La tarjta ha sido pagada";
    } else {
        msj = "La tarjeta no ha sido pagada";
    }
    return msj;
}
console.log( verficarPagoDeTarjeta( true ) ); // La tarjeta ha sido pagada
console.log( verficarPagoDeTarjeta( false ) ); // La tarjea no ha sido pagada




// Versión con operador ternario

const verficarPagoDeTarjetaUsandoTernario = ( estaPagado ) =>{
    return estaPagado ? "La tarjeta ha sido pagada" : "La tarjeta no ha sido pagada";
}
console.log( verficarPagoDeTarjetaUsandoTernario( true ) ); // "La tarjta ha sido pagada"
console.log( verficarPagoDeTarjetaUsandoTernario( false ) ); // "La tarjeta no ha sido pagada"


// Dado un número entero, imprimir si es:
// "Negativo si el numero es menor a 0"
// "Cero" si el numero es 0
// "Positivo " si el numero es mayo a cero pero menos de 100
// "Grande " si el numero es mayor o igual a 100

/*
- Realizar una función que reciba el número y retorne el mensaje.
 - El retorno debe ser impreso en la consola.
 - Realizar una versión if-else, switch y operador ternario.
*/
const verificadordeNumeros = (queNumero) => {
 
    return queNumero < 0 ? "Negativo" : queNumero == 0 ? "Cero" : queNumero >0 && queNumero <100 ? "Positivo" : "Grande";
 } ;
console.log(verificadordeNumeros(0));



// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/


