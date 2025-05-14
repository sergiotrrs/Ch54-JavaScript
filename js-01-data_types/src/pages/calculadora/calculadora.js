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

 const edad = document.getElementById('birthdate').value;

*/
// Función principal que inicializa los eventos

function initCalculadora() {
    const inputEdad = document.getElementById('birthdate');
    const btnCalcular = document.getElementById('calculate');
    const resultado = document.getElementById('result');

    btnCalcular.addEventListener('click', () => {
        const edad = obtenerEdad(inputEdad.value);
        if (!esEdadValida(edad)) {
            mostrarResultado("Por favor ingresa una edad válida entre 1 y 120.", resultado, true);
            return;
        }

        const edadMeses = calcularEdadEnMeses(edad);
        mostrarResultado(`Tu edad en meses es: ${edadMeses}`, resultado);
    });
}

// Convierte el valor ingresado en número entero
function obtenerEdad(valor) {
    return parseInt(valor, 10);
}

// Valida que la edad sea un número razonable
function esEdadValida(edad) {
    return !isNaN(edad) && edad > 0 && edad <= 120;
}

// Convierte edad en años a meses
function calcularEdadEnMeses(edad) {
    return edad * 12;
}

// Muestra el resultado en pantalla
function mostrarResultado(mensaje, elemento, esError = false) {
    elemento.textContent = mensaje;
    elemento.classList.toggle('text-danger', esError);
    elemento.classList.toggle('text-success', !esError);
}

// Ejecuta la función cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initCalculadora);
