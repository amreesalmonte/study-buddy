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
	color: ${colors.purple};

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
	const { handleExit } = props;

	const [isFront, setIsFront] = useState(true);
	const [text, setText] = useState('question');

	const handleFlip = useCallback(() => {
		if (isFront) {
			setIsFront(false);
			setText('answer') 
		} else {
			setIsFront(true);
			setText('question') 
		};
	}, [isFront])

	const handleNext = useCallback(() => {
		setIsFront(true);  
		setText('question') 
	}, [])

	return (
		<FlashcardContainer>
		  <FlashcardContent>
				<BackButton onClick={handleExit}><ArrowBack/>back</BackButton>
				<Header>
					<Title>
					<StyledLargeIcon><Article/></StyledLargeIcon>
					flashcards
					</Title>
				</Header>
				<StyledCard front={isFront}>{text}</StyledCard>
				<StyledIconGroup>
          <IconButton><Loop onClick={handleFlip}/></IconButton>
					<IconButton><SkipNext onClick={handleNext}/></IconButton>
        </StyledIconGroup>
		  </FlashcardContent>
		</FlashcardContainer>
	);
};