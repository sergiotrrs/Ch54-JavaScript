import { useState } from "react";

/*
 Un componente en React se renderiza baja ciertas condiciones:

  - Cambio en las props: Si las props que recibe el componente cambian, este
   se vuelve a renderizar.
  - Cambio de estado( useState): Si el estado del componente cambia, este
   se vuelve a renderizar.
  - Cambio en el componente Parent: Si un parent se renderiza, los child también
   lo harán.

   Sintaxis de useState:
   const [estado, setEstado] = useState(valorInicial);
    - estado: Es el valor actual del estado.
    - setEstado: Es la función que se usa para actualizar el valor del estado.
    - valorInicial: Es el valor inicial que se le asigna al estado.

   Reglas de uso de useState:
    - useState solo se puede usar dentro de componentes funcionales.
    - No se puede usar condicionalmente o en loops.
    - El valor del estado se mantiene entre renderizados del componente

    N. renderización          ValorInicial     count   setCount
         1                        1              1       setCount( count + 2 );
         2                        -              3       setCount( count + 2 );
         3                        -              5       setCount( count - 1 );
         4                        -              4

*/
const ProductCard = () => {
    
    const [count, setCount ] = useState( 1 );
 
    const handleIncrement = (maxValue)=>{
        console.log("Estoy en el manejo de incremento");
        if(count < maxValue ) setCount( count + 1);
        console.log("Valor de count: " + count);
    }

    const handleDecrement = (minValue)=>{
        console.log("Estoy en el manejo de decremento");
        if(count > minValue ) setCount( count - 1 );
        console.log("Valor de count: " + count);
    }

    return (
        <div>
            <p>title</p>
            <p>raiting</p>
            <p>price</p>
            <p>{count}</p>
            <button onClick={ ()=>handleDecrement(1) }>-</button>
            <button onClick={ ()=>handleIncrement(10) }>+</button>
        </div>

    );




}

export { ProductCard };