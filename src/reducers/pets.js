import {
    FETCH_ACTIVE_PETS,
    FETCH_PET_DETAIL,
} from '../constants/ActionTypes'


export const activePets = (state = [], action) => {
    switch (action.type) {
        case FETCH_ACTIVE_PETS:
            return { ...action.payload }
        default:
            return state
    }
}


export const selectedPet = (state = [], action) => {
    switch (action.type) {
        case FETCH_PET_DETAIL:
            return { ...action.payload }
        default:
            return state
    }
}
