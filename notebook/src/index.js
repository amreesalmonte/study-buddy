import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import NavigationBar from './components/NavigationBar';
import { TimerProvider } from './context/TimerProvider';

ReactDOM.render(
  <BrowserRouter>
    <TimerProvider>
      <NavigationBar path={window.location.pathname}/>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </TimerProvider>
  </BrowserRouter>,
  document.getElementById('root')
);