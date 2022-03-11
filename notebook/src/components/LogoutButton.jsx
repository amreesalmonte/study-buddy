import React, { useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserProvider";
import { signOutWithGoogle } from "../services/firebase";
import { GoogleButton } from "../styling/styles";

export default function LogoutButton() {
	let navigate = useNavigate();
	const { setUser } = useContext(UserContext);

	const handleSignOut = useCallback(() => {
		signOutWithGoogle();
		setUser({})
		navigate('/');
}, [setUser, navigate]) 

	return (
		<GoogleButton onClick={handleSignOut}>
			<img src='/btn_google_light_normal.svg' alt='google login'/>
			Sign out
		</GoogleButton>
	);
}