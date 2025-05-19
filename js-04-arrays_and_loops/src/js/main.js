
// =============== Declarar un arreglo ===============
const myArray = []; // []
const myArray2 = new Array(); // []

const myArray3 = [5]; // [5]
const myArray4 = new Array(5); // [undefined, undefined, undefined, undefined, undefined]

const myArray5 = [5,6]; // [5,6]
const myArray6 = new Array(5,6); // [5,6]

// ============ Iterar un  arreglo con for loop ============
/*
 Sintaxis:
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

*/
const nombres = ["Juan", "Pedro", "María", "Ana"];
for ( let index = 0; index < nombres.length; index++ ){
    console.log( nombres[index] ); // Juan, Pedro, María, Ana
}



// Simplificaciones en la iteración de un arreglo
// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/

const colores = ["Rojo", "Azul", "Verde", "Amarillo"];

for (let i = 0; i < colores.length; i++) {
    const element = colores[i];
    console.log(element);    
}

for ( const color of colores ) {
    console.log( color );
}

// ---------------------- Ejercicio con for of ---------------------
/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función 
 */
const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
const refListaCantantes = document.getElementById("cantantes-lista");

/*  Imprimir en consola cada uno de los cantantes, usandor for of*/ 
// La salida deber ser como "Juan Gabriel - José José - Rocío Dúrcal - Ana Gabriel -"

const imprimirCantantes2 = ( listaCantantes ) => {
    let cantantesConcatenados = "";
    for (const cantante of listaCantantes) {
        // cantantesConcatenados = cantantesConcatenados + cantante + " - ";
        cantantesConcatenados +=  cantante + " - ";
    }
    return cantantesConcatenados;
}
console.log(imprimirCantantes2(cantantes));

//METODO join
 /*imprimirCantantes3(arrayCantantes) {
    console.log(arrayCantantes.join(", "));
}
imprimirCantantes3(cantantes); */

/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función 
 *    <li>Juan Gabriel</li>
 */
const misCantantes = ["Adele", "Bad Bunny", "Tweny One Pilots", "Jake Bugg"];
const imprimirMisCantantes = (nombreCantantes) => {
    let cantantesJuntos = "";
    for (const singers of misCantantes) {
        cantantesJuntos += singers + "-"
    } 
    return cantantesJuntos
}
console.log(imprimirMisCantantes(misCantantes));





// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.

let iteracion = 0;

for ( ;   ;  ){
    console.log( `Núm de iteración: ${iteracion}` ); // 0, 1, 2, 3, 4
    iteracion++;
    if ( iteracion === 5 ){
        break;
    }
}








// ------------------- Uso de break y label en ciclos anidados ----------------------------
multiplicando: //label
for (let i = 1; i <= 7; i++ ){
    multiplicador:  //label 
    for (let j = 1; j <= 10 ; j++){        
        console.log(`${i} x ${j} = ${i * j}`);             
        if( i >= 4 ) break multiplicando;
    }

}



/* Imprime tabla del 1 al 4 donde es 4x1 = 4, pero continua con el flujo siguiente 5x1 = 5
6x1 = 6 */



/* ----------------Ejercicios Mentales------------ */

let myIteration; // undefined
for (myIteration = 0; myIteration <= 5; myIteration++) {
    console.log("For loop", myIteration ); //  0...5    
}
console.log("Final", myIteration); // 6







// ------------------- Uso de continue en ciclos ----------------------------
// break: Termina completamente un bucle (for, while, switch, etc.).
// continue: Salta la iteración actual y pasa a la siguiente sin salir del bucle.

console.log(   NaN === NaN );  // false
for (let i = 0 ; i <= 5; i++ ){
    if ( i === 3) continue;
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0, 1, 2,  4 , 5
}

for (let i = 0 ; i <= 5; i++ ){
    if ( i !== 3){ 
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0, 1, 2,  4 , 5
    }
}



// ============== Ciclo While ======================
//                (while loop)
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla.

 Sintaxis:
    while( condición) sentencia;

    while ( condición ){  // cuando es más de una instrucción
        sentencias;
    }

*/

/*
 Pregunta al usuario si quire que se genere su númer de la suerte.
 Si la respuesta es "si", genera de forma aleatoria un número.
 En cas contrario, despedirse.
*/ 
while(  confirm("¿Quieres tu número de la suerte")  ){
    const numeroSuerte = Math.random();
    console.log("Tu número de la suerte es: " + numeroSuerte);
}

/* 
 Uso de Math.random();
 Generar 5 números aleatorios.
 Los números deben estar entre el 0.0 y 10.0(sin incluir 10.0)
*/

const generarNumerosAleatorios = (cantidad) => {
   
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.random() * 10;
        console.log("Número aleatorio: ", numeroAleatorio); // 0.0...10.0
    }
    return numerosAleatorios;
};
generarNumerosAleatorios(5);