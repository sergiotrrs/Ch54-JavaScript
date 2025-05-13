function calcularEdad() {
  const input = document.getElementById("fechaNacimiento").value;
  const resultado = document.getElementById("resultado");

  if (!input) {
    resultado.textContent = "Por favor, introduce tu fecha de nacimiento.";
    return;
  }

  const fechaNacimiento = new Date(input);
  const hoy = new Date();

  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const mes = hoy.getMonth() - fechaNacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }

  resultado.textContent = `Tienes ${edad} años.`;
}