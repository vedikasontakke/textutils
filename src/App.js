import React , {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {

    // State to manage the current mode (light or dark)
    const [mode, setMode] = useState('light');

    // alert state
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
       
      // here alert is a object 
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(() => {
        setAlert(null);
        }, 1500);
    }

    // Function to toggle the mode between light and dark
    const toggleMode = () => {
      if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = "#00001a";
        showAlert("Dark mode has been enabled", "success");

        // used to chnage the document title dynamically
       // document.title = 'TextUtils - Dark MOde';
      } else {
        setMode('light');
        document.body.style.backgroundColor = "#e6e6e6";
        showAlert("Light mode has been enabled", "success");

        // used to chnage the document title dynamically
       // document.title = 'TextUtils - Light MOde';
      }
    }
  

  return (
    <Router>
      <div>
         {/* Pass mode and toggleMode function as props to Navbar */}
        <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert = {alert}/>
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Try TextUtils" mode={mode}  showAlert={showAlert}/>} />
            <Route path="/about" element={<About mode={mode} toggleMode={toggleMode} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
