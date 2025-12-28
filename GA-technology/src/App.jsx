import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  
  return (
   <div className='mx-4 sm:mx-[10%]'>
    <Navbar/>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />  
    </Routes>
   </div>
  )
}

export default App
