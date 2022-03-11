import React, { useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserProvider";
import { signInWithGoogle } from "../services/firebase";
import { GoogleButton } from "../styling/styles";

export default function LoginButton() {
	let navigate = useNavigate();
	const { setUser } = useContext(UserContext);

	const handleSignIn = useCallback(async() => {
		const uid = await signInWithGoogle();
		setUser({
			uid: uid,
			isLoggedIn: true
		})
		navigate('/');
}, [setUser, navigate]) 

	return (
		<GoogleButton onClick={handleSignIn}>
			<img src='/btn_google_light_normal.svg' alt='google login'/>
			Sign in with Google
		</GoogleButton>
	);
}