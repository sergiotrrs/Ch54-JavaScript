/*
 API: Application Programming Interface
   Permite la comunicación entre dos aplicaciones de software
   a travéz de un conjunto de reglas.

 La API Fetch nos ayuda a acceder y manipular 
 peticiones HTTP (DELETE, GET, POST, PUT).
 
 Sintaxis:
    fetch(resource, options)

 Las promesa es un patrón asincrónico que se utiliza
 para manejer operaciones asíncronas.

 Las promesas permite realizar tareas asíncronas y
 manejar los resultados (éxito o error) en un momento posterior.

 Las promesas tiene 3 estados:

 1.- Pending: El estado inicial de una promesa antes de que se resuelva o rechace
 2.- Resolved: La promesa se resuelve con un valor
 3.- Rejected: La promesa se rechaza con un razón

*/
const vueltasAleatorias = (min = 1, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;


const irPorElElote = (horaDelDia) => {

    // const miPromesa = new Promise( fncCallBack  );
    const miPromesa = new Promise((fncCallBackResolve, fncCallBackReject) => {
        console.log("Voy por el elote en la " + horaDelDia); // esta tarea pude demorar mucho o poco
        if (horaDelDia === "día" || horaDelDia === "tarde") {
            fncCallBackResolve({ mensaje: "Toma tu elote que está dentro de una bolsa", vueltas: vueltasAleatorias() });
        } else {
            fncCallBackReject({ error: 404, descripcion: "Elote no fue encontrado" });
        }
    });

    return miPromesa;
}


/**
 *  Realizar un función de tipo Promise que reciba lo siguiente
 *  @param{number} el número de vueltas de amarre de la bolsa
 * 
 *  - La promesa se resuelve si el núm de vueltas es menor o igual a 2
 *    se resuelve con el texto "ñomi ñomi, me como mi elote"
 *  - Si num. de vueltas es mayor a 2, la promesa se rechaza
 *    con el texto "ups, se me cayó tu elote"
 *  
 */

const numDeVueltas = (number) => {

    const miPromesa = new Promise((fncCallBackResolve, fncCallBackReject) => {
        console.log("el numero de vueltas es: " + number);
        if (number <= 2) {
            fncCallBackResolve("ñomi ñomi, me comi mi elote");
        } else {
            fncCallBackReject({ error: 404, descripcion: "upss se me cayo el elote" });
        }
    });
    return miPromesa;
}

/* 
 La función se llama ponerChilito()
 La función NO tiene parámetro de entrada.
 Realizar una promesa que retorne en el estado resolve: "Chilito del que pica".

 La función no debe tener Reject.

*/
const ponerChilito = () => {
    const miPromesa = new Promise((fncCallBackResolve) => {
        fncCallBackResolve("chilito del que pica");
    });
    return miPromesa;
}

const ponerChilito2 = Promise.resolve("chilito del que pica");

// miFuncionPromesa().then( callback ).catch( callback ).finally( callback );
/*
irPorElElote("tarde")
    .then( ( response )=> console.log("1eraPromesa", response) );

irPorElElote("noche")
    .then( ( response )=> console.log("2aPromesa", response) )
    .catch( ( error )=> console.log(`Promesa rechazada`, error) )
    .finally( ()=> console.log("Se ha terminado tu promesa")  );
*/
// Ya tengo mi elote, pero falta abri la bolsa
/*
const tiempo = "tarde"; 
irPorElElote( tiempo )
    .then( ( response )=> {
        console.log("Promesa", tiempo, response);
        numDeVueltas( response.vueltas )
        .then( response => {
            console.log( tiempo, response )
            ponerChilito()
            .then( resolve => console.log("Promesa chilito", resolve))
        } )
        .catch( error => console.log( error ) );
    })
    .catch( ( error )=> console.log(`Promesa rechazada`, error) )
    .finally( ()=> console.log("Se ha terminado tu promesa")  );
*/
/*
const tiempo = "tarde"; 
irPorElElote( tiempo )
    .then( ( response )=> {
        console.log("Promesa", tiempo, response);   
        return numDeVueltas(response.vueltas);
    })
    .then( (response)=> {
        console.log( "Promesa n.Vueltas", response );
        return ponerChilito();
    })
    .then( (response) => {
        console.log("Promesa chilito", response);
    })
    .catch( ( error )=> console.log(`Promesa rechazada`, error) )
    .finally( ()=> console.log("Se ha terminado tu promesa")  );
    
*/

// ============= uso de async y await ==========================
const crisQuiereElote = async () => {
    try {
        const tiempo = "noche";
        const response = await irPorElElote(tiempo);
        console.log(response);
        const respuestaBolsa = await numDeVueltas(response.vueltas);
        console.log(respuestaBolsa);
        const mensajeFinal = await ponerChilito();
        console.log(mensajeFinal);
    } catch (error) {
        console.log(`Promesa rechazada`, error);
    }

}


console.log("Msj 1");
await crisQuiereElote();
console.log("Msj 2");

// ============== Uso de la api fetch ====================
async function myFunction() { }
const leerProductos = async (url) => {

    try {
        const response = await fetch(url); // Obtener los datos en formato JSON
        //console.log(response);
        const datosApi = await response.json(); // Convertir de JSON a objetos de JavaScript
        //console.log( datosApi );
        return datosApi;

    } catch (error) {
        console.log("No se pudo obtener los datos", error);
    }

}

const contruirTarjetasDeRickandMorty = (personajes) => {

    const tarjetas = personajes.map((personaje, index, array) => (
        `<div class="col-12 col-md-4 col-lg-3">
                <div class="card mt-2">
                    <img src="${personaje.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${personaje.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" class="btn btn-primary">${personaje.species}</a>
                    </div>
                </div> 
              </div>
             `
    ));
    return tarjetas;
}


const insertarTarjetasAlDom = (tarjetas, idDOM = "cards") => {
    const refDom = document.getElementById(idDOM);
    refDom.innerHTML = tarjetas.join("");
}


const crearCardsDeRickAndMorty = async () => {
    //const data = await leerProductos("https://rickandmortyapi.com/api/character");
    const data = await leerProductos("/public/json/rick.json");
    const personajes = data.results;
    console.log(personajes);
    const tarjetas = contruirTarjetasDeRickandMorty(personajes);
    insertarTarjetasAlDom(tarjetas);
}

crearCardsDeRickAndMorty();

