import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseState from './componentes/UseState';
import UseStateClass from './componentes/UseStateClass';
import CicloDeVidaClass from './componentes/CicloDeVidaClass';
import Eventos from './componentes/Eventos';
import FormularioControlado from './componentes/FormularioControlado';
import FormularioNoControlado from './componentes/FormularioNoControlado';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

{/* <UseState /> */}
    {/* <CicloDeVidaClass /> */}
    {/* <UseStateClass /> */}
    {/* <Eventos /> */}

    <FormularioControlado />
    {/* <FormularioNoControlado /> */}

  </div>
    


  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
