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
/* 
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18, la función debe
 retornar el mensaje "Eres mayor de edad".
 En caso contrario, retornar el mensaje "Eres menor de edad".
 - Realizar la versión de if-else sin usar el bloque de código {}
*/

//Usando unicamente arrow
const esMayorDeEdad = (edad) => edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
console.log(esMayorDeEdad(12));

//Utilizando if else sin
const verificarEdad = (edad) => {
    if (edad > 18) return 'Mayor de Edad';
    else return 'Menor de edad';
};

const resultado = verificarEdad(18);

/*
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18 y menor o igual a 30
                 ( evalur con 18 Y(&&) evaluar con 30        )
 la función debe retornar el mensaje "Tu luchador es Místico".
 Si es mayor o igual a 31 el mensaje "Tu luchador es el perro Aguayo".
 Si es menor a 18 el mensaje "Tu luchador es Penta"
*/
/*
const quienEsTuLuchador = (edad) => {
    if (edad >= 18 && edad <= 30) {
        return "Tu luchador es Místico";
    } else if (edad >= 31) {
        return "Tu luchador es el perro Aguayo";
    } else if (edad < 18) {
        return "Tu luchador es Penta";
    }
};

console.log(quienEsTuLuchador(16));
console.log(quienEsTuLuchador(21));
console.log(quienEsTuLuchador(31));

const quienEsTuLuchador2 = (edad) =>
    edad >= 18 && edad <= 30 return 'Tu luchador es Místico'
        ? 'Tu luchador es Místico'
        : edad >= 31
            ? 'Tu luchador es el perro Aguayo'
            : 'Tu luchador es Penta';

console.log(quienEsTuLuchador2(16));
console.log(quienEsTuLuchador2(21));
console.log(quienEsTuLuchador2(31));

//bloque de coódigo
{
    let myVarLet = 30;
    const myVarConst = 40;
    var myVarVar = 50;
    console.log(myVarLet, myVarConst, myVarVar); //30, 40, 50
    {
        let myVarLet = 30;
        const myVarConst = 40;
        var myVarVar = 50;
        console.log(myVarLet, myVarConst, myVarVar); //100, 110 , 120
    }
    console.log(myVarLet, myVarConst, myVarVar); //
}

// --------------- Ejercicios mentales---------------

// --------------- Ejercicio 1 -------------------

let active = false
if( active === true ); {
  console.log("Está activo")
}
console.log("Fin del programa");

// --------------- Ejercicio 2 -------------------

active = false;
if (active === true); // solo en booleano se puede poner así if (active);
    console.log("Está activo"); //dentro del if
    console.log("Tiene autorización"); // fuera del if
    console.log("Fin del prgrama"); //fuera del if

// --------------- Ejercicio 3 -----------------

active = false;
if (active); console.log("Está activo"); // se imprime "esta activo" ademas hay un error de sintaxis if (active); <--- aquí
    else console.log("Tiene autorización"); // no se imprime
    console.log("Fin del prgrama"); 




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

// -------- Ejemplo ------------

/*
const evaluarNombre = ( nombre ) => {
    switch ( nombre){
        console.log( "Es de Abril" );
            break;
        default:
            console.log( "No se sabe de quién es");
        
    }
}
evaluarNombre("Lua") ); // Es de Abril
*/

// ----------- Ejemplo remasterizado ---------------

const evaluarNombre = ( nombre ) => {
    let resultado;
    switch ( nombre){
        case "Lua":
            resultado = "Es de Abril";
            break;
        default:
            resultado ="No se sabe de quién es";
        
    }
    return resultado;
}
console.log( evaluarNombre("Lua") ); // Es de Abril


const evaluarNombre2 = ( nombre ) => {
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
console.log( evaluarNombre2("Lua") ); // Es de Abril
console.log( evaluarNombre2("Milo") ); // Es de Carlos
console.log( evaluarNombre2("Borrego") ); // Es de Jessica

//-------------- EJERCICIO ----------------
/*
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
const velocidadDeVentilador = ( velocidad ) => {
    let resultado;
    switch ( velocidad){
        case "Velocidad 0":
            resultado = "Apagado";
            break;
        case "Velocidad 1":
            resultado = "Baja";
            break;
        case "Velocidad 2":
            resultado = "Media";
            break;    
        case "Velocidad 3":
            resultado = "Alta";
            break;
        default:
            resultado ="Velocidad desconocida";        
    }
    return resultado;
}

console.log( velocidadDeVentilador("Velocidad") );
console.log( velocidadDeVentilador("Velocidad 3") );
console.log( velocidadDeVentilador("Velocidad 0") ); 

// ----------- con if else -------------


function velocidadDeVentilador2 ( velocidad2  ) {
  let result;
  if ("velocidad 0") {
    result = "Apagado";

  } else if ("Velocidad 1") {
    result = "Baja";

  } else if ("Velocidad 2") {
    result = "Media";

  } else if ("Velocidad 3"){
     result = "Alta";

  } else {
    result ="Velocidad desconocida"
  }
       
  return result;
}

console.log( velocidadDeVentilador2("Velocidad 0") );
console.log( velocidadDeVentilador2("Velocidad 2") );
console.log( velocidadDeVentilador2("Velocidad 3") );



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




// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa;

*/
/*
const verficarPagoDeTarjeta = ( estaPagado ) =>{
    let msj;
    if( estaPagado) {
        msj = "La tarjeta ha sido pagada";
    } else {
        msj = "La tarjeta no ha sido pagada";
    }
    return msj;
}
console.log( verficarPagoDeTarjeta( true ));
console.log( verficarPagoDeTarjeta( false ));

//usando operador ternario

const verficarPagoDeTarjetaUsandoTernario = ( estaPagado ) =>{
    return estaPagado ? "La tarjeta ha sido pagada" : "La tarjeta no ha sido pagada";
}
console.log( verficarPagoDeTarjetaUsandoTernario( true ) ); // "La tarjta ha sido pagada"
console.log( verficarPagoDeTarjetaUsandoTernario( false ) ); // "La tarjeta no ha sido pagada"
*/

/*
 Dado un número entero, imprimir:
 "Negativo":  si el número es menor a 0.
 "Cero":  si el número es  0.
 "Positivo":  si el número es mayor a cero pero menor a 100.
 "Grande": si el número es mayor o igual a 100.
 - Realizar una función que reciba el número y retorne el mensaje.
 - El retorno debe ser impreso en la consola.
 - Realizar una versión if-else, switch y operador ternario.
*/
/*
const evaluarConIfElse(num) {
    if (num < 0) {
        return "Negativo";
    } else if (num === 0) {
        return "Cero";
    } else if (num > 0 && num < 100) {
        return "Positivo";
    } else {
        return "Grande";
    }
}

console.log("If-Else:", evaluarConIfElse(0));

//ejercicio con if else

function evaluarConSwitch(num) {
    switch (true) {
        case (num < 0):
            return "Negativo";
        case (num === 0):
            return "Cero";
        case (num > 0 && num < 100):
            return "Positivo";
        case (num >= 100):
            return "Grande";
        default:
            return "Valor no válido";
    }
}

console.log("Switch:", evaluarConSwitch(13));

const evaluarConTernario = (num) =>
    num < 0
        ? "Negativo"
        : num === 0
            ? "Cero"
            : num > 0 && num < 100
                ? "Positivo"
                : "Grande";

console.log("Ternario:", evaluarConTernario(200));


/*
const identificadorDeNumerosUsandoTernario = ( numbr ) =>{
    return numbr ? "La tarjeta ha sido pagada" : "La tarjeta no ha sido pagada";
}
console.log( verficarPagoDeTarjetaUsandoTernario( true ) ); // "La tarjta ha sido pagada"
console.log( verficarPagoDeTarjetaUsandoTernario( false ) ); // "La tarjeta no ha sido pagada"



/**
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
