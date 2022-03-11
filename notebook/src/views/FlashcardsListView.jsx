import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

const FlashcardsContent = styled.div`
	max-width: 800px;
	width: 80%;
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
	let navigate = useNavigate();

	const handleSelect = useCallback(() => {
		navigate('/flashcards/1');
	}, [navigate])

	return (
		<FlashcardsContainer>
			<FlashcardsContent>
				<ListItem onClick={handleSelect}>
					<Icon><Article/></Icon>
					flashcards
				</ListItem>
			</FlashcardsContent>
			<Footer>
				<PrimaryButton>create new</PrimaryButton>
			</Footer>
		</FlashcardsContainer>
	);
};