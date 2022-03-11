import React, { useState, useCallback, useEffect } from "react";
import styled from 'styled-components';
import { PrimaryButton, Footer, ListItem } from "../styling/styles";

const ProjectsContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
`;

const ProjectsContent = styled.div`
  max-width: 800px;
  width: 80%;
`;


export default function ProjectsListView(props){

  return (
      <ProjectsContainer>
        <ProjectsContent>
          projects
        </ProjectsContent>
        <Footer>
          <PrimaryButton>create new</PrimaryButton>
        </Footer>
      </ProjectsContainer>
  );
}
