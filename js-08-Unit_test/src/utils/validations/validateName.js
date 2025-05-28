const validateName = (name) => {
  const result = {
    isValid: true,
    errors: [],
  };

  if (typeof name !== "string") {
    result.isValid = false;
    result.errors.push("El valor ingresado no es un nombre válido");
  } else if (name === "") {
    result.isValid = false;
    result.errors.push("El nombre no debe estar vacío");
  } else if (name.length < 3) {
    result.isValid = false;
    result.errors.push("El nombre debe tener más de dos caracteres");
  } else if (name.trim() === "") {
    result.isValid = false;
    result.errors.push("No se permiten espacios en el nombre");
  }

  return result;
};

export { validateName };
