import { getAllProducts } from "../../../src/services/productService/getAllProducts";


test("Debe retornar los datos si la respuesta es exitosa", async ()=>{
    const url = "https://fakestoreapi.com/products";
    const result = await getAllProducts( url);
    expect( Array.isArray(result) ).toBeTruthy();
    expect( result[0] ).toHaveProperty("id");
    expect( result[0] ).toHaveProperty("title");
    expect( result[0] ).toHaveProperty("price");
    expect( result[0] ).toHaveProperty("description");
    expect( result[0] ).toHaveProperty("price");

});

 test('debe lanzar error si la respuesta no es ok', async () => {
    const url = "/No-valid/url";
     await expect( getAllProducts( url) ).rejects.toThrow();
 });