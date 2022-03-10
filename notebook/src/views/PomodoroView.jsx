import React, { useState, useCallback, useEffect, useContext } from "react";
import styled from 'styled-components';
import TimerContext from "../context/TimerProvider";
import { colors } from "../styling/colors";

const PomodoroContainer = styled.div`
  color: white;
  background-color: ${colors.red};
  height: 100vh;
`;

export default function PomodoroView(props){
  const { timer, setTimer } = useContext(TimerContext);

  const [isBreak, setIsBreak] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(()=> {
    setTimer({color: '#FF8E8E'})
  }, [setTimer]);

  return (
      <PomodoroContainer>pomodoro</PomodoroContainer>
  );
}
