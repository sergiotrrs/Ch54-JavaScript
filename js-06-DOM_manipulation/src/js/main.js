/*
 Principales métodos y propiedades del DOM para manipular elementos en JavaScript:

Método / Propiedad	                Descripción	                                    Ejemplo
document.getElementById()	        Selecciona un elemento por su ID.	                                document.getElementById("titulo")
document.querySelector()	        Devuelve el primer elemento que coincide con un selector CSS.	    document.querySelector(".btn")
document.querySelectorAll()	        Devuelve todos los elementos que coinciden con un selector CSS.	    document.querySelectorAll("p")
element.innerHTML	                Obtiene o establece el contenido HTML interno.	                    div.innerHTML = "<b>Hola</b>"
element.textContent	                Obtiene o establece el texto interno.	                            div.textContent = "Texto plano"
element.setAttribute()	            Establece un atributo en el elemento.	                            img.setAttribute("src", "foto.jpg")
element.getAttribute()	            Obtiene el valor de un atributo.	                                img.getAttribute("src")
element.classList.add()	            Añade una clase CSS al elemento.	                                div.classList.add("activo")
element.classList.remove()	        Elimina una clase CSS del elemento.	                                div.classList.remove("oculto")
element.style	                    Permite modificar estilos en línea.	                                div.style.color = "red"
document.createElement()	        Crea un nuevo elemento HTML.	                                    const p = document.createElement("p")
parent.appendChild()	            Agrega un nodo hijo al final.	                                    div.appendChild(p)
element.remove()	                Elimina el elemento del DOM.	                                    boton.remove()
element.addEventListener()	        Asocia un evento al elemento.	                                    btn.addEventListener("click", fn)
element.removeEventListener()	    Elimina un evento asociado al elemento.	                            btn.removeEventListener("click", fn)
element.style.display	            Cambia la propiedad de visualización.	                            div.style.display = "none"
element.style.visibility	        Cambia la visibilidad del elemento.	                                div.style.visibility = "hidden"
element.style.cursor	            Cambia el cursor al pasar sobre el elemento.	                    div.style.cursor = "pointer"
*/



/**
 *  Cambiar el contenido de un elemento HTML por medio de su ID
 */
const changeElementById = () =>{
  // document: representa cualquier página web carga en el navegador
  //         sirve como punto de entrada al contenido de la página.
  //         document es el objeto principal del DOM.
    const descripcionOperadores = document.getElementById("descripcion-document");
    console.log( descripcionOperadores );
    // descripcionOperadores.innerText = "document: representa cualquier página web carga en el navegador.";
    //descripcionOperadores.innerText = "<strong>document</strong>: representa cualquier página web carga en el navegador.";
    //descripcionOperadores.innerHTML = "<strong>document</strong>: representa cualquier página web carga en el navegador.";
    descripcionOperadores.innerHTML = '<span class="text-warning">document</span>: representa cualquier página web carga en el navegador.';
}

changeElementById();

/**
 * Modificar elementos por su tag(etiqueta HTML)
 */
const changeElementsByTagName =  () => {
   const listItems = document.getElementsByTagName("li");
   console.log( listItems );

   for( let item of listItems){
     item.innerText = "Mi nuevo li"
   }

}

// changeElementsByTagName();

/**
 * Acceder a un elemento usando el selector universar
 */
const getElementsByQuerySelector = () =>{
                  // document.getElementById("descripcion-operadores");
    const element = document.querySelector("#descripcion-operadores");
    console.log(element);

    const elementParagraph = document.querySelector("p"); // Seleccionar el primer paragraph que se encuentre    
    console.log( elementParagraph );

    const classTextCenter = document.querySelector(".text-center"); // Seleccionar el primer elemento con la clase text-center
    console.log( classTextCenter );

    const anchorAndTextWarning = document.querySelector("a.text-warning"); // primer anchor que tenga la clases text-warning
    console.log( anchorAndTextWarning)
}

getElementsByQuerySelector();

/**
 * Acceder a varios elementos usando el selector universal
 * 
 */
const getListItemsByQuerySelector = () =>{
    const listItems = document.querySelectorAll(".text-start li");
    console.log( listItems );
}

getListItemsByQuerySelector();


// ----------------------- Ejercicio ----------------------------------
// Seleccionar la imagen de dinosaurio que se muestra.
// mostrar en consola el objeto
const getImagenDinosaurio = ( ) => {

}
getImagenDinosaurio( );

// Cambiar la imagen de dinosaurio a la imagen web-developer
const changeImage = () => {


}

const imagenPrincipal = getImagenDinosaurio();
imagenPrincipal.style.cursor = "pointer";

/**
 *  ¿Qué es addEventListener?
 *  Es un método que permite escuchar eventos (como click, keydown, submit, etc.) en un elemento 
 *  del DOM, y ejecutar una función cuando ese evento ocurre.
 * 
 *  Usa addEventListener para código más limpio, modular y flexible. 
 *  Usa onclick solo en scripts simples o casos rápidos.
 * 
 *  Diferencias y ventajas vs onclick
 *  Característica	        addEventListener	                 onclick
 *  Múltiples handlers	    ✅ Permite varios listeners	        ❌ Solo uno, el último sobrescribe
 *  Separación lógica	    ✅ Mantiene mejor el orden del JS	❌ Mezcla estructura y lógica
 *  Soporte de eventos	    ✅ Soporta todos los eventos	        ❌ Solo click
 *  Compatibilidad	        ✅ Funciona en todos los navegadores	❌ No soportado en IE8 y anteriores
 *  Remoción de eventos	    ✅ Se puede eliminar fácilmente	    ❌ No se puede eliminar
 *  Compatibilidad con IE   ✅ Funciona en IE9+	                ❌ Solo en IE8 y anteriores
 *  
 * 
 */
// imagenPrincipal.addEventListener( evento , callback );
// imagenPrincipal.addEventListener( "click" , changeImage );
imagenPrincipal.addEventListener( "click" , ()=>{
    // Hacer otras cosas
    changeImage();
} );


// ------------------ Propiedades de visualización ---------------
//                       Desaparecer el elemento
// display : none (quitar el elemento del DOM)
// visibility: hidden (ocultar el elemento)

// refBtnPrimary = document.quearySelector("#btn-primary")
refBtnPrimary = document.getElementById("btn-primary");
refBtnSecondary = document.getElementById("btn-secondary");
refBtnSuccess = document.getElementById("btn-success");

refBtnPrimary.addEventListener("click", ()=>{
    refBtnPrimary.style.display = "none";
} );

// Aplicar visibility = "hidden" para el btn-secondary
refBtnSecondary.addEventListener("click", () => {
    refBtnSecondary.style.visibility = "hidden";
});

// Reestablecer la visualizacion de los botones primary y secondary
// Usando el evento mouseover : Se activa cuando el puntero del ratón pasa sobre el botón
// display: "block"      visibility: "visible"
refBtnSuccess.addEventListener ( "mouseover", () => {
    refBtnPrimary.style.display = "block";
    refBtnSecondary.style.visibility = "visible"; 
} );