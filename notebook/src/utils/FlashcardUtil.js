import { db } from "../services/firebase"
import { collection, doc, addDoc, setDoc, deleteDoc, query, getDocs, where } from "firebase/firestore";

export const fetchFlashcards = (async(uid, deck) => {
	const q = query(collection(db, "flashcards"),
		where("uid", "==", uid),
		where("deck", "==", deck)
	);

	const querySnapshot = await getDocs(q);
	const data = [];
	querySnapshot.forEach((doc) => {
		const res = {
			...doc.data(),
			id: doc.id
		} 
		data.push(res);
	});

	return data;
})

export const fetchDecks = (async(uid) => {
	const q = query(collection(db, "flashcards"), where("uid", "==", uid));

	const querySnapshot = await getDocs(q);
	const data = [];
	querySnapshot.forEach((doc) => {
		const deck = doc.data().deck;

		if (!data.includes(deck)) {
			data.push(deck);
		}
	});

	return data;
})

export const createDeck = (async(uid, deck, cards) => {
	cards.forEach(async(card) => {
		await addDoc(collection(db, "flashcards"), {
			answer: card.answer,
			deck: deck,
			question: card.question,
			uid: uid
		});
	});
})

export const updateDeck = (async(uid, deck, cards) => {
	cards.forEach(async(card) => {
		await setDoc(collection(db, "flashcards", card.id), {
			answer: card.answer,
			deck: deck,
			question: card.question,
			uid: uid
		});
	});
})

export const deleteDeck = (async(cards) => {
	cards.forEach(async(card) => {
		await deleteDoc(doc(db, "flashcards", card.id));
	});
})