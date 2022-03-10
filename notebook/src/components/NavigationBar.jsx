import React, { useState, useCallback, useEffect } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from "../styling/colors";
import { RouteConfig } from "../config/RouteConfig";

const NavigationBarContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	background-color: ${props => props.page === '/' ? "none" : colors.purple};
	height: 60px;
	align-items: center;
	color: white;
  justify-content: space-between;
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
`;

const Button = styled.div`
  width: 150px;
  height: 30px;
  background-color: white;
  color: ${colors.purple};
  margin: 20px;
`;

export default function NavigationBar(props){

  const [page, setPage] = useState();

  let location = useLocation();

  useEffect(()=> {
    setPage(window.location.pathname);
  }, [location]);

  const getIcons = (()=> {
    return (
        RouteConfig.map((component, index) => 
        <NavLink 
          to={component.path}
          style={({ isActive }) => ({
            color: isActive ? colors.yellow : colors.white,
          })}
          >
            <Icon>{component.icon}</Icon>
          </NavLink>
        )
    );
  });

  return (
    <NavigationBarContainer page={page}>
      <Title>notebook</Title>
      <IconContainers>{getIcons()}</IconContainers>
      <Button>login</Button>
    </NavigationBarContainer>
  );
}
