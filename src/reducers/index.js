import { activePets, selectedPet } from './pets'
import layout from './layout'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    activePets,
    selectedPet,
    layout,
})


export default rootReducer
