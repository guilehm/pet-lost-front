import axios from 'axios'


const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || 'https://gui-pets.herokuapp.com/api'


class API {
    constructor() {
        this.url = API_BASE_URL
    }

    getActivePets() {
        return axios.get(`${this.url}/pets/?active=true`)
    }

    getInactivePets() {
        return axios.get(`${this.url}/pets/?active=false`)
    }

    getLostPets() {
        return axios.get(`${this.url}/pets/?situation=lost`)
    }

    getFoundPets() {
        return axios.get(`${this.url}/pets/?situation=found`)
    }

    getRawQuery(params, endpoint = 'pets') {
        const queryset = params.join('+')
        return axios.get(`${this.url}/${endpoint}/?${queryset}`)
    }
}


export default API