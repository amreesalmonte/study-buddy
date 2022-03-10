import React, { useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import { RouteConfig } from "./config/RouteConfig";

export default function App() {
  const getRoutes = (() => {
    return (
      RouteConfig.map((component, index) => (
        <Route key={index} path={component.path} element={component.element}/>
      ))
    )
  })

  return (
    <Routes>
      {getRoutes()}
    </Routes>
  );
}
