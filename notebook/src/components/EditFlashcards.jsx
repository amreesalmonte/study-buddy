import React, { useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { Article, AddBox, ArrowBack  } from '@mui/icons-material';
import { colors } from "../styling/colors";
import { createDeck, updateDeck, deleteDeck } from "../utils/FlashcardUtil";
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
	Title,
	BackButton
}
from "../styling/styles";
import UserContext from "../context/UserProvider";

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
	let navigate = useNavigate();
	const { user } = useContext(UserContext);
	const { deck, cards, handleBack, toggleEdit } = props;

	const [newCards, setNewCards] = useState(cards);
	const [newDeck, setNewDeck] = useState(deck === 'new' ? '' : deck);

	const handleAdd = useCallback(() => {
		const tempCards = [...newCards];
		tempCards.push({question: '', answer: ''});
		setNewCards(tempCards);
	}, [newCards])

	const handleQuestionChange = useCallback((e, i) => {
		const tempCards = [...newCards];
		tempCards[i].question = e;
		setNewCards(tempCards);
	}, [newCards])

	const handleAnswerChange = useCallback((e, i) => {
		const tempCards = [...newCards];
		tempCards[i].answer = e;
		setNewCards(tempCards);
	}, [newCards])

	const handleTitleChange = useCallback((e) => {
		setNewDeck(e);
	}, []);

	const handleSave = useCallback(() => {
		const data = newCards.filter(card => card?.question !== '' && card?.answer !== '');
		const updateCards = data.filter(card => {return card.id});
		const createCards = data.filter(card => {return !card.id});
		createDeck(user.uid, newDeck, createCards)
		updateDeck(user.uid, newDeck, updateCards)
		toggleEdit();
		navigate('/flashcards');
	}, [newDeck, toggleEdit, newCards, user, navigate])

	const handleDelete = useCallback(() => {
		deleteDeck(cards)
		toggleEdit();
		navigate('/flashcards');
	}, [toggleEdit, navigate, cards])

	const getList = useCallback(() => {
		return (
			newCards?.map((card, index) => (
				<CardItem key={index}>
					<TextArea
						type="text" 
						value={card?.question}
						placeholder='question...'
						onChange={(e) => handleQuestionChange(e.target.value, index)}
					/>
					<TextArea
						type="text" 
						value={card?.answer}
						placeholder='answer...'
						onChange={(e) => handleAnswerChange(e.target.value, index)}
					/>
				</CardItem>
		)))
	}, [newCards, handleAnswerChange, handleQuestionChange])

	return (
		<FlashcardContainer>
			<FlashcardContent>
			<BackButton onClick={handleBack}><ArrowBack/>back</BackButton>
			<Header>
			  <Title>
				<StyledLargeIcon><Article/></StyledLargeIcon>
				<StyledTextField
					type="text" 
					value={newDeck}
					placeholder='title...'
					onChange={(e) => handleTitleChange(e.target.value)}
				/>
			  </Title>
			</Header>
			{cards && getList()}
		  </FlashcardContent>
		  <Footer>
				<AddButton onClick={handleAdd}><AddBox/></AddButton>
				<SecondaryButton onClick={handleDelete} disabled={deck === 'new'}>delete</SecondaryButton>
				<PrimaryButton onClick={handleSave}>save</PrimaryButton>
		  </Footer>
		</FlashcardContainer>
	);
  };