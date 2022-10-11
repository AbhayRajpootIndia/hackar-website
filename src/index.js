import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="hackar-website/" element={<App page={"Home"}/>} />
          <Route path="hackar-website/home" element={<App page={"Home"}/>} />
          <Route path="hackar-website/services" element={<App page={"Services"}/>} /> 
          <Route path="hackar-website/contact" element={<App page={"Contact"}/>} />
          <Route path="hackar-website/about" element={<App page={"About"}/>} />            
        </Routes>
      </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
