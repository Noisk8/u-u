import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Canchero from "./componentes/Canchero";
import Calculadora from "./componentes/Calculadora";
import Prueba from "./componentes/Prueba";
import Prueba2 from "./componentes/Prueba2";
import Videos from "./componentes/Videos";

const root = ReactDOM.createRoot(document.getElementById("root"));

const persona2 = {
  edad: 32,
  apellido: "Perez",
};

const persona3 = {
  edad: 33,
  apellido: "TTerez",
};

let videos = [
  {
    titulo: "Video 1",
    poster: "https://via.placeholder.com/150",
    url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
    descripcion: "Video de prueba 1",
    autor: "Juan Perez",
    año: 2021,
  },
  {
    titulo: "Video 2",
    poster: "https://via.placeholder.com/150",
    url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
    descripcion: "",
  },
  {
    titulo: "Video 3",
    poster: "https://via.placeholder.com/150",
    url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
    descripcion: "",
  },
];

root.render(
  <>
    <App />

    <Videos lVideos={videos} />
    <Prueba2 nombre="Jacinto" datos={persona2} />
    <Prueba2 nombre="Pedro" datos={persona3} />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
