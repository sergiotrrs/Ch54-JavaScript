
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

const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
const refListaCantantes = document.getElementById("cantantes-lista");

// Imprimir en consola cada uno de los cantantes, usandor for of
// usar un arrow function.
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

function imprimirCantantes3(arrayCantantes) {
    console.log(arrayCantantes.join(" - "));
}
imprimirCantantes3(cantantes);

/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función.
 * 
 *    let lista = <li>Juan Gabriel</li> <li>José José</li>
 * 
 *    document.getElementById("cantantes-lista").innerHTML = lista;
 */
const unorderListCantantes = (arregloCantantes) => {
  let concatenacion = " ";
  for (const cantante of arregloCantantes) {
    concatenacion += "<li>" + cantante + "</li>";
  }
  return concatenacion;
};

const imprimirDocumento = (arregloFinal) =>{
  document.getElementById("cantantes-lista").innerHTML = unorderListCantantes(arregloFinal);
};

imprimirDocumento(cantantes);


// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.

let iteracion = 0;

for (  ;   ;  ){
    console.log( `Núm de iteración: ${iteracion}` ); // 0, 1, 2, 3, 4
    iteracion++;
    if ( iteracion === 5 ){
        break;
    }
}

// ------------------- Uso de break y label en ciclos anidados ----------------------------
multiplicando:
for (let i = 1; i <= 7; i++ ){
    multiplicador:
    for (let j = 1; j <= 10 ; j++){        
        console.log(`${i} x ${j} = ${i * j}`);             
        if( i >= 4 ) break multiplicando;
    }

}


// Ejercicios mentales

let myIteration; 

for (myIteration = 0; myIteration <= 5; myIteration++) {
    console.log("For loop", myIteration ); // 
     if( myIteration === 2) break;  
}
console.log("Final", myIteration); //  




// ------------------- Uso de continue en ciclos ----------------------------
// break: Termina completamente un bucle (for, while, switch, etc.).
// continue: Salta la iteración actual y pasa a la siguiente sin salir del bucle.


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

    while ( condición ){
        sentencias;
    }

*/

/*
 Pregunta al usuario si quire que se genere su númer de la suerte.
 Si la respuesta es "si", genera de forma aleatoria un número.
 En caso contrario, despedirse.
*/ 
/*
while(  confirm("¿Quieres tu número de la suerte")  ){
    const numeroSuerte = Math.random(); // 0....1.0(sin incluir 1.0)
    console.log("Tu número de la suerte es: " + numeroSuerte);
}
console.log("Gracias por participar");
*/

// for loop vs while loop
for (let i = 0; i < 5; i++) {
    console.log("For loop", i); // 0, 1, 2, 3, 4
}   

let numIteracion = 0;
while (numIteracion < 5) {
    console.log("While loop", numIteracion); // 0, 1, 2, 3, 4
    numIteracion++;
}

/* 
 Uso de Math.random();

 Generar 5 números aleatorios.
 Los números deben estar entre el 0.0 y 10.0(sin incluir 10.0)

*/
const generarNumerosAleatorios = (cantidad) => {
   
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.random();
        const escalarNumero = numeroAleatorio * 10;
        console.log("Número aleatorio: ", escalarNumero); // 0.0...10.0
    }
   
};
generarNumerosAleatorios(5);



/* 
 Uso de Math.random();

 Generar 5 números aleatorios.
 Los números deben estar entre el 0 y 10(sin incluir 10)
 Solo números enteros

*/
const generarNumerosAleatorios2 = (cantidad, minNum = 0, maxNum = 10) => {
   
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.random(); 
        const escalarNumero = numeroAleatorio * ( (maxNum - minNum ) + 1); 
        const numerosEntero = Math.floor(escalarNumero + minNum); 
        console.log(`Número aleatorio entre ${minNum} y ${maxNum}: ${numerosEntero}`); 
    }
   
};
generarNumerosAleatorios2(5);
generarNumerosAleatorios2(10, 50 , 60);

/*
      Melate Chocolate
      1.- Al puldar el botón Generar mis número de la suerte.
      1. Generar 6 números aleatorios entre el 1 y el 54.
      2.- Mostrar el resultado en el DOM.

*/

/**
 * Generar un número aleatorio entre un rango de números
 * @param {number} minNum 
 * @param {number} maxNum 
 */
const generarNumeroAleatorio = (minNum, maxNum) => {
    const numeroAleatorio = Math.random();
    const escalarNumero = numeroAleatorio * ( (maxNum - minNum ) + 1);
    const numeroEntero = Math.floor(escalarNumero + minNum);
    return numeroEntero;
};

const elNumeroExisteEnArreglo = (arreglo, numero) => {
    return arreglo.includes(numero);
}

const imprimirMelateChocolate = ( numeros ) => {
    const referencia = document.getElementById("melate-chocolate");
    referencia.innerHTML = ` ${numeros.join(' - ')} `;
}

const generarNumerosDeLaSuerte = (size = 6, minNum = 1, maxNum = 54) => {
    const numeros = [];
    let iteracion = 0;

    while( numeros.length < size ){
        const numAleatorio = generarNumeroAleatorio(minNum, maxNum);
        if( elNumeroExisteEnArreglo(numeros, numAleatorio) === false ){
            numeros.push(numAleatorio);
        }
        console.log(iteracion, numeros, numAleatorio);
        iteracion++;
    }
    imprimirMelateChocolate( numeros);
    
}

// ------------- Uso del método sort() ----------------
const numerosIniciales = [ 5, 33, 8, 100, 4, 2, 7, 6 ];
                       //[ 5, 33, 8, 100, 4, 2, 7, 6 ] iteración 0
                       //[ 5, 8, 33, 100, 4, 2, 7, 6 ] iteración 1
                       //[ 5, 8, 33, 100, 4, 2, 7, 6 ] iteración 2
                       //[ 5, 8, 33, 4, 100, 2, 7, 6 ] iteración 3
                       //[ 5, 8, 33, 4, 2, 100, 7, 6 ] iteración 4
                       //[ 5, 8, 33, 4, 2, 7, 100, 6 ] iteración 5
                       //[ 5, 8, 33, 4, 2, 7, 6, 100 ] iteración 6
                       
const comparaNumeros = ( a, b ) => {
    if ( a < b ) return -1;
    if ( a > b ) return 1;
    return 0;
}

const comparaNumeros2 = (a, b )=> a - b;

const comparaNumerosOrdenDescendente = ( a, b ) => {
    if ( a < b ) return 1;
    if ( a > b ) return -1;
    return 0;
}

const comparaNumerosOrdenDescendente2 = ( a, b ) => b - a;

const ordenarNumeros = ( numerosDesordenados, tipoOrden)=>{
    const numerosOrdenados = numerosDesordenados.slice();
    numerosOrdenados.sort( tipoOrden );
    return numerosOrdenados;
}

console.log( numerosIniciales ); // [ 5, 33, 8, 100, 4, 2, 7, 6 ]
console.log( ordenarNumeros(numerosIniciales, comparaNumeros) ); // [2, 4, 5, 6, 7, 8, 33, 100]
console.log( numerosIniciales ); // [ 5, 33, 8, 100, 4, 2, 7, 6 ]
console.log( ordenarNumeros([28,37,99,52,5], comparaNumeros) ); // [5, 28, 37, 52, 99]
console.log( ordenarNumeros([28,37,99,52,5], comparaNumerosOrdenDescendente) ); // [99, 52, 37, 28, 5]
console.log( ordenarNumeros([28,37,99,52,5], comparaNumerosOrdenDescendente2) ); // [99, 52, 37, 28, 5]
console.log( ordenarNumeros([28,37,99,52,5], (a,b)=>b-a ) ); // 