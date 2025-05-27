import "/src/assets/css/styles.scss";
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

import { insertMainHeader } from "/src/components/common/header/header";
import { insertMainFooter } from "/src/components/common/footer/footer";
import { insertMainDOM } from "./src/pages/home/home";


/**
 * El método onload de window en JavaScript se utiliza para ejecutar 
 * una función cuando todos los elementos de una página web han 
 * sido completamente cargados, incluidos los elementos como imágenes, 
 * scripts y estilos. Es un evento asociado al objeto window que indica 
 * que el DOM (Document Object Model) y los recursos externos han terminado de cargarse.
 * 
 */
window.addEventListener( "load", async() =>{
    
    insertMainHeader( document.getElementById("header") );

    insertMainDOM( document.getElementById("main") )
    
    insertMainFooter( document.getElementById("footer") );

});





 