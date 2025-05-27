import { isUserValid } from '../../js/validations/isValid.js';
import { insertMainHeader as menu } from '../../modules/header/header.js';
import { leerInputsFormulario } from './leerInputsFormulario.js';
import { ejecutarObjetos } from "./objetos.js";

ejecutarObjetos();

menu(document.getElementById("header"));

const registerFrom = document.getElementById("contactForm");


registerFrom.addEventListener("submit", (e) => {
    e.preventDefault(); // evita que se envíe el formulario
    console.log("Manejo del formulario");

    const newUser = leerInputsFormulario(registerFrom);
    const validatedUser = isUserValid( newUser );
    if(validatedUser.isValid){
        //si los datos son validos enviar el formulario
        //usando la api fetch al servidor, con el metodo POST  enviar el formulario 
    }else{
        alert(validatedUser.errors.join("\n"));
    }

});


// Obtener los dtos del formulario.
// Validar los datos
// Si los datos son válidos enviar el formulario
// - Usando la api fetch al servidor, con el método POST enviar el formulario
// = Enviar un mensaje al usuario, limpiar el formulario, redirigir la página
// = Enviar al usuario el error del servidor
// Si los datos no son válidos enviar un mensaje al usuario