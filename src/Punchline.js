import React, { Component } from 'react'
import { connect } from 'react-redux'

class Punchline extends Component {

    render() {
        if (this.props.punchline) {
            return (
                <div className="fade-in">
                    <p>{this.props.punchline}</p>
                    <br></br>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    punchline: state.jokes.punchline
})

export default connect(mapStateToProps)(Punchline)