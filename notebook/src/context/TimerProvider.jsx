import { createContext, useState, useEffect } from "react";

const TimerContext = createContext({});

export const TimerProvider = ({ children }) => {
    const [timer, setTimer] = useState({});

    useEffect(() => {
        const timerData = localStorage.getItem('timer');
        
        if (timerData) {
            setTimer(JSON.parse(timerData));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('timer', JSON.stringify(timer));
    }, [timer]);

    return (
        <TimerContext.Provider value={{ timer, setTimer }}>
            {children}
        </TimerContext.Provider>
    )
}

export default TimerContext;