import "/src/css/styles.scss";
import "./products.css"
import * as bootstrap from 'bootstrap';


import { insertMainHeader } from "/src/modules/header/header";
import { insertMainFooter } from "/src/modules/footer/footer";
import { getProducts } from "../../modules/api/getProducts/getProducts.js";

window.addEventListener( "load", async() => document.getElementById("app").innerHTML = `
    ${insertMainHeader()} 
    <main class="container text-center my-4">
      <div class="row">
        ${await getProducts("/json/gaming-products.json")}
      </div>
    </main>
    ${insertMainFooter()}
`
);
 
/*
 * En la semana 12, al tener lista nuestra API en SpringBoot
 * Se usaría la URL que se genere en el despliegue de nuestra API
 * getProducts("https://fakestoreapi.com/products");
 *
 */
