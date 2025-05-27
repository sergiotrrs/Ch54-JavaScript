
/**
 * Obtener el nombre de la página HTML
 * @param {string} filePath url del archivo html    
 * @returns el nombre de la página html
 */
const getHtmlPageName = ( filePath ) => {
    return filePath.split("/").pop();
}

export { getHtmlPageName };