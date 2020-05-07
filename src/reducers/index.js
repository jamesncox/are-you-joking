import { combineReducers } from 'redux'
import jokes from '../reducers/jokes'

const rootReducer = combineReducers(
    {
        jokes
    }
)

export default rootReducer