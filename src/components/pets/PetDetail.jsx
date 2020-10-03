import React, { useEffect } from 'react'


const PetDetail = ({ petSlug, selectedPet, actions }) => {
    useEffect(() => {
        actions.fetchPetDetail(petSlug)
    }, [actions, petSlug])

    return (
        <div>Hello World</div>
    )
}


export default PetDetail
