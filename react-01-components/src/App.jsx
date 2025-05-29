import "./App.css";
import { Footer } from "./pages/footer/footer";
import { Home } from "./pages/home/home";
import { Navbar } from "./pages/navbar/navbar";

function App() {
  const myJsx = (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );

  return myJsx;
}

export default App;
