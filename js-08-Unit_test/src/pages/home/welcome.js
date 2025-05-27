

const welcome = ()=>{
    return `
    
        <section class="row align-items-center justify-content-center" id="main-content">
            <!-- logo -->
            <figure class="col-lg-5 col-9">
                <img class="img-fluid rounded" src="/images/dino.jpg" alt="Dinosaurio rex escribiendo código" />
            </figure>
            <!-- principal title -->
            <div class="col-lg-3 col-12 text-warning">
                <h1>JS 09</h1>
            </div>
            <!-- sesion description -->
            <div class="col-lg-4 col-12 text-start">
                <h2 class="text-center">Introducción a NPM</h2>
                <p>
                <span class="text-warning">NPM</span>
                es un administrador de paquetes para el lenguaje de programación JavaScript. Las personas pueden usar NPM para
                adaptar paquetes de código para aplicaciones, o incorporar paquetes tal como están, descargar herramientas
                independientes para usar de inmediato, o compartir código con cualquier usuario de NPM en cualquier parte.
                </p>
                <p>
                La Interfaz de Línea de Comandos (CLI) de NPM se ejecuta desde una terminal, y así es como la mayoría de los
                desarrolladores interactúan con NPM.
                </p>
                <p>
                Un <span class="text-warning">package.json</span> está presente en el directorio raíz de cualquier aplicación o módulo de Node y se usa para
                definir las propiedades de un paquete. Con package.json, se pueden administrar dependencias y escribir
                scripts. Los metadatos de identificación en package.json describen el proyecto: su nombre, propósito, versión
                y mucho más.
                </p>
                <h5 class="text-center">Objetivos de aprendizaje:</h5>
                <ul>
                    <li>Explicar NPM.</li>
                    <li>Crear un nuevo proyecto NPM.</li>
                    <li>Explicar la estructura del archivo package.json.</li>
                    <li>Agregar dependencias a un proyecto NPM.</li>
                    <li>Agregar y ejecutar comandos a un archivo package.json.</li>
                    <li>Instalar y utilizar la biblioteca de cliente HTTP de Axios.</li>
                </ul>
            </div>
        </section>
  
    `;
}

export {welcome};