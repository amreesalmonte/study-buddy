import React, { useState, useCallback, useEffect } from "react";
import styled from 'styled-components';
import ReadFlashcards from "../components/ReadFlashcards";
import EditFlashcards from "../components/EditFlashcards";

export default function FlashcardView(props){
	const [edit, setEdit] = useState(false);

	const toggleEdit = useCallback((title) => {
		if (edit) {
			setEdit(false);
		} else {
			setEdit(true);
		};
	}, [edit])

	return (
			<>
			{
				edit ? 
				<EditFlashcards handleSave={toggleEdit}/> : 
				<ReadFlashcards handleEdit={toggleEdit}/>
			}
			</>
	);
};