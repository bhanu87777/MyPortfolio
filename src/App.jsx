import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Project1 from "./components/Project/Project1";
import Project2 from "./components/Project/Project2";
import Project3 from "./components/Project/Project3";
import Project4 from "./components/Project/Project4";
import Skills from "./components/Skill/Skills";
import Project from "./components/Project/Project";
import Certificate from "./components/Certificate/Certificate";
import Achievements from "./components/Certificate/Achievements";

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
                <Project />
                <Certificate />
              </>
            }
          />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
