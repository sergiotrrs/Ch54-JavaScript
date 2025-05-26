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

const irPorElotes = (horaDelDia) => {

    //const miPromesa = new Promise(fnCallBack);
    const miPromesa = new Promise((fnCallBackResolve, fnCallBackReject) => {
        console.log("Voy por el elote en la" + horaDelDia);// esta tarea puede tardar mucho o poco
        if (horaDelDia === "día" || horaDelDia === "tarde") {
            fnCallBackResolve("Toma tú elote que esta dentro de una bolsa")
        } else {
            fnCallBackReject({ error: 404, description: "Elote no fue encontrado" });
        }
    });

    return miPromesa;
}

irPorElotes("tarde")
    .then((response) => console.log("1eraPromesa", response));

/*irPorElotes("noche")
    .then((response) => console.log("2daPromesa", response))
    .catch((error) => console.log(`Promesa rechazada`, error)) 
    .finally(() => console.log("Se ha terminado tu promesa"));
*/


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

const comerElote = (numeroDeVueltas) => {
    const miDesamarre = new Promise((fnSiSeDesamarra, fnNoSeDesamarra) => {
        if (numeroDeVueltas <= 2 || numeroDeVueltas > 2) {
            fnSiSeDesamarra("ñomi, ñomi")
        } else {
            fnNoSeDesamarra("ups, se me cayó tu elote");
        }
    });
    return miDesamarre;

}
/*
const tiempo = "tarde";
comerElote(tiempo)
    .then((response) => {
        console.log("Promesa", tiempo, response);
        const vueltas = 2;
        numDeVueltas(vueltas)
            .then(response => console.log(tiempo, response))
            .catch(error => console.log(error));
    })*/
/* 
 La función se llama ponerChilito()
 La función NO tiene parámetro de entrada.
 Realizar una promesa que retorne en el estado resolve: "Chilito del que pica".
 La función no debe tener Reject.
*/

// ponerchilito
// 
/*
function ponerChilito() {
    return new Promise((resolve) => {
        resolve("Chilito del que pica");
    });
}


ponerChilito().then((resultado) => {
    console.log(resultado);
});

const tiempo = "tarde";
comerElote(tiempo)
    .then((response) => {
        console.log("Promesa", tiempo, response);
        return numDeVueltas(response.vueltas);
    })
    .then((response) => console.log("Promesa n.Vueltas", response))
    .catch((error) => console.log(`Promesa rechazada`, error))
    .finally(() => console.log("Se ha terminado tu promesa"));

// ----------- uso de async y await--------------

const crisQuiereElote = async () => {
    const tiempo = "tarde";
    const response = await comerElote(tiempo);
    console.log(response);
    const respuestaBolsa = await numDeVueltas(response.vueltas);
    console.log(respuestaBolsa);
    const mensajeFinal = await ponerChilito();
    console.log(mensajeFinal);
}
crisQuiereElote();
*/
// ============== Uso de la api fetch ====================
const leerProductos = async (url) => {
    try {
        const response = await fetch(url);
        const datosApi = await response.json();
        return datosApi;
    } catch (error) {
        console.log("No se pudo obtener los datos", error);
        return { results: [] };
    }
};

const construirTarjetasDeRickandMorty = (personajes) => {
    const tarjetas = personajes.map((personaje) => (
        `<div class="col-12 col-md-4 col-lg-3">
            <div class="card mb-4">
                <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
                <div class="card-body">
                    <h5 class="card-title">${personaje.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" class="btn btn-primary">${personaje.species}</a>
                </div>
            </div> 
        </div>`
    ));
    return tarjetas;
};

const insertarTarjetasAlDom = (tarjetas, idDOM = "cards") => {
    const refDom = document.getElementById(idDOM);
    refDom.innerHTML = tarjetas.join("");
};

const crearCardsDeRickAndMorty = async () => {
    const urls = [
        "https://rickandmortyapi.com/api/character?page=1",
        "https://rickandmortyapi.com/api/character?page=2"
    ];

    let todosLosPersonajes = [];

    for (const url of urls) {
        const data = await leerProductos(url);
        todosLosPersonajes = todosLosPersonajes.concat(data.results);
    }

    const tarjetas = construirTarjetasDeRickandMorty(todosLosPersonajes);
    insertarTarjetasAlDom(tarjetas);
};

crearCardsDeRickAndMorty();
