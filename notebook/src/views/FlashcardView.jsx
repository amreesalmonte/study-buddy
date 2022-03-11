import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import ReadFlashcards from "../components/ReadFlashcards";
import EditFlashcards from "../components/EditFlashcards";

export default function FlashcardView(props){
	let navigate = useNavigate();

	const [edit, setEdit] = useState(false);

	const toggleEdit = useCallback((title) => {
		if (edit) {
			setEdit(false);
		} else {
			setEdit(true);
		};
	}, [edit])

	const handleBack = useCallback((title) => {
		navigate('/flashcards');
	}, [navigate])

	return (
			<>
			{
				edit ? 
				<EditFlashcards handleSave={toggleEdit}/> : 
				<ReadFlashcards handleEdit={toggleEdit} handleBack={handleBack}/>
			}
			</>
	);
};