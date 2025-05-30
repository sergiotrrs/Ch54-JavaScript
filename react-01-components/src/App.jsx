import "./App.css";
import { Footer } from "./pages/footer/footer";
import { Home } from "./pages/home/home";
import { Navbar } from "./pages/navbar/navbar";
import { Products } from "./pages/products/products";

function App() {
  const myJsx = (
    <>
      <Navbar title="Día de Harry potter" />
      <Home name="Myrtle la llorona" hogwartsHome="Ravenclaw" />      
      <Home name="Sercherus Snape" hogwartsHome="Slytherin" />
      <Products />
      <Footer cohorte={54} />
    </>
  );

  return myJsx;
}

export default App;
