import React, { useState, useCallback, useEffect, useContext } from "react";
import { NavLink } from 'react-router-dom';
import UserContext from "../context/UserProvider";
import styled from 'styled-components';
import { Article } from '@mui/icons-material';
import { colors } from "../styling/colors";
import { PrimaryButton, Footer, ListItem} from "../styling/styles";
import { fetchDecks } from "../utils/FlashcardUtil";

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
	const { user } = useContext(UserContext);

	const [initialLoad, setInitialLoad] = useState(true);
	const [decks, setDecks] = useState();

	const fetchData = useCallback(async() => {
		const deckData = await fetchDecks(user.uid);
		setDecks(deckData);
	}, [user]) 

	useEffect(() => {
		if (initialLoad) {
			fetchData();
			setInitialLoad(false);
		}
	}, [initialLoad, fetchData]);

	const getList = useCallback(() => {
		return (
			decks?.map((deck, index) => (
				<NavLink key={index} to={`/flashcards/${deck}`} style={{textDecoration: 'none'}}>
					<ListItem key={index} to={`/flashcards/${deck}`}>
						<Icon><Article/></Icon>
						{deck}
					</ListItem>
				</NavLink>
		)))
	}, [decks])

	return (
		<FlashcardsContainer>
			<FlashcardsContent>
				{getList()}
			</FlashcardsContent>
			<Footer>
				<NavLink to={`/flashcards/new`} style={{textDecoration: 'none'}}>
					<PrimaryButton>create new</PrimaryButton>
				</NavLink>
			</Footer>
		</FlashcardsContainer>
	);
};