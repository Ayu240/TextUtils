import React, { useState } from 'react';
import Alert from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextFrom';

import { 
  BrowserRouter as Router,
  Routes,
  Route,
  
}from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  return (
   <>
   <Router>

   <Navbar title="TextUtil"  key={new DataTransfer()}/>
   <Alert alert={alert}/>
   <div className="">

    <Routes>

      <Route exact path="/" element={
      <TextForm  showAlert={showAlert} heading="Enter the text analyze"/>}>
      </Route>
    
    </Routes>
   </div>
   </Router>
   </>
  );
}

export default App;
