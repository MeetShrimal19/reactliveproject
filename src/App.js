import { useState } from 'react';
//import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Error from './components/Error';
import Profile from './components/Profile';


function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState(null);
  ///const [count, setCount]=useState(0);

  const showAlert=(message,type)=>
  {
      setAlert(
        {
          msg: message,
          type: type
        }
      )
      setTimeout(() => {
        setAlert(null); 
      }, 3000);
  }
  const toggelMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled", "success");
      document.title="TextUtils - DarkMode";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
      document.title="TextUtils - LightMode";
    }
  }

  return (
    <>
    
    <Navbar title="TextUtils" about="About" mode={mode} toggelMode={toggelMode}/>
    <Alert alert={alert}/>
    
    <div className="container my-3">
    {/* <Routes>
          <Route exact path="/about" element={ }>
        
           
          </Route>
          <Route exact path="/" element={}>
               
          </Route>
          <Route path='*' element={<Error/>}>
        </Route>
        
        </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text below"/>
        <Profile text={{name:'meet'}}/>
      {/* <h1>use state {count}</h1> */}
        {/* <About /> */}
    </div>
    
    </>  
  );
}

export default App;
