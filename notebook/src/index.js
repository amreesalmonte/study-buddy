import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import NavigationBar from './components/NavigationBar.jsx';

ReactDOM.render(
  <BrowserRouter>
      <NavigationBar path={window.location.pathname}/>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);