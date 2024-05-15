// This is the main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import store from './store/store';




// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
    
//     <BrowserRouter>
//     <I18nextProvider i18n={i18n}>
//     <App />
//     </I18nextProvider>
      
//     </BrowserRouter>
 
//   </React.StrictMode>
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);