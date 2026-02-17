import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./ThemeProvider";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import TargetViewTracker from "./TargetViewTracker"; // 👈 ADD THIS

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />

        {/* 👇 This listens to route changes and triggers Target views */}
        <TargetViewTracker />

        <div style={{ paddingTop: "120px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
