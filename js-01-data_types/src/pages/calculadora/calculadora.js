/*Crear un formlario donde el usuaro ingrese su edad y al hacer clic en un boton se muestre su edad en meses

Requisitos
- Crear un input para que el usuario ingrese su edad ( en años).
- Crear un botón "Calcular".
 - Al hacer clic, mostrar un mensaje con la edad en meses.
- Usar conversión explícita de string a número (parseInt o Number).
Resultado esperado:
 Si el usuario ingresa 25 y presiona el botón, se muestra:
 Tu edad en meses es: 300

 */

 function edad_meses(){
    const edad = document.getElementById('calculate').value;
    const edad_num = parseInt(edad)

    const calculado = edad_num * 12

  document.getElementById('result').innerText = `Tienes ${calculado} meses`;


 }