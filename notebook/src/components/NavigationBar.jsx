import React, { useState, useCallback, useEffect, useContext } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from "../styling/colors";
import { RouteConfig } from "../config/RouteConfig";
import TimerContext from "../context/TimerProvider";

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
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin: 20px;
`;

const IconContainers = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.div`
  margin: 20px;
  transition: .2s ease-in-out;
  svg {
      width: 30px;
      height: 30px;
  }
  &:hover {
    color: ${colors.yellow};
  }
  &:visited {
    color: none;
  }
`;

const Button = styled.div`
  width: 150px;
  height: 30px;
  background-color: white;
  color: ${colors.purple};
  margin: 20px;
`;

export default function NavigationBar(props){
  const { timer } = useContext(TimerContext);

  const location = useLocation();
  const [color, setColor] = useState(null);

  useEffect(()=> {
    if (window.location.pathname === '/') {
      setColor(timer.color)
    } else {
      setColor(null)
    } 
  }, [location, timer]);

  const getIcons = (()=> {
    return (
        RouteConfig.map((component, index) => 
        <NavLink 
          to={component.path}
          style={({ isActive }) => ({
            color: isActive ? colors.yellow : 'white',
            textDecoration: 'none'
          })}
          >
            <Icon>{component.icon}</Icon>
          </NavLink>
        )
    );
  });

  return (
    <NavigationBarContainer color={color}>
      <Title>notebook</Title>
      <IconContainers>{getIcons()}</IconContainers>
      <Button>login</Button>
    </NavigationBarContainer>
  );
}
