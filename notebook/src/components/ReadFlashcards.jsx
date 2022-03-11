import React, { useState, useCallback, useEffect } from "react";
import styled from 'styled-components';
import { Article, ArrowBack, Edit } from '@mui/icons-material';
import { colors } from "../styling/colors";
import { 
	PrimaryButton,
	Footer,
	CardItem,
	Title,
	LargeIcon,
	BackButton,
	Header,
	EditButton 
} from "../styling/styles";

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

export default function ReadFlashcards(props){
	const { cards, deck, handleEdit, handleBack, handleReview } = props;

	const getList = useCallback(() => {
		return (
			cards?.map((card, index) => (
				<CardItem key={index}>{card.question}</CardItem>
		)))
	}, [cards])

	return (
		<FlashcardContainer>
		  <FlashcardContent>
				<BackButton onClick={handleBack}><ArrowBack/>back</BackButton>
				<Header>
					<Title>
					<StyledLargeIcon><Article/></StyledLargeIcon>
					{deck}
					</Title>
					<EditButton onClick={handleEdit}><Edit/></EditButton>
				</Header>
				{cards && getList()}
		  </FlashcardContent>
		  <Footer>
				<PrimaryButton onClick={handleReview}>review</PrimaryButton>
		  </Footer>
		</FlashcardContainer>
	);
};