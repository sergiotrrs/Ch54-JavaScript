import "./footer.css"

const desestructuracion = ()=>{
    let a = 10;
    let b = 20;
    // pasar el valor de a -> b y el valor de b->a
    let temporal = a;
    a = b;
    b = temporal;

    // La desestructuración en JavaScript es una forma 
    // concisa de extraer valores de arrays o propiedades 
    // de objetos y asignarlos a variables.
    [b, a] = [a,b];

    const gryffindor = ["Harry", "Ron", "Neville", "Hermione" , "Ginny"];
    /*let protagonista;
    let amigo;
    let amiga;*/
    const [protagonista, amigo, , amiga ] = gryffindor;
    /*protagonista = gryffindor[0];
    amigo = gryffindor[1];
    amiga = gryffindor[3];*/

    // desestucturación en objetos
    const hadSelector = {
        nombre: "Jen",
        color: "canela pasión",
        edad: 26,
        origen: "howards",
        isMagic: true,
        casas:{
            slytherin : "🐍Astutos y ambiciosos",
            hufflepuff: "🦡 Leales y trabajadores",
            revenclaw: "🦅Listos y curiosos",
            gryffindor: " 🦁 valientes y atrevidos"
        }
    }
      // {} = {};
    const {edad, nombre, origen:location } = hadSelector;
/*  const nombre = hadSelector.nombre;
    const edad = hadSelector.edad;    
    */
   console.log( nombre, edad, location); // Jen 26 howards

   // Obetner el valor de slytherin y asignarla a la variable myHouse
   // const { casas } = hadSelector; //{ }
   // const { slytherin:myHouse } = casas; //  "Astutos y ambiciosos"
    const { casas:{slytherin:myHouse} } = hadSelector;
   console.log(myHouse);


};
desestructuracion();


const Footer = ( {cohorte:ch} ) =>{

    return ( 
        <footer>
            <p>{ch}- 2025</p>
            <em>Es leviosa, no leviosaá</em>
        </footer>
    );

};

export { Footer };