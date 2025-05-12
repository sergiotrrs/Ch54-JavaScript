      function mostrarAlerta() {
            alert("¡Hola, mundo!");
        }
        function cambiarColorFondo() {
            document.body.style.backgroundColor = "lightblue";
        }
        function cambiarTexto() {
            document.body.innerHTML = "<h1>¡Texto cambiado!</h1>";
        }

        function cambiarFondo() {
            document.body.style.backgroundColor = "blue";
        }
        function cambiarFont(color){
            document.body.style.backgroundColor= color;
        }
function changeToGreenColor(){
    const element = document.getElementById("green-paragraph");
    console.log(element);
    element.style.color("green");
}
let nom = "Abizaic Salvador";

// Ya no necesitas esperar el DOM si usas defer
document.getElementById("titulo").innerText = "Hola mi nombre es: " + nom;

function cambiarNombre() {
  let nom2 = prompt("¿Cuál es tu nombre?");
   // Verifica que el usuario haya ingresado algo
    document.getElementById("titulo").innerText = "Hola mi nombre es: " + nom2;
 
}