

const leerInputsFormulario = ( formularios ) =>{

    const newUser = {
        name : formularios.elements ["name"].value,
        /*
        leer el resto de valores
        */
       checkbox: register.elements["terminos-condiciones"].checked
    }

    return newUser;
   

}

export {leerInputsFormulario};