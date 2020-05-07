import React, { Component } from 'react'
import { connect } from 'react-redux'
import Punchline from './Punchline'
import { REVEAL_PUNCHLINE } from './actionTypes'

class Setup extends Component {

    handleClick = () => {
        this.props.revealPunchline()
    }

    render() {
        if (this.props.setup) {
            return (
                <div>
                    <p>{this.props.setup}</p>
                    <br></br>
                    {this.props.isJoke ? <button className="fade-in" onClick={this.handleClick}>Punchline</button> : null}
                    <br></br>
                    {this.props.isActive ? <Punchline /> : null}
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    setup: state.jokes.setup,
    punchline: state.jokes.punchline,
    isActive: state.jokes.isActive,
    isJoke: state.jokes.isJoke
})

const mapDispatchToProps = (dispatch) => ({
    revealPunchline: () => dispatch({ type: REVEAL_PUNCHLINE })
})

export default connect(mapStateToProps, mapDispatchToProps)(Setup)