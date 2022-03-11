import React, { useState, useCallback, useEffect } from "react";
import styled from 'styled-components';
import { PrimaryButton, Footer, ListItem } from "../styling/styles";

const ProjectsContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function ProjectsView(props){

  return (
      <ProjectsContainer>
        projects
        <Footer>
          <PrimaryButton>create new</PrimaryButton>
        </Footer>
      </ProjectsContainer>
  );
}
