import "/src/assets/css/styles.scss";
import "./products.css"
import * as bootstrap from 'bootstrap';

import { insertMainHeader } from "/src/components/common/header/header";
import { insertMainFooter } from "/src/components/common/footer/footer";
import { loadAndRenderProducts } from "../../components/productCard/loadAndRenderProducts";


window.addEventListener( "load", async() =>{
    
    insertMainHeader( document.getElementById("header") );

    await loadAndRenderProducts( document.getElementById("main") );
    
    insertMainFooter( document.getElementById("footer") );

});
 
/*
 * En la semana 12, al tener lista nuestra API en SpringBoot
 * Se usaría la URL que se genere en el despliegue de nuestra API
 * getProducts("https://fakestoreapi.com/products");
 *
 */
