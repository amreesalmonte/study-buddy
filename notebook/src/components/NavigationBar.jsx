import React, { useState, useCallback, useEffect, useContext } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from "../styling/colors";
import { RouteConfig } from "../config/RouteConfig";
import UserContext from "../context/UserProvider";
import TimerContext from "../context/TimerProvider";
import { SmallIcon, IconGroup } from "../styling/styles";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const NavigationBarContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	background-color: ${props => props.color ? props.color : colors.purple};
	height: 60px;
	align-items: center;
	color: white;
  justify-content: space-between;
  transition: .2s ease-in-out;
  position: fixed;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin: 20px;
`;

const StyledSmallIcon = styled(SmallIcon)`
  &:hover {
    color: ${colors.yellow};
  }
`;

export default function NavigationBar(props){
  const { timer } = useContext(TimerContext);
  const { user } = useContext(UserContext);

  const location = useLocation();
  const [color, setColor] = useState(null);

  useEffect(()=> {
    if (window.location.pathname === '/') {
      setColor(timer.color)
    } else {
      setColor(null)
    } 
  }, [location, timer]);

  const getIcons = (() => {
    const routes = RouteConfig.filter((route) => {return route.icon !== null})
    return (
      routes.map((component, index) => 
        <NavLink 
          to={component.path}
          style={({ isActive }) => ({
            color: isActive ? colors.yellow : 'white',
            textDecoration: 'none'
          })}
          >
            <StyledSmallIcon>{component.icon}</StyledSmallIcon>
          </NavLink>
        )
    );
  });

  return (
    <NavigationBarContainer color={color}>
      <Title>notebook</Title>
      {user?.isLoggedIn && <IconGroup>{getIcons()}</IconGroup>}
      {
        user?.isLoggedIn ? 
        <LogoutButton/> :
        <LoginButton/>
      }
    </NavigationBarContainer>
  );
}
