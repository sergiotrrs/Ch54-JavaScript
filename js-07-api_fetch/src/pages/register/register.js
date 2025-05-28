import { postUser } from "../../../src/js/api/postUser.js";
import { isUserValid } from "../../js/validations/isUserValid.js";
import { insertMainHeader as menu } from "../../modules/header/header.js";
import { leerInputsFormulario } from "../register/leerInputsFornulario.js";
import { ejecutarObjetos } from "../register/objetos.js";
ejecutarObjetos();

menu( document.getElementById("header") );


const registerForm = document.getElementById("contactForm");

// registerForm.addEventListener( "evento" , ()=>{} );
registerForm.addEventListener( "submit" , async ( e )=>{
    e.preventDefault(); // evita que se envíe el formulario
    console.log("Manejo del formulario");
    // console.log( e );
    
    // Obtener los dtos del formulario.
     const newUser = leerInputsFormulario( registerForm );
     // Validar los datos
     const validatedUser = isUserValid( newUser );
    if ( validatedUser.isValid ){
        // Si los datos son válidos enviar el formulario
        try {
            const response = await postUser(newUser, "https://reqres.in/api/users"); 
            alert("Formulario enviado correctamente " + response.createdAt);           
        } catch (error) {
            alert("Error al enviar el formulario: " + error.message);
        }
        // = Enviar un mensaje al usuario, limpiar el formulario, redirigir la página
        // - Usando la api fetch al servidor, con el método POST enviar el formulario
    } else {
        // Si los datos no son válidos enviar un mensaje al usuario
        alert( validatedUser.errors.join("\n") );
    }

    // = Enviar al usuario el error del servidor


} );