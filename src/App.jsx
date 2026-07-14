import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skill/Skills";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";
import Certificate from "./components/Certificate/Certificate";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Project />
                <Certificate />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
