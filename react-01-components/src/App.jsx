import "./App.css";
import { Footer } from "./pages/footer/footer";
import { Home } from "./pages/home/home";
import { Navbar } from "./pages/navbar/navbar";

function App() {
  const myJsx = (
    <>
      <Navbar />
      <Home name="Myrtle la llorona" hogwartsHome="Ravenclaw" />
      <Home name="Sercherus Snape" hogwartsHome="Slytherin" />
      <Footer cohorte={54} />
    </>
  );

  return myJsx;
}

export default App;
