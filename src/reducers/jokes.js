import {
    SET_JOKE,
    CLEAR_JOKE,
    REVEAL_PUNCHLINE,
    HIDE_PUNCHLINE,
    SHOW_ANSWER_BUTTON,
    HIDE_ANSWER_BUTTON
} from '../actionTypes'

export default (state = { setup: [], punchline: [], isActive: false, isJoke: false }, action) => {
    switch (action.type) {
        case SET_JOKE:
            return { ...state, setup: action.payload.setup, punchline: action.payload.punchline }

        case CLEAR_JOKE:
            return { ...state, setup: [], punchline: [] }

        case REVEAL_PUNCHLINE:
            return { ...state, isActive: true }

        case HIDE_PUNCHLINE:
            return { ...state, isActive: false }

        case SHOW_ANSWER_BUTTON:
            function delayShow() {
                return true
            }
            const setTrue = setTimeout(delayShow(), 1000)
            return { ...state, isJoke: setTrue }

        case HIDE_ANSWER_BUTTON:
            return { ...state, isJoke: false }

        default:
            return state
    }
}