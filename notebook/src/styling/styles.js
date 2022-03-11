import styled from 'styled-components';
import { colors } from "../styling/colors";

export const Footer = styled.div`
	position: fixed;
	width: 100%
	left: 0;
	bottom: 0;
	padding: 50px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-left: 20%;
`;

export const IconGroup = styled.div`
  display: flex;
  justify-content: center;
`;

export const SmallIcon = styled.div`
	margin: 20px;
	transition: .2s ease-in-out;

	svg {
		width: 30px;
		height: 30px;
	}
	&:hover {
		cursor: pointer;
	}
`;

export const LargeIcon = styled.div`
	margin: 20px;
	transition: .2s ease-in-out;
	
	svg {
		width: 64px;
		height: 64px;
	}
	&:hover {
		cursor: pointer;
	}
`;

export const PrimaryButton = styled.div`
	background-color: ${colors.green};
	color: white;
	width: 150px;
	height: 20px;
	font-weight: bold;
	display: flex;
	padding: 10px;
	margin: 20px;
	justify-content: center;
	border-radius: 10px;
	transition: .2s ease-in-out;

	&:hover {
		transform: scale(1.05);
		cursor: pointer;
	}
`;

export const SecondaryButton = styled.div`
	background-color: ${colors.red};
	color: white;
	width: 150px;
	height: 20px;
	font-weight: bold;
	display: flex;
	padding: 10px;
	margin: 20px;
	justify-content: center;
	border-radius: 10px;
	transition: .2s ease-in-out;

	&:hover {
		transform: scale(1.05);
		cursor: pointer;
	}
`;

export const AddButton = styled(LargeIcon)`
	color: ${colors.green};
	transition: .2s ease-in-out;
	display: flex;
	left: 0;

	&:hover {
		transform: scale(1.05);
		cursor: pointer;
	}
`;

export const EditButton = styled(LargeIcon)`
	color: ${colors.purple};
	margin: 0px;

	&:hover {
		transform: scale(1.10);
	}
`;

export const BackButton = styled(SmallIcon)`
	color: ${colors.green};
	margin: 0px;
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 18px;
	
	svg {
		margin-right: 10px;
	}

	&:hover {
		transform: scale(1.05);
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 50px 0px;
`;

export const Title = styled.div`
	font-size: 36px;
	font-weight: bold;
	color: ${colors.grey02};
	display: flex;
	align-items: center;
`;

export const ListItem = styled.div`
	background-color: ${colors.grey01};
	color: ${colors.grey02};
	font-weight: bold;
	padding: 5px 10px;
	margin: 5px;
	display: flex;
	align-items: center;
	transition: .2s ease-in-out;

	&:hover {
		transform: scale(1.05);
		cursor: pointer;
	} 
`;

export const CardItem = styled.div`
	background-color: ${colors.grey01};
	color: ${colors.grey02};
	font-weight: bold;
	padding: 5px 10px;
	margin: 5px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

export const TextArea = styled.textarea`
	background-color: white;
	font-family: 'Roboto Mono';
	font-weight: bold;
	border: none;
	margin: 10px;
	padding: 10px;
	max-width: 95%;
	min-width: 95%;
	max-height: 300px;
	min-height: 20px;

	&:focus {
		outline-color: ${colors.grey01};;
	}
`;

export const TextField = styled.input`
    background-color: white;
		font-family: 'Roboto Mono';
		font-weight: bold;
    border: none;
    margin: 10px;
    padding: 10px;

		&:focus {
			outline-color: ${colors.grey01};;
		}
`;

export const Card = styled.div`
	background-color: ${colors.grey01};
	font-weight: bold;
	font-size: 20px;
	padding: 5px 10px;
	margin: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 300px;
`;