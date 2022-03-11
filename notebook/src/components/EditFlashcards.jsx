import React, { useState, useCallback, useEffect } from "react";
import styled from 'styled-components';
import { Article, AddBox  } from '@mui/icons-material';
import { colors } from "../styling/colors";
import { 
	PrimaryButton,
	SecondaryButton,
	AddButton,
	Footer,
	CardItem,
	TextField,
	TextArea,
	LargeIcon,
	Header,
	Title
}
from "../styling/styles";

const FlashcardContainer = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding-top: 100px;
`;

const FlashcardContent = styled.div`
	max-width: 800px;
	width: 80%;
`;

const StyledLargeIcon = styled(LargeIcon)`
	color: ${colors.purple};
	margin: 0px;
`;

const StyledTextField = styled(TextField)`
    font-size: 36px;
		width: 700px;
		border-color: ${colors.grey01};
`;

export default function EditFlashcards(props){
	
	const { handleSave } = props;

	return (
		<FlashcardContainer>
			<FlashcardContent>
			<Header>
			  <Title>
					<StyledLargeIcon><Article/></StyledLargeIcon>
					<StyledTextField
						type="text" 
						placeholder='flashcard'
					/>
			  </Title>
			</Header>
			<CardItem>
				<TextArea
					type="text" 
					placeholder='is canada a country'
				/>
				<TextArea
					type="text" 
					placeholder='answer '
				/>
			</CardItem>
		  </FlashcardContent>
		  <Footer>
				<AddButton><AddBox/></AddButton>
				<SecondaryButton>delete</SecondaryButton>
				<PrimaryButton onClick={handleSave}>save</PrimaryButton>
		  </Footer>
		</FlashcardContainer>
	);
  };