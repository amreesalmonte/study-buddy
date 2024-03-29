import React, { useState, useCallback, useEffect, useContext } from "react";
import styled from 'styled-components';
import { PlayArrow, Pause, SkipNext } from '@mui/icons-material';
import TimerContext from "../context/TimerProvider";
import { colors } from "../styling/colors";
import { LargeIcon, IconGroup } from "../styling/styles";

const PomodoroContainer = styled.div`
  color: white;
  background-color: ${props => props.timerColor};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: .2s ease-in-out;
`;

const TimerText = styled.div`
  font-size: 144px;
`;

const StyledLargeIcon = styled(LargeIcon)`
  &:hover {
    color: ${colors.yellow};
    cursor: pointer;
  }
`;

export default function PomodoroView(props){
  const { timer, setTimer } = useContext(TimerContext);

  const [isBreak, setIsBreak] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [timerColor, setTimerColor] = useState(colors.red);

  useEffect(()=> {
    if (initialLoad) {
      setTimer({color: colors.red})
      setInitialLoad(false)
    }
  }, [setTimer, initialLoad]);

  const togglePlay = useCallback(() => {
    if (isActive) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }, [isActive]);

  const toggleBreak = useCallback(() => {
    if (isBreak) {
      setIsBreak(false)
      setTimer({color: colors.green})
      setTimerColor(colors.green)
    } else {
      setIsBreak(true)
      setTimer({color: colors.red})
      setTimerColor(colors.red)
    }
  }, [isBreak, setTimer]);

  const handleNext = useCallback(() => {
    setIsActive(false);
    toggleBreak();
  }, [toggleBreak]);

  return (
      <PomodoroContainer timerColor={timerColor}>
        <TimerText>25:00</TimerText>
        <IconGroup>
          {isActive ? 
          <StyledLargeIcon><Pause onClick={togglePlay}/></StyledLargeIcon> : 
          <StyledLargeIcon><PlayArrow onClick={togglePlay}/></StyledLargeIcon>
          }
          <StyledLargeIcon><SkipNext onClick={handleNext}/></StyledLargeIcon>
        </IconGroup>
      </PomodoroContainer>
  );
}
