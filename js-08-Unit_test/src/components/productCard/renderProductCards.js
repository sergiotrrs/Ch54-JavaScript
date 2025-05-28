import { ProductCard } from "./ProductClass/ProductCard";


const renderProductCards = (products) => {

  const productsObj = products.map((product) => {
    // Create a new instance of ProductCard for each product
    const newProduct = new ProductCard(
      product.id,
      product.title,
      product.description,
      product.price,
      product.category,
      product.image,
      product.rating
    );
    // Generate the HTML for the product card
    return newProduct.generateHTML();
  });

  // Join all the product card HTML strings into a single string
  return productsObj.join("");
};

export { renderProductCards };
