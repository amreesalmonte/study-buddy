import styled from 'styled-components';
import { colors } from "../styling/colors";

export const Footer = styled.div`
	position: fixed;
	width: 100%;
	right: 0;
	bottom: 0;
	padding: 60px;
	display: flex;
	justify-content: flex-end;
`;

export const PrimaryButton = styled.div`
  background-color: ${colors.green};
  color: white;
  width: 150px;
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

export const ListItem = styled.div`
  background-color: ${colors.grey01};
  color: ${colors.grey02};
  font-weight: bold;
  max-width: 800px;
  width: 80%;
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