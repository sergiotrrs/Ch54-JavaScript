import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./pages/footer/footer";
import { Home } from "./pages/home/home";
import { Navbar } from "./pages/navbar/navbar";
import { Products } from "./pages/products/products";
import { NotFound } from "./pages/not-found/notFound";

/*
  BrowserRouter sirve para habilitar el enrutamiento basado en 
  la URL del navegador en tu aplicación React.

  Utiliza la API de Historial de HTML5 para:
   - Mantener la UI sincronizada con la URL: Cuando cambias de "página" 
   en tu aplicación, BrowserRouter actualiza la URL en la barra de 
   direcciones del navegador.
   - Permitir la navegación con los botones de "atrás" y "adelante" 
   del navegador: Escucha los cambios en el historial del navegador
    y actualiza la UI correspondientemente.
*/

function App() {
  const myJsx = (
    <BrowserRouter> {/* Habilita el enrutamiento */} 
      {/*Navbar se mostrará para todas las rutas*/}
      <Navbar title="Día de Harry potter" />      
      <Routes> {/*Define y agrupa un conjunto de rutas*/}
        <Route path="/" element={<Home name="Myrtle la llorona" hogwartsHome="Ravenclaw" />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={ <NotFound />} />
      </Routes>
      <Footer cohorte={54} />
    </BrowserRouter>
  );

  return myJsx;
}

export default App;
