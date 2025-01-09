import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";

function App() {

  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<h1>Projects Page</h1>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/contact" element={<h1>Contact Us Page</h1>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
