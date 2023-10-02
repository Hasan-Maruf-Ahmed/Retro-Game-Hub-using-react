import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home, About, Contact, Games, Tetris } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/games/tetris" element={<Tetris />} />
      </Routes>
    </div>
  );
}

export default App;
