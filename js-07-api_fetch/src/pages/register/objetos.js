
const myArray = [1,2,3,4];
    const unionArray = myArray.join(" - "); // 1 - 2 -3 - 4 
    myArray.push(5,6,7,8);
    const arrayData = myArray[3]; // 4
    
    for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index];
    }


const myObj= {
        "atributo con espacio":true,
        key : "valor",
        name : "FerchNeo",
        firstName : "trrs",
        email : "spartan.fernando16@gmail.com",
        password : "despertarRenancer$",
        birthdate : "2025-05-23 ",
        hobbies : ["despertar personas", "verdades incomodas", "comer pure" ],
        favoritos:{
            bebidas: ["agua de horchata", "agua de calzon", "agua que parezca caldo"],
            comidas: ["tacos de birria", "Tacos de pastor"]
        },
        saludar : function myFunction( persona ){
            return `Hola ${persona}`;
        }
    };


const ejecutarObjetos = ()=>{
//Leer datos del objeto 
console.log( myObj );
const nombrePersona = myObj.name; "FerchNeo"
const favoritos = myObj.favoritos.bebidas; //["agua de horchata", "agua de calzon", "agua que parezca caldo"]
const primeraBebida = favoritos[1]; //"agua de calzon"
const terceraBebida = myObj.favoritos.bebidas[2]; // "agua de tamarindo "


//acceder al atributo firstName
const firstName = myObj.firstName 

/* Soporta nombres con espacio */


//ejecutar funciones de mi objeto
const mensaje = myObj.saludar("Fernando");
console.log( mensaje );


//-------------------- Optional Chainig ---------------------------------
//sirve para acceder a propiedades de objetos de forma segura, evitando
//errores si una propiedad intermedia no existe
//const primeraComida = myObj.favoritos.alimentos; //Undefined por no exitir el atributo alimetos
//const primeraComida = myObj.favoritos.alimentos[0]; //Cnnot read properties of undefined 
const primeraComida = myObj?.favoritos?.alimetos[0]; //Undefined 

// iterar un objeto
// for in intera ssobre los atributos  de un objeto  
for ( let clave in myObj){
    console.log(clave, myObj[clave]); //myObj.name, myObj.firstName
}

}

export { ejecutarObjetos };