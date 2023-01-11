import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// import { BrowserRouter as Router, Link,Route, Switch } from "react-router-dom";

function App() {
  const [mode,setMode] =  useState('light'); // wheather dark mode is enabled or not

  // const [greenMode, SetGreenMode] = useState('light');

  // const [navigateColor, SetNavigateColor] = useState('light');

  const [alert,SetAlert] =  useState(null);

  const showAlert = (message, type)=>{
    SetAlert({
      msg:  message,
      type: type
    })

    setTimeout(() => {
      SetAlert(null);
    }, 1500);
  }
   


  const toggleMode = ()=>{
 
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      // SetNavigateColor('dark')
      document.title = 'TextUtils - Dark Mode';
      
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);

    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      // SetNavigateColor('light')
      document.title = 'TextUtils - Light Mode';
    }
}

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }
// const toggleGreenMode =  ()=>{
//   if(greenMode === 'green')
//   {
//     SetGreenMode(mode);
//     document.body.style.backgroundColor = mode === "light"?"white":"#042743";
//     showAlert(mode === "light"?"light":"dark" + " mode has been enabled", "success")
//     SetNavigateColor('#082044')

//   }
//   else
//   {
//     SetGreenMode('green')
//     document.body.style.backgroundColor = 'green';
//     showAlert("Green mode has been enabled", "success")
//   }
// }

  return (
   <>
  {/* <Navbar title="TextUtils"  aboutText= "About" navigateColor={navigateColor} mode={mode} toggleMode={toggleMode} toggleGreenMode= {toggleGreenMode} /> */}
  {/* <About/> */}
  {/* <Navbar/>
  <Navbar title="TextUtils" aboutText={"About TextUtils"}/>  */}
       {/* <Route exact path="/">
          <TextForm showAlert={showAlert} heading= "Enter the text to analyze below" mode={mode}/>
        </Route> */}

           {/* <Route path="/about">
          <About />
        </Route> */}
           {/* <Route exact path="/" component={withRouter(<TextForm showAlert={showAlert} heading= "Enter the text to analyze below" mode={mode}/>)} />
          <Route exact path="/about" component={withRouter(About)} />           */}
             {/* <Route path="/about" component={About} /> */}

              {/* <Route path="/" component={<TextForm showAlert={showAlert} heading= "Enter the text to analyze below" mode={mode}/>} />
        <Route path="/about" component={ <About />} /> */}
       {/* <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} heading= "Enter the text to analyze below" mode={mode}/>} />
        <Route path="about/*" element={<About />} />
      </Routes> */}

 <Router>
    <Navbar title="TextUtils"  aboutText= "About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
             <Route exact path='/' element={ <TextForm showAlert={showAlert} heading= "Enter the text to analyze below" mode={mode}/>}/>

            <Route exact path='/about' element={<About/>}/>
        </Routes>
      </div>
</Router>
  </>
  );
}

export default App;
