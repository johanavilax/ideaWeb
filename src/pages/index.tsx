// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React, {useState,useRef} from "react"
import "../styles/styles.scss"
import Header from  "../components/header"
import Quienes from "../components/quienes"
import Start from "../components/start"
import Portafolio from "./portafolio"
import Servicios from "./servicios"

const Index = () => {
  const [start,setstart]=useState(false)
  return(
<> 
    <Header/>
    <Start setstart={setstart}/>
    <Quienes start={start}/>
        {/* <Servicios/>
        <Portafolio/> */}



</>
)}

export default Index
