import { getAllProducts } from "../../services/productService/getAllProducts";
import { getProductsRoute } from "../../config/apiRoutes";
import { renderProductCards } from "./renderProductCards";

const loadAndRenderProducts = async (refDom) => {
  const data = await getAllProducts(getProductsRoute());
  console.log(data);
  const products = data;
  const cards = renderProductCards(products);

  refDom.innerHTML = `
      <div class="row">
        ${cards}
      </div>
    `;
};

export { loadAndRenderProducts };
