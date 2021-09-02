import { useState } from "react";
import "./App.css";
import MobileNav from "./components/MobileNav/MobileNav";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Header from "./components/Header/Header";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <NavBar toggle={toggle} />
      <MobileNav toggle={toggle} isOpen={isOpen} />
      <Header />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
