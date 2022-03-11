import React, { useState, useCallback, useEffect } from "react";
import styled from 'styled-components';
import { Article } from '@mui/icons-material';
import { colors } from "../styling/colors";
import { PrimaryButton, Footer, ListItem} from "../styling/styles";

const FlashcardsContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
`;

const Icon = styled.div`
  transition: .2s ease-in-out;
  margin-right: 10px;
  color: ${colors.purple};
  svg {
      width: 40px;
      height: 40px;
  }
`;

export default function FlashcardsListView(props){
  return (
      <FlashcardsContainer>
        <ListItem>
          <Icon><Article/></Icon>
          flashcards
        </ListItem>
        <Footer>
          <PrimaryButton>create new</PrimaryButton>
        </Footer>
      </FlashcardsContainer>
  );
};