const myArray = [1, 2, 3, 4];
const unionArray = myArray.join(" - "); // 1 - 2 -3 - 4 
myArray.push(5, 6, 7, 8);
const arrayData = myArray[3]; // 4

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
}


const myObj = {
    key: "valor",
    name: "SerchNeo",
    firstName: "Trrs",
    email: "serchneo@matrix.com",
    password: "despertar&",
    birthdate: "2025-02-25",
    isActive: true,
    hobbies: ["Despertar personas", "Verdades incómodas", "Comer pure"],
    favoritos: {
        bebidas: ["agua", "pozol", "agua de tamarindo"],
        comidas: ["pozole", "tacos de suadero"]
    },
    saludar: function myfunction(persona) {
        reurn`Hola ${persona}`;
    }
};

const ejecutarObjetos = () => {
    // Leer datos del objeto
    const nombrePersona = myObj.name; // SerchNeo
    const favoritos = myObj.favoritos.bebidas; // ["agua", "pozol", "agua de tamarindo"]
    const segundaBebida = favoritos[1]; // "pozol" 
    const terceraBebida = myObj.favoritos.bebidas[2]; // "agua de tamarindo"


    //Acceder al atributo firstName
    /*
    - Más legible y corta
    - Usada comunmente y preferida cuando se conoce el nombre de la propiedad
    
    */
    const primerNombre = myObj.firstName;//
    const firstName = myObj["primerNombre"]; //

    // --------------- Optional Chaining -------------------------
    // Sirve para acceder a propiedades de objetos de forma segura, evitando
    // errores si una propiedad intermedia no existe
    // const primeraComida = myObj.favoritos.alimentos; // undefined por que no existe el atributo alimentos
    // const primeraComida = myObj.favoritos.alimentos; // Cannot read properties of undefined
    const primeraComida = myObj?.favoritos?.alimentos; // undefined
    // iterar un objeto
    // for in itera sobre los atributos de un objeto
    for (let clave in myObj) {
        console.log(clave, myObj[clave]); // myObj.name , myObj.firstName
    }

}
export { ejecutarObjetos };
