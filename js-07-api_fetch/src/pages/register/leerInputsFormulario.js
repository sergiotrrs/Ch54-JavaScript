const leerInputsFormulario = (formulario) => {

    const newUser = {
        name: formulario.elements["name"].value,
        familyname: formulario.elements["family-name"].value,
        email: formulario.elements["email"].value,
        password: formulario.elements["new-password"].value,
        birthdate: formulario.elements["bday"].value,
        checkbox: formulario.elements["terminos-condiciones"].checked
    }
    console.table( newUser);

    return newUser;
}
export { leerInputsFormulario };