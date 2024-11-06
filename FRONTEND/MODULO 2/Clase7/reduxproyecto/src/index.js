import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ContadorRedux from './componentes/ContadorRedux';
import { Provider } from 'react-redux';
import store from './store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
    

    <ContadorRedux />
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();