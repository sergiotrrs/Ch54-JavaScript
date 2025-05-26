function changeName() {
    const name = prompt("¿Cuál es tu nombre?");
    if (name) {
        document.getElementById('greeting').textContent = "Hola " + name;
    }
}