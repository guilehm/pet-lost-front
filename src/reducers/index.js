import activePets from './pets'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    activePets,
})


export default rootReducer
