/*
 El uso de JavaScript como módulo en HTML se ha vuelto una práctica 
 estándar y altamente recomendada en el desarrollo web moderno. 
 Esto se debe a que los módulos ES (ECMAScript) resuelven muchos 
 problemas que existían con la forma tradicional de incluir scripts, 
 como la contaminación del ámbito global y la dificultad para 
 organizar grandes bases de código.

 Ventajas del uso de módulos:
- Organización del código: Facilita la división de la aplicación en 
  archivos más pequeños y manejables, cada uno con una responsabilidad específica.
- Reutilización de código: Permite compartir funciones, clases y datos 
  entre diferentes partes de la aplicación o incluso entre diferentes proyectos.
- Mantenibilidad: El código modular es más fácil de entender, depurar y 
  modificar, ya que los cambios en un módulo generalmente no afectan a otros 
  a menos que las interfaces de exportación/importación cambien.
- Prevención de conflictos: Al evitar la contaminación del ámbito global, 
  se reducen las posibilidades de que variables o funciones con el mismo nombre 
  entren en conflicto.
- Rendimiento: La carga diferida y la ejecución única contribuyen a una 
  mejor performance de la aplicación web.

Características clave de los módulos JS:
- Ámbito de Módulo (Scope): Las variables, funciones y clases declaradas 
  en un módulo están limitadas al ámbito de ese módulo. No contaminan 
  el ámbito global del navegador, lo que reduce los conflictos de nombres 
  y mejora la robustez del código. Solo lo que se exporta es accesible desde fuera.
- Modo Estricto por Defecto: Todo el código dentro de un módulo se ejecuta 
  automáticamente en modo estricto ("use strict"). Esto ayuda a escribir código 
  más seguro y a evitar errores comunes al imponer ciertas restricciones en la 
  sintaxis de JavaScript.
- Carga Diferida (defer) por Defecto: Los scripts de módulo se cargan y ejecutan 
  de forma asíncrona, de manera similar a como lo haría un script con el atributo 
  defer. Esto significa que el navegador puede seguir construyendo el DOM mientras 
  se carga el script, y el script solo se ejecutará una vez que el HTML esté completamente 
  parseado. Esto mejora el rendimiento de carga de la página.
- Ejecución Única: Si un módulo se importa varias veces en diferentes lugares de tu 
  aplicación, su código solo se ejecutará una vez. Las exportaciones se crean una sola 
  vez y se comparten entre todos los importadores, lo que evita la redundancia y asegura 
  la consistencia.


  La clave para usar módulos en HTML es el atributo type="module" en la etiqueta <script>
  <script type="module" src="main.js"></script>


  =================   Importación y Exportación (import y export) =================   
  
  La característica más importante de los módulos es la capacidad de importar y exportar 
  funcionalidades entre diferentes archivos JavaScript. Esto permite una modularización 
  real del código.

  export (exportar):
  Se utiliza para hacer que funciones, variables, clases, etc., de un módulo sean accesibles 
  desde otros módulos.

  export const PI = 3.14159;

  export function sumar(a, b) {
    return a + b;
  }

  También puedes exportar por defecto (solo uno por módulo):
  export default function saludar(nombre) {
    return `¡Hola, ${nombre}!`;
  }

  =================    import (importar): =================   
  Se utiliza para traer funcionalidades exportadas de otros módulos a tu módulo actual.
  
  Importar exportaciones con nombre
  import { PI, sumar, Calculadora } from './utils.js';

  Importar la exportación por defecto
  import miSaludo from './utils.js'; // Puedes darle el nombre que quieras

*/


// importa las funciones del footer y header e invócalos para que se ejecuten

import { insertMainHeader } from "../modules/header/header.js";

insertMainHeader(document.getElementById("header") );

//footer 

import { insertMainFooter } from "../modules/footer/footer.js";
insertMainFooter( document.getElementById( "footer" ) );




//con export default
  //insertMainHeader( document.getElementById("header") );
  //footer( document.getElementById("footer") );
/*
  Uso del local Storage.

  LocalStorage es una API de almacenamiento en el navegador que permite guardar 
  datos de forma persistente sin fecha de expiración.

  Características:
    - Almacena hasta 5MB por dominio.
    - Los datos persisten incluso si el usuario cierra el navegador.
    - Puedes guardar objetos con JSON.stringify().

  Métodos clave:
    localStorage.setItem("clave", "valor") → Guarda un dato.
    localStorage.getItem("clave") → Obtiene un dato.
    localStorage.removeItem("clave") → Elimina un dato.
    localStorage.clear() → Borra todo el almacenamiento.

*/

/*
 Crear en el HTML un input y un botón para guardar el valor en el localStorage.
  
  Al cargar la página, si hay un valor guardado, mostrarlo en el titulo H1 "Hola, {nombre}".
  En caso contrario, mostrar "Hola, persona invitada".
*/

document.addEventListener('DOMContentLoaded', () => {
  const greetingTitle = document.getElementById('greeting-title');
  const nameInput = document.getElementById('name-input');
  const saveButton = document.getElementById('save-name-btn');

  // Verificar si hay un nombre en localStorage
  const savedName = localStorage.getItem('nombre');
  if (savedName) {
    greetingTitle.textContent = `Hola, ${savedName}`;
  } else {
    greetingTitle.textContent = 'Hola, persona invitada';
  }

  // Guardar el nombre cuando se haga clic en el botón
  saveButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) {
      localStorage.setItem('nombre', name);
      greetingTitle.textContent = `Hola, ${name}`;
      nameInput.value = '';
    }
  });
});

// NO lo debemos hacer
//window.aLlamadaBotonGuardar = manejoDelBotonGuardar; 


/**
 *  ¿Qué es addEventListener?
 *  Es un método que permite escuchar eventos (como click, keydown, submit, etc.) en un elemento 
 *  del DOM, y ejecutar una función cuando ese evento ocurre.
 * 
 * */

//const refSaveButton = document.getElementById("btnGuardar");
//refSaveButton.addEventListener( "click", manejoDelBotonGuardar  );

/* const refNameInput = documento.getElementById("nombreInput");
refNameInput.addEventListener( "keydown" , ( event )=>{
  console.log(event.key);
}); */


/*
  Programación síncrona.
 
  Ejecutar una tarea después de otra, de manera secuencial.
  Si una tarea tarda mucho tiempo en completarse, puede bloquear el hilo
  de ejecución.

*/

const primerPaso = () => {
  console.log("01 - Inicio de mi programa");
};

const segundoPaso = () => {
  console.log("02 - Desarrollo de mi programa");
  for (let i = 0; i < 1_000_000_000; i++) {
    i * 2;
  }
};

const tercerPaso = () => {
  console.log("03 - Fin de mi programa");
};


/* primerPaso();
segundoPaso(); // Este proceso demora tiempo
tercerPaso(); */


/*
 Programación asíncrona.

 Las tareas no se bloquean entre sí.
 La programación asíncrona es fundamental en JavaScript para
  realizar operaciones no bloqueantes, como peticiones HTTP, 
  operaciones de lectura/escritura de archivos, etc., 
  lo que mejora el rendimiento y la capacidad de respuesta 
  de las aplicaciones.

  setTimeout()
   Establece un temporizador que ejecuta una función de callback
   una vez que expire el temporizador

   sintaxis:
     setTimeout( fncCallback, tiempo_ms, argumentos_fnc );
     setTimeout( ()=>{}  , tiempo_ms );

*/

const saludarTranscurridosXSseg = ( milisegundos ) =>{

  const saludar = ( nombre, apellido ) => alert(`Hola ${nombre} mi apellido es ${apellido}`);

  setTimeout( saludar, milisegundos, "Morfeo", "Facundo" );

}
/* console.log("Antes de salir");
saludarTranscurridosXSseg ( 5000 );
console.log("Despues de saludar");

 */
