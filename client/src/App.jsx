//App.jsx
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import './app.css'
import 'materialize-css/dist/css/materialize.min.css';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        < Footer />
      </BrowserRouter>
    </>
  );
}

export default App
