import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import React , { useState } from 'react';

function App () {

  const [mode1, setMode1] = useState('light'); 
  const [alert, setAlert] = useState(null);
  const showAlert =(message , type)=>{
    setAlert({message:message , type:type})
setTimeout(()=>{
  setAlert(null);
} , 1500);
    
}
   const changeMode1 = ()=>{
    if (mode1==='light'){
      setMode1('dark');  
      document.body.style.backgroundColor= 'grey';
      showAlert("Website is converted into dark mode" , "success");
    }
    else{
      setMode1('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Website is converted into white Mode" , "success");
    }
  }
  return (
   
    <React.Fragment>
       <Alert alert={alert}/>
        <Navbar mode1={mode1} changeMode1={changeMode1}  />
      
      {/* <Routes> */}
        {/* <Route path="/about" element= */}
        {/* {<About/>} */}
        {/* /> */}
        {/* <Route path="/textform" element= */}
        {<TextForm showAlert={showAlert} mode1={mode1} changeMode1={changeMode1} />}
        {/* /> */}
    
      {/* </Routes> */}
       
  
     {/*  */}
         
          {/* <TextForm showAlert={showAlert} mode1={mode1} changeMode1={changeMode1} /> */}
           
          {/* <About/> */}
    </React.Fragment>

  );
  }

export default App;
