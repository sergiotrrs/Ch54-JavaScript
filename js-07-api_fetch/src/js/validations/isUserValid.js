import { validateName } from "./validateName.js";

/**
 * Valida si un usuario es válido
 * @param {object} user - Objeto que representa al usuario
 * @property {string} user.name - Nombre del usuario
 * @property {string} user.email - Correo electrónico del usuario
 * @property {string} user.password - Contraseña del usuario
 * @returns 
 */
const isUserValid = (user) => {
   const result = {
      isValid: true,
      errors: []
    };

    /*
     Validar el nombre del usuario
    */
   const nameValidation = validateName(user.name);
   if (nameValidation.isValid === false) {
      result.isValid = false;
      result.errors.push(nameValidation.errors);
   }
 
    

    return result;
}

export { isUserValid };

