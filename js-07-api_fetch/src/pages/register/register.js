import {insertMainHeader as menu} from "../../modules/header/header.js";
import { leerInputsFormulario } from "./leerInputsFormulario.js";
import { ejecutarObjetos } from "./objetos.js";
ejecutarObjetos();

menu(document.getElementById("header"));


const registerForm = document.getElementById("contactForm");

//registerForm.addEventListener("evento", ()=>{} );
registerForm.addEventListener("sumit", (e)=>{
    e.preventDefault(); //evita que se envie el formulario
    console.log("Manejo del formulario")
    //console.log( e );

    //obtener los datos del formulario.
    const newUser = leerInputsFormulario( registerForm);
    console.log(newUser);

    //Validar los datos

    //Si los datos son válidos enviar el formulario 
       // - Usando la api fetch, con el metodo POST enviar el formulario
          // - Enviar un mensaje al usuario, limpiar el formulario, redirigir la página 

          // - Enviar al usuario el error del servidor

    // Si los datos no son validos enviar un mensaje al usuario      

}); 