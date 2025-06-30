import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Sidebare from "./Sidebare/sidebare";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/home";
import About from "./About/about";
import Skills from "./Skills/skills";
import Projects from "./projects/projects";
import LanguageSelector from "./i18n/selector";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="layout">
          <Sidebare />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About/>} />
              <Route path="/skills" element={<Skills/>} />
              <Route path="/projects" element={<Projects/>} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
