//import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert]= useState(null);
  const showAlert=(message , type)=>
  {
    setAlert(
      {
        msg : message,
        type : type
      }
    )
    setTimeout(()=>
    {
      setAlert(null);
    }
    ,1000)
  }

  const toggleMode = () => 
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is Enabled","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Normal mode is Enabled","success");
    }
  }
  return (
     <>
<Navbar title="Edit Ease" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
    <div className="container">
    <Textform showAlert= {showAlert}heading="Enter the Text" mode={mode}></Textform>
    </div>
    </>
  );
}

export default App;