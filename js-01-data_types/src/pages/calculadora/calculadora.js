/*
 Objetivo:
 Crear un formulario simple donde el usuario 
 ingrese su edad en años y, al hacer clic en un 
 botón, se muestre su edad en meses.
 Requisitos:
   - Crear un input para que el usuario ingrese su edad (en años).
   - Crear un botón "Calcular".
   - Al hacer clic, mostrar un mensaje con la edad en meses.
   - Usar conversión explícita de string a número (parseInt o Number).
Resultado esperado:
 Si el usuario ingresa 25 y presiona el botón, se muestra:
 Tu edad en meses es: 300
*/

document.addEventListener("DOMContentLoaded", () => { /* para errores de que no se carga el DOM puedo usar document.addEventListener("DOMContentLoaded", () => { ... });*/
  let resultadoEdad = document.getElementById("result");
  let edadDelUsuario = document.getElementById("birthdate");
  let botonParaCalcular = document.getElementById("calculate");

  botonParaCalcular.addEventListener("click", () => {
    let edadEnAnios = parseInt(edadDelUsuario.value);

    resultadoEdad.textContent = `Edad en meses: ${edadEnAnios * 12}`;
  });
});
