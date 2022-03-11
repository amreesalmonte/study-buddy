import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import ReadFlashcards from "../components/ReadFlashcards";
import EditFlashcards from "../components/EditFlashcards";
import ReviewFlashcards from "../components/ReviewFlashcards";

export default function FlashcardView(props){
	let navigate = useNavigate();

	const [edit, setEdit] = useState(false);
	const [review, setReview] = useState(false);

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
			{edit && <EditFlashcards handleSave={toggleEdit}/>}
			{review && <ReviewFlashcards handleExit={toggleReview}/>}
			{!edit && !review && <ReadFlashcards handleEdit={toggleEdit} handleReview={toggleReview} handleBack={handleBack }/>}
			</>
	);
};