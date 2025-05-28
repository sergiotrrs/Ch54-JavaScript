
/**
 *  TDD
 *  TDD (Test-Driven Development) es una metodología de desarrollo 
 *  de software donde las pruebas unitarias se escriben antes del 
 *  código de producción.
 * 
 *  Ventajas de TDD: 
 *  - Te obliga a pensar en los requerimientos antes de codificar.
 *  - Mejora la calidad del código al asegurar que está cubierto por pruebas.
 *  - Facilita la detección de errores rápidamente.
 * 
 */
import { validateName } from "../../../src/utils/validations/validateName";

// test( "mensaje de la prueba" , ()=>{}  );

/*
 .toBe(expected)
 Propósito: Compara valores primitivos (números, strings, booleanos, 
 null, undefined) para una igualdad estricta (similar a === ). 
 También compara objetos por referencia (si son exactamente 
 el mismo objeto en memoria).

 .toEqual(expected)
 Propósito: Compara la igualdad profunda de objetos y arrays. 
 Jest recorre recursivamente las propiedades de los objetos o 
 los elementos de los arrays para verificar que sus contenidos 
 son equivalentes, no solo que sean la misma referencia en memoria.
 https://jestjs.io/es-ES/docs/expect#toequalvalue
*/

test("Debe aceptar un nombre válido", ()=>{
    // expect(valorRecibido).matcher(valorEsperado);
    const response = validateName("Abril");
    expect( response.isValid ).toBe( true );
    // El arreglo de errors debe estar vacío
    expect( response.errors.length).toBe(0);
    expect( response.errors).toEqual([]);
});

/*
 .toBeTruthy()
 Propósito: Verifica si un valor es "truthy" (evalúa a true en un contexto booleano). 
 Esto incluye valores como true, números distintos de cero, strings no vacíos, objetos y arrays.

 .toBeFalsy()
 Propósito: Verifica si un valor es "falsy" (evalúa a false en un contexto booleano). 
 Esto incluye valores como false, 0, -0, null, undefined, NaN, y el string vacío "".

 .toBeGreaterThan(number) / .toBeGreaterThanOrEqual(number)
 Propósito: Compara si un número es mayor que, o mayor o igual que, otro.

 .toBeLessThan(number) / .toBeLessThanOrEqual(number)
 Propósito: Compara si un número es menor que, o menor o igual que, otro.
*/
test("Debe rechazar un nombre vacío", () =>{
    const response = validateName("");
    expect( response.isValid).toBe( false );
    expect( response.isValid).toBeFalsy();
    expect( response.errors.length>0 ).toBe(true);
    expect( response.errors.length>0 ).toBeTruthy();
    expect( response.errors.length).toBeGreaterThan(0);

});

/*
  .toContain(item)
  Propósito: Verifica si un array (o un string) contiene un elemento específico. 
  Para objetos en arrays, usa toContainEqual.

*/
test("Debe rechar un nombre con solo espacios", ()=>{
   const response = validateName("   ");
   expect( response.isValid ).toBeFalsy();
   expect( response.errors.length ).toBeGreaterThan(0);
   expect( response.errors ).toContain("No se permiten espacios en el nombre");

}); 

/*
 test.each o it.each
 Validar una función con muchos casos de entrada sin repetir código.
 
 toHaveProperty(keyPath, value?)
 Propósito: Verifica si un objeto tiene una propiedad específica. 
 Opcionalmente, puedes especificar el valor que esperas en esa propiedad.
*/
const cases = ["je", "Je", "f", "F"]
test.each( cases )("Debe rechazar nombres demasiado cortos", ( name )=>{
  const response = validateName(name);
  expect( response ).toHaveProperty("errors"); //La respuesta es un objeto y tiene la propiedad errors
  expect( response ).toHaveProperty("isValid", false); //La respuesta es un objeto y tiene la propiedad isValid en false
  expect( response.isValid ).toBeFalsy();
  expect( response.errors.length ).toBeGreaterThan(0);
  expect( response.errors ).toContain("El nombre debe tener más de dos caracteres");

});

const noStringCases =[null, 123, undefined];
test.each( noStringCases)("Debe rechazar valores que no son string(null, 123, undefined)", ( value)=>{
  const response = validateName( value );
  expect( response.isValid ).toBeFalsy();
  expect( response.errors.length ).toBeGreaterThan(0);
  expect( response.errors ).toContain("El valor ingresado no es un nombre válido");
});