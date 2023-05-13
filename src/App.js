import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import {  BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import About from './components/About';
import ColorConverter from './components/ColorConverter'



function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#343a40'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
 <>
 <Router>
  <Navbar title="Textify" aboutText="About" mode={mode} toggleMode={toggleMode} />
  <div className="container my-3">
  <Routes>  
  <Route path='/about' element={<About mode={mode} />} />
  <Route path='/color-picker' element={<ColorConverter mode={mode} />} />
  <Route path='/' element={<TextForm heading="Enter your text below to analyze" mode={mode}/>} />
  </Routes>
  </div>
  </Router>

</>
);
}

export default App;
