import React, { useState, useCallback, useEffect, useContext } from "react";
import styled from 'styled-components';
import { PlayArrow, Pause, SkipNext } from '@mui/icons-material';
import TimerContext from "../context/TimerProvider";
import { colors } from "../styling/colors";

const PomodoroContainer = styled.div`
  color: white;
  background-color: ${colors.red};
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

const IconContainers = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.div`
  margin: 20px;
  transition: .2s ease-in-out;
  svg {
      width: 64px;
      height: 64px;
  }
  &:hover {
    color: ${colors.yellow};
  }
`;

export default function PomodoroView(props){
  const { timer, setTimer } = useContext(TimerContext);

  const [isBreak, setIsBreak] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

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
    } else {
      setIsBreak(true)
      setTimer({color: colors.red})
    }
  }, [isBreak, setTimer]);

  const handleNext = useCallback(() => {
    setIsActive(false);
    toggleBreak();
  }, [toggleBreak]);

  return (
      <PomodoroContainer>
        <TimerText>25:00</TimerText>
        <IconContainers>
          {isActive ? 
          <Icon><Pause onClick={togglePlay}/></Icon> : 
          <Icon><PlayArrow onClick={togglePlay}/></Icon>
          }
          <Icon><SkipNext onClick={handleNext}/></Icon>
        </IconContainers>
      </PomodoroContainer>
  );
}
