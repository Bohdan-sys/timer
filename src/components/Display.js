import React, { useContext, useEffect } from 'react'
import { TimerContext } from "../contexts/TimerProvider";

export const Display = () => {
    const { formatTime } = useContext(TimerContext)


    return (
        <div className="display">
            <h1 className="caption caption--align_center caption--size_3">{formatTime()}</h1>
        </div>
    )
}


