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

// Esta es la función principal que se ejecutará al hacer clic en el botón
function calcularEdadEnMeses() {
    // Tomamos el valor del input (campo de texto)
    const edadTexto = document.getElementById('birthdate').value;

    // Convertimos ese valor a número
    const edad = Number(edadTexto);

    // Seleccionamos el contenedor donde mostraremos el resultado
    const resultado = document.getElementById('result');

    // Calculamos la edad en meses
    const meses = edad * 12;

    // Mostramos el resultado
    resultado.innerText = "Tu edad en meses es: " + meses;
    resultado.style.color = "lightgreen"; // Muestra el resultado en verde
}

// Esperamos a que la página cargue completamente y conectamos el botón con la función
document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('calculate');
    boton.addEventListener('click', calcularEdadEnMeses);
});
