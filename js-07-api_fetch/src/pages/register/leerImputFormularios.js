
const leerInputsFormulario = ( formulario )=>{
    const newUser = {
        name : formulario.elements["name"].value,
        /*
         leer el resto de valores
        */
        checkbox: formulario.elements["terminos-condiciones"].checked
    }
 
    return newUser;
}
export { leerInputsFormulario };