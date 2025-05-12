
function saludar(){
    alert('ya casi salimos al segundo descanso')
}

function cambiarFondo(color){
     document.body.style.backgroundColor = color;
}

function changeToGreenColor(){
    const element = document.getElementById("green-paragraph");
    console.log(element);
    element.style.color= "green";
}

function changeToGreenColor(){
    const element = document.getElementById("red-paragraph");
    console.log(element);
    element.style.color= "green";
}

function changeColor( element, color){
    console.log(element);
    element.style.color = color;
}

(function setUp(){
    document.getElementById("title").style.color ="blue";
    document.getElementById("title").style.fontSize ="50px";
})



document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("cambiarBtn");
  const saludo = document.getElementById("saludo");

  boton.addEventListener("click", function () {
    const nuevoNombre = prompt("¿Cuál es tu nombre?");
    if (nuevoNombre && nuevoNombre.trim() !== "") {
      saludo.textContent = `Hola ${nuevoNombre}`;
    }
  });
});
