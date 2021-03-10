export const TIMER = 'TIMER'
export const START = 'START'
export const WAIT = 'WAIT'
export const RESET = 'RESET'
const handlers = {
    [TIMER]: (timerState, { payload }) => ({
        ...timerState,
        timer: timerState.timer + payload,
    }),
    [START]: (timerState) => ({
        ...timerState, start: !timerState.start, wait: false
    }),
    [RESET]: (timerState) => ({
        ...timerState, timer: 0
    }),
    [WAIT]: (timerState) => ({
        ...timerState, start: false, wait: !timerState.wait
    }),

    DEFAULT: state => state
}

export const timerReducer = (timerState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(timerState, action)
}