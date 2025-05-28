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
 1.- Pending: El estado inicial de una promesa antes de que se resuelva o rechace  --------- Va por el elote el hermano menor
 2.- Resolved: La promesa se resuelve con un valor ----------------------------------------- Ya tengo mi elote
 3.- Rejected: La promesa se rechaza con un razón ------------------------------------------ Vuelvo a pedir elote y no hay, se rechaza ** pero aqui ya es otra promesa
*/


// No se puede ejecutar la promesa si no hay elote, se tienene que sincronizar como se resuelve la promesa 
// Se usan promesas cuando quiero que un código me bloquee otro código 

const irPorElElote= ( horaDelDia ) =>{
   // const miPromesa = new Promise( fncCallBack  );
   const miPromesa = new Promise( ( fncCallBackResolve, fncCallBackReject )=>{
    console.log("Voy por el elote en la " + horaDelDia ); //Esta tarea puede demorar mucho o poco 
       if( horaDelDia === "día" || horaDelDia === "tarde" ){
          fncCallBackResolve("Toma tu elote que está dentro de una bolsa");
       } else {
          fncCallBackReject( {error: 404, descripcion: "Elote no fue encontrado"}  );
       }
       
   } );
   return miPromesa;
}

//miFuncionPromesa().then( callback ).catch( callback ).finally( callback );
irPorElElote("tarde")
    .then((response ) => console.log ( "1raPromesa", response) ); // cuando la promesa es resuelta 

irPorElElote("noche")
    .then((response ) => console.log ( "2daPromesa", response) )
    .catch( (error) => console.log ( `Promesa rechazada`, error))
    .finally(()=> console.log("Se ha terminado tu promesa"));
    
// ya tengo mi elote, falta abrir la bolsa--- es la segunda promesa
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



const numDeVueltas = ( number ) =>{
   
   const miPromesa = new Promise( ( fncCallBackResolve, fncCallBackReject )=>{
    console.log("el numero de vueltas es: "+number);
       if( number <= 2 ){
          fncCallBackResolve("ñomi ñomi, me comi mi elote");
       } else {
          fncCallBackReject( {error: 404, descripcion: "upss se me cayo el elote"}  );
       }
       
   } );
return miPromesa;
}

numDeVueltas(2)
    .then( (response) => console.log("1ra promesa", response));  
numDeVueltas(10)
    .then( (response) => console.log("1ra promesa", response));


//--------------- se encadenan las promesas para que sean asincronas 
const tiempo = "tarde"; 
irPorElElote( tiempo )
    .then( ( response )=> {
        console.log("Promesa", tiempo, response);
        const vueltas = 2;
        numDeVueltas( vueltas)
        .then( response => console.log( tiempo, response ))
        .catch( error => console.log( error ) );
    })

    .catch( ( error )=> console.log(`Promesa rechazada`, error) )
    .finally( ()=> console.log("Se ha terminado tu promesa")  );