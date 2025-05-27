/*
 Comportamiento de Hoisting y TDZ con var, let y const
 
 En JavaScript, el hoisting es un comportamiento que mueve las 
 declaraciones de variables y funciones al comienzo de su 
 ámbito antes de la ejecución del código. Sin embargo, la forma 
 en que esto ocurre difiere entre var, let y const. Además, 
 let y const introducen el concepto de la Zona Muerta Temporal (TDZ).

var:
- Las declaraciones de variables var se elevan al principio de su 
  ámbito y se inicializan con undefined.
- Se puede acceder a la variable antes de su declaración, pero su valor será undefined.
- Tiene ámbito de función.
- Cuando declaras una variable con var en el ámbito global 
  (es decir, fuera de cualquier función), esa variable se convierte en una 
  propiedad del objeto global (window en navegadores o global en Node.js).
  Es por eso que puedes acceder a ellas a través de window.miVariableVar.

let y const:
- Las declaraciones de variables let y const se elevan al principio de 
  su ámbito de bloque, pero no se inicializan.
- No se puede acceder a la variable antes de su declaración real en 
  el código. Esto se conoce como la Zona Muerta Temporal (TDZ).
- Si intentas acceder a una variable let o const en su TDZ, 
  se producirá un ReferenceError.
- Tienen ámbito de bloque.
- Aunque declares let o const en el nivel superior de un script (globalmente),
  no se adjuntan al objeto global window. Esto los hace más seguros y evita 
  la contaminación accidental del objeto global.

*/


{   // Bloque de nivel superior
  console.log(miVar); // undefined
  // console.log(miLet);  // ReferenceError: TDZ para miLet  
  var miVar = "Hola con var desde el bloque exterior";
  let miLet = "Hola del bloque exterior";
  console.log(miLet); // "Hola del bloque exterior"
  {   // Bloque anidado
    // console.log(miLet); // ReferenceError: TDZ para miLet del bloque anidado
    let miLet = "Hola del bloque anidado";
    console.log(miLet); // "Hola del bloque anidado"
    
    // ----- var no tiene TDZ -----
    console.log(miVar); // "Hola con var desde el bloque exterior";
    var miVar = "Hola con var desde el bloque interior";
    console.log(miVar); // "Hola con var desde el bloque interior"
  }
}