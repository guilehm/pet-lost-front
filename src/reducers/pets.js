import {
    FETCH_ACTIVE_PETS,
} from '../constants/ActionTypes'


const activePets = (state = [], action) => {
    switch (action.type) {
        case FETCH_ACTIVE_PETS:
            return { ...action.payload }
        default:
            return state
    }
}


export default activePets