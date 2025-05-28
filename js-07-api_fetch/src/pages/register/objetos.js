const myArray = [1,2,3,4];
    const unionArray = myArray.join(" - "); // 1 - 2 -3 - 4 
    myArray.push(5,6,7,8);
    const arrayData = myArray[3]; // 4
    
    for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index];
    }



const myObj = {
    "atributo con espacio" : true, 
    key : "valor",
    name : "Lilianeo",
    firstName : "Trrs",
    email : "lilianeo@matrix.com",
    password : "despertar&",
    birthdate : "1996-01-13",
    isActive : true,
    hobbies :["Despertar el tercer ojo, tomar pastilla roja, comer pure"],
    favoritos :{
        bebidas :["agua", "malteada ferrero", "licuado de mango"],
        comidas : ["chile en nogada", "crepas de nutella philadelphia y fresa"]
    },
    saludar : function myFuntion(persona){
        return `Hola ${persona}`; 
    }
};

const ejecutarObjetos = ()=>{

//Leer datos del objeto
console.log( myObj );
const nombrePersona = myObj.name; // Lilianeo
const favorito = myObj.favoritos.bebidas; // ["agua", "malteada ferrero", "licuado de mango"]
const segundaBebida = favoritos [1];//"malteada ferrero"
const tercerBebida = myObj.favoritos.bebidas[2]; // "licuado de mango"

// Acceder al atributo firstName
/*
-Mas legible y corta
-Usada comunmente y preferida cuando conocer el nombre de la propiedad
*/
const firstName = myObject.firstName; // "Trrs"
/* 
-Soporta nombres con espacio, simbolo o dinamicos
Clave fija y valida                          obj.propiedad
Clave dinamica o con caracteres especiales   obj["clave"]
*/
const primerNombre= myObj["firstName"] // "Trrs"

// ejecutar funciones de mi objeto
const mensaje = myObj.saludar("Taylor Swift");
console.log( mensaje );


// --------------- Optional Chaining -------------------------
// Sirve para acceder a propiedades de objetos de forma segura, evitando
// errores si una propiedad intermedia no existe
// const primeraComida = myObj.favoritos.alimentos; // undefined por que no existe el atributo alimentos
// const primeraComida = myObj.favoritos.alimentos; // Cannot read properties of undefined
const primeraComida = myObj?.favoritos?.alimentos; // undefined

// iterar un objeto
// for in itera sobre los atributos de un objeto
for ( let clave in myObj){
    console.log(clave, myObj[clave]); // myObj.name , myObj.firstName
}

 
}

export {ejecutarObjetos};