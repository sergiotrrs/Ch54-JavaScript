import { postUser } from "../../js/api/postUser/postUser.js";
import { isUserValid } from "../../js/validations/isUserValid.js";
import {insertMainHeader as menu} from "../../modules/header/header.js";
import { leerInputsFormulario } from "./leerInputsFormulario.js";
//import { ejecutarObjetos } from "./objetos.js";
//ejecutarObjetos();

menu(document.getElementById("header"));


const registerForm = document.getElementById("contactForm");

//registerForm.addEventListener("evento", ()=>{} );
registerForm.addEventListener("submit", (e)=>{
    e.preventDefault(); //evita que se envie el formulario
    console.log("Manejo del formulario")
    //console.log( e );

    //Obtener los datos del formulario.
    const newUser = leerInputsFormulario( registerForm);
    //Validar los datos
    const validatedUser = isUserValid( newUser )
    if (validatedUser.isValid){
 //Si los datos son válidos enviar el formulario 
 try {
    const response = await postUser(newUser, "https://reqres.in/api/users"); 
    alert("Formulario enviado correctamente " + response.createdAt);           
} catch (error) {
    alert("Error al enviar el formulario: " + error.message);
}
        // - Enviar al usuario el error del servidor
       // - Usando la api fetch, con el metodo POST enviar el formulario
    } else {
        alert(validatedUser.errors.join("\n"));
    }

          // - Enviar un mensaje al usuario, limpiar el formulario, redirigir la página 


    // Si los datos no son validos enviar un mensaje al usuario      

} ); 