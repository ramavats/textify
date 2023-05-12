import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';


function App() {
  return (
    <>
<Navbar title="Textify" aboutText="About" />
<div className="container my-3">
{/* <About/> */}
<TextForm heading="Enter your text below to analyze"/>
</div>
</>
);
}

export default App;
