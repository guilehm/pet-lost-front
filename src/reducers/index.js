import activePets from './pets'
import layout from './layout'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    activePets,
    layout,
})


export default rootReducer
