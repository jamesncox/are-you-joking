import {
    SET_JOKE,
    CLEAR_JOKE,
    HIDE_PUNCHLINE,
    SHOW_ANSWER_BUTTON,
    HIDE_ANSWER_BUTTON
} from '../actionTypes'

const setJoke = joke => {
    return { type: SET_JOKE, payload: joke }
}

export const clearJoke = () => {
    return { type: CLEAR_JOKE }
}

export const hidePunchline = () => {
    return { type: HIDE_PUNCHLINE }
}

export const showAnswerButton = () => {
    return { type: SHOW_ANSWER_BUTTON }
}

export const hideAnswerButton = () => {
    return { type: HIDE_ANSWER_BUTTON }
}

export const getJoke = () => {
    return async dispatch => {
        try {
            const res = await fetch("https://official-joke-api.appspot.com/random_joke")
            if (!res.ok) {
                throw res
            }
            const joke = await res.json()
            dispatch(setJoke(joke))
        } catch (err) {
            alert("Failed to load joke")
        }
    }
}