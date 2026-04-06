import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./ThemeProvider";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Sounds from "./pages/Sounds";
import SoundDetail from "./pages/SoundDetail";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <div style={{ paddingTop: "120px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/sounds" element={<Sounds />} />
            <Route path="/sounds/:id" element={<SoundDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
