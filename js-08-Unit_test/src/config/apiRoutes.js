
/** Ruta para obtener todos los productos 
 *  https://fakestoreapi.com/products
 *  /json/gaming-products.json
 * */
const getProductsRoute = () => `/json/gaming-products.json`;

/** Ruta para obtener un producto específico por ID */
const getProductByIdRoute = (id) => `/json/gaming-products/${id}.json`;

export { getProductsRoute, getProductByIdRoute };