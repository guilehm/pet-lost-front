import React, { useEffect, useState } from 'react'

import API from '../../services/api'

import { useParams } from 'react-router-dom'

const Api = new API()

const PetDetail = ({ actions }) => {
    const { slug } = useParams()
    const [pet, setPet] = useState('false')

    const handleError = err => console.log(err)
    const handleSuccess = res => {
        setPet(res.data)
    }
    console.log('caiu aqui')

    useEffect(() => {
        Api.getPetDetail(slug)
            .then(handleSuccess)
            .catch(handleError)
    }, [slug])

    return (
        <div>{pet.name}</div>
    )
}


export default PetDetail
