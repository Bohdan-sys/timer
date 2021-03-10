import React, { useReducer, useRef, useState } from "react";
import { timerReducer, TIMER, START, WAIT, RESET } from './TimerReducer'

export const TimerContext = React.createContext();

export const TimerContextProvider = ({ children }) => {
    const increment = useRef(null);
    const [time, setTime] = useState(Date.now());
    const initialTimerState = {
        timer: 0,
        start: false,
        wait: false,
    }
    const [timerState, dispatch] = useReducer(timerReducer, initialTimerState)
    const formatTime = () => {
        const getSeconds = `0${(timerState.timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timerState.timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timerState.timer / 3600)}`.slice(-2)
        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    const startWatch = () => {
        dispatch({ type: START })
        if (!timerState.start) {
            increment.current = setInterval(() => {
                dispatch({
                    type: TIMER,
                    payload: 1
                })
            }, 1000)
        } else {
            clearInterval(increment.current)
            dispatch({
                type: RESET,
            })
        }
    }

    const resetWatch = () => {
        dispatch({
            type: RESET,
        })
    }

    const waitWatch = () => {
        if (Date.now() - time < 300) {
            clearInterval(increment.current)
            dispatch({
                type: WAIT,
            })
            return
        }
        setTime(Date.now())
    }

    return (
        <TimerContext.Provider value={{
            timerState: timerState,
            formatTime: formatTime,
            startWatch: startWatch,
            resetWatch: resetWatch,
            waitWatch: waitWatch,
            start: timerState.start
        }}>
            {children}
        </TimerContext.Provider>
    )
}
