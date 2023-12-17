import TopBar from "./components/topBar/TopBar.jsx";
import Intro from "./components/intro/Intro.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contact from "./components/contacts/Contact.jsx";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu.jsx";
import Works from "./components/works/Works.jsx";
import ProgressBar from "./components/progressBar/ProgressBar.jsx";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <ProgressBar />
      <div className="app">
        <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Intro />
          <Portfolio />
          <Works />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
