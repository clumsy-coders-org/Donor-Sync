import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { UserdataProvider } from "./contextapi/accountdata"
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(


  <React.StrictMode>
    <BrowserRouter>

      <UserdataProvider>
       
        <App />

      </UserdataProvider>



    </BrowserRouter>

  </React.StrictMode>
);


