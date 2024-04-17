//App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Properties from "./components/Properties/Properties";
import About from "./components/About/About";
import Details from "./components/Details/Details"

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/properties" element={<Properties />} />
          <Route path="/About" element={<About />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
