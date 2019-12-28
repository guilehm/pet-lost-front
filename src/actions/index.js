import * as types from '../constants/ActionTypes'
import API from '../services/api'


const Api = new API()


export const fetchActivePets = () => {
    return dispatch => {
        Api.getActivePets()
            .then(res => dispatch({
                type: types.FETCH_ACTIVE_PETS,
                payload: res.data,
            }))
    }
}

export const fetchBanners = () => {
    return dispatch => {
        Api.getBanners()
            .then(res => dispatch({
                type: types.FETCH_BANNERS,
                payload: res.data.results
            }))
    }
}
