import * as types from '../constants/ActionTypes'
import API from '../services/api'


const Api = new API()


export const fetchPets = () => {
    return dispatch => {
        Api.getActivePets()
            .then(res => dispatch({
                type: types.FETCH_ACTIVE_PETS,
                payload: res.data,
            }))
    }
}
