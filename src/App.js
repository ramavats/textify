import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

// import About from './components/About';


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
<Navbar title="Textify" aboutText="About" mode={mode} toggleMode={toggleMode} />
<div className="container my-3">
{/* <About/> */}
<TextForm heading="Enter your text below to analyze" mode={mode}/>
</div>
</>
);
}

export default App;
