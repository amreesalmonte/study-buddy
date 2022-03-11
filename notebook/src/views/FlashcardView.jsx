import React, { useState, useCallback, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components';
import ReadFlashcards from "../components/ReadFlashcards";
import EditFlashcards from "../components/EditFlashcards";
import ReviewFlashcards from "../components/ReviewFlashcards";
import UserContext from "../context/UserProvider";
import { fetchFlashcards } from "../utils/FlashcardUtil";

export default function FlashcardView(props){
	let navigate = useNavigate();
	let params = useParams(); 
	const { user } = useContext(UserContext);

	const [initialLoad, setInitialLoad] = useState(true);

	const [edit, setEdit] = useState(false);
	const [review, setReview] = useState(false);
	const [cards, setCards] = useState();

	const fetchData = useCallback(async() => {
		const cardsData = await fetchFlashcards(user.uid, params.deck);
		setCards(cardsData);
		console.log(cardsData)
	}, [user, params]) 

	useEffect(() => {
		if (initialLoad && params.deck !== 'new') {
			fetchData();
			setInitialLoad(false);
		} else if (initialLoad && params.deck === 'new') {
			const blankDeck = [
				{
					question: '',
					answer: ''
				}
			]
			setCards(blankDeck);
			setEdit(true);
		}
	}, [initialLoad, fetchData, params]);

	const toggleEdit = useCallback(() => {
		if (edit) {
			setEdit(false);
		} else {
			setEdit(true);
		};
	}, [edit])

	const toggleReview = useCallback(() => {
		if (review) {
			setReview(false);
		} else {
			setReview(true);
		};
	}, [review])

	const handleBack = useCallback(() => {
		navigate('/flashcards');
	}, [navigate])

	return (
		<>
		{edit && <EditFlashcards cards={cards} deck={params.deck} toggleEdit={toggleEdit} handleBack={handleBack}/>}
		{review && <ReviewFlashcards cards={cards} deck={params.deck} handleExit={toggleReview}/>}
		{!edit && !review && <ReadFlashcards cards={cards} deck={params.deck} handleEdit={toggleEdit} handleReview={toggleReview} handleBack={handleBack}/>}
		</>
	);
};