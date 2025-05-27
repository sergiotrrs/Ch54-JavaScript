const validateName = (name)=>{

    const result = {
        isValid: true,
        errors: []
    };

    if(name === ""){
        result.isValid = false;
        result.errors.push("El nombre no debe estar vacio");
    }else if(name.lenght < 3){
        result.isValid = false;
        result.errors.push("El nombre debe tener al menos 3 caracteres");
    }
    return result;
}
export {validateName};