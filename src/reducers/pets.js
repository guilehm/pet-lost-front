import {
    FETCH_ACTIVE_PETS,
} from '../constants/ActionTypes'


const pets = (state = [], action) => {
    switch (action.type) {
        case FETCH_ACTIVE_PETS:
            return [{ ...action.payload }]
        default:
            return state
    }
}


export default pets