import React, { useState, useCallback, useEffect } from "react";
import styled from 'styled-components';
import { Article, ArrowBack, Loop, SkipNext } from '@mui/icons-material';
import { colors } from "../styling/colors";
import { 
	Title,
	LargeIcon,
	IconGroup,
	BackButton,
	Header,
	Card
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

const IconButton = styled(LargeIcon)`
	color: ${props => props.disabled ? colors.grey01 : colors.purple};

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledIconGroup = styled(IconGroup)`
	margin: 50px;
`;

const StyledCard = styled(Card)`
	color: ${props => props.front ? colors.grey03 : colors.purple};
`;

export default function ReviewFlashcards(props){
	const { cards, deck, handleExit } = props;

	const [isFront, setIsFront] = useState(true);
	const [text, setText] = useState(cards[0]?.question);
	const [currentCard, setCurrentCard] = useState(cards[0]);
	const [cardsLeft, setCardsLeft] = useState(cards);

	const handleFlip = useCallback(() => {
		if (isFront) {
			setIsFront(false);
			setText(currentCard?.answer) 
		} else {
			setIsFront(true);
			setText(currentCard?.question) 
		};
	}, [isFront, currentCard])

	const handleNext = useCallback(() => {
		if (cardsLeft.length > 1) { 
			let newCards = cardsLeft.filter((card) => card?.id !== currentCard?.id);
			let newCard = newCards[Math.floor(Math.random()*cardsLeft.length)];

			setCardsLeft(newCards);
			setCurrentCard(newCard);
			setText(newCard?.question);
			setIsFront(true); 
		}
	}, [currentCard, cardsLeft])

	return (
		<FlashcardContainer>
		  <FlashcardContent>
				<BackButton onClick={handleExit}><ArrowBack/>back</BackButton>
				<Header>
					<Title>
					<StyledLargeIcon><Article/></StyledLargeIcon>
					{deck}
					</Title>
				</Header>
				<StyledCard front={isFront}>{text}</StyledCard>
				<StyledIconGroup>
          <IconButton><Loop onClick={handleFlip}/></IconButton>
		  		<IconButton disabled={cardsLeft.length === 1}><SkipNext onClick={handleNext}/></IconButton>
        </StyledIconGroup>
		  </FlashcardContent>
		</FlashcardContainer>
	);
};