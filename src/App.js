import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// let name = "Samit";

function App() {
  const [mode,setMode] = useState('light'); // wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been activated", "successful");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been activated", "successful");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="SamitSaha" about="About Samit" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>} />
        <Route exact path="/" element={<TextForm heading="Enter your text here" mode={mode} showAlert={showAlert}/>}  />
      </Routes> 
      
      </div>

    </Router>
    </>
    
  );
}

export default App;
