import React, { useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import { RouteConfig } from "./config/RouteConfig";
import UserContext from "./context/UserProvider";
import PomodoroView from "./views/PomodoroView";

export default function App() {
  const { user } = useContext(UserContext);
  const getRoutes = (() => {
    return (
      RouteConfig.map((component, index) => (
        <Route key={index} path={component.path} element={component.element}/>
      ))
    )
  })

  return (
    <Routes>
      <Route path='/' element={<PomodoroView/>}/>
      {user?.isLoggedIn && getRoutes()}
    </Routes>
  );
}
