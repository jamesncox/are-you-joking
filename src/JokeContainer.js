import React from 'react'
import { connect } from 'react-redux'
import { getJoke, clearJoke, hidePunchline, showAnswerButton, hideAnswerButton } from './actions/jokes'
import Setup from './Setup'

function JokeContainer(props) {

    const handleClick = () => {
        props.getJoke()
        props.hidePunchline()
        props.showAnswerButton()
    }

    const handleClear = () => {
        props.clearJoke()
        props.hideAnswerButton()
    }

    return (
        <div>
            <button onClick={handleClick}>Get joke</button>
            <button onClick={handleClear}>Clear</button>
            <Setup />
        </div>
    )
}

export default connect(null, { getJoke, clearJoke, hidePunchline, showAnswerButton, hideAnswerButton })(JokeContainer)