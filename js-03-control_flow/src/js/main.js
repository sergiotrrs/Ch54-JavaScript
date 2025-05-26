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

/* 
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18, la función debe
 retornar el mensaje "Eres mayor de edad".
 En caso contrario, retornar el mensaje "Eres menor de edad".
 - Realizar la versión de if-else sin usar el bloque de código {}
*/

const verificarEdad = edad => {
    if (edad >= 18) return "Eres mayor de edad";
    else return "Eres menor de edad";
}
const resultado = verificarEdad(19);
console.log(resultado);

/*Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18 y menor o igual a 30
                 ( evalur con 18 Y(&&) evaluar con 30        )
 la función debe retornar el mensaje "Tu luchador es Místico".
 Si es mayor o igual a 31 el mensaje "Tu luchador es el perro Aguayo".
 Si es menor a 18 el mensaje "Tu luchador es Penta"
*/

const obtenerLuchador = edad => {
  if (edad >= 18 && edad <= 30) return "Tu luchador es Místico";
  else if (edad >= 31) return "Tu luchador es el perro Aguayo";
  else return "Tu luchador es Penta";
};
console.log(obtenerLuchador(25)); 
console.log(obtenerLuchador(35)); 
console.log(obtenerLuchador(15)); 

//Bloque de codigo
{
    let myVarLet = 30;
    const myVarConst = 40;
    var myVarVar = 50;
    console.log(myVarLet, myVarConst, myVarVar); // 30,40,50
    
    {
        let myVarLet = 100;
        const myVarConst = 110;
        var myVarVar = 120;
        console.log(myVarLet, myVarConst, myVarVar); // 100,110,120
    }
    console.log(myVarLet, myVarConst, myVarVar);// 30,40,120
}

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
console.log( evaluarNombre("Borrego") ); // Es de Jessica


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
 */

// Con Switch

const obtenerVelocidadVentilador = velocidad => {
  switch (velocidad) {
    case 0: return "Apagado";
    case 1: return "Baja";
    case 2: return "Media";
    case 3: return "Alta";
    default: return "Velocidad desconocida";
  }
};
console.log(obtenerVelocidadVentilador(2)); 

//Con if-else 

const obtenerVelocidadVentilador2 = velocidad => {
  if (velocidad === 0) return "Apagado";
  else if (velocidad === 1) return "Baja";
  else if (velocidad === 2) return "Media";
  else if (velocidad === 3) return "Alta";
  else return "Velocidad desconocida";
};


console.log(obtenerVelocidadVentilador2(0));

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
console.log( verficarPagoDeTarjeta( true ) ); // "La tarjeta ah sido pagada"
console.log( verficarPagoDeTarjeta( false ) ); // "La tarjeta no ha sido pagada"

//Operador ternario

const verficarPagoDeTarjetaUsandoTernario = ( estaPagado ) =>{
    return estaPagado ? "La tarjeta ha sido pagada" : "La tarjeta no ha sido pagada";
}
console.log( verficarPagoDeTarjetaUsandoTernario( true ) ); // "La tarjta ha sido pagada"
console.log( verficarPagoDeTarjetaUsandoTernario( false ) ); // "La tarjeta no ha sido pagada"  

/*
 Dado un número entero, imprimir:
 "Negativo":  si el número es menor a 0.
 "Cero":  si el número es  0.
 "Positivo":  si el número es mayor a cero pero menor a 100.
 "Grande": si el número es mayor o igual a 100.
 - Realizar una función que reciba el número y retorne el mensaje.
 - El retorno debe ser impreso en la consola. (switch) 
 - Realizar una versión if-else, switch y operador ternario.
*/

//Version con if-else

function clasificacionNumero(num){
    if (num < 0) return "Negativo";
    else if (num === 0) return "cero";
    else if (num < 100) return "positivo";
    else return "Grande";
} 
console.log(clasificacionNumero(-5));
console.log(clasificacionNumero(-0));
console.log(clasificacionNumero(-59));

//version switch
function clasificarNumeroSwitch(num2) {
  switch (true) {
    case (num2 < 0):
      return "Negativo";
    case (num2 === 0):
      return "Cero";
    case (num2 < 100):
      return "Positivo";
    default:
      return "Grande";
  }
}

console.log(clasificarNumeroSwitch(-53));
console.log(clasificarNumeroSwitch(0));
console.log(clasificarNumeroSwitch(50));
console.log(clasificarNumeroSwitch(190));

//Version operador Ternanrio

function clasificarNumeroTernario(num3) {
  return num3 < 0 ? "Negativo" : num3 === 0 ? "Cero" :num3 < 100 ? "Positivo" : "Grande";
}

console.log(clasificarNumeroTernario(-5));
console.log(clasificarNumeroTernario(0));
console.log(clasificarNumeroTernario(50));
console.log(clasificarNumeroTernario(150));


/*
 *  Función que reciba la edad de una persona y devuelva el mensaje:
 *  Si la edad es mayor o igual a 18 años: Eres mayor de edad
 *  En caso contraio: Eres menor de edad
 *  @param {number} edad
 *  @returns {string} mensaje
 */




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
