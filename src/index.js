import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ItemPage from './components/ItemPage';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

      <BrowserRouter>
            <Routes>
              <Route index element= {<App />} />
              <Route path="books/:id" element={<ItemPage />}/>
       
            </Routes>
       </BrowserRouter>
    
  // </React.StrictMode>
);

