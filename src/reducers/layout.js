import {
    FETCH_BANNERS,
} from '../constants/ActionTypes'


const banners = (state = [], action) => {
    switch (action.type) {
        case FETCH_BANNERS:
            return { banners: action.payload }
        default:
            return state
    }
}


export default banners