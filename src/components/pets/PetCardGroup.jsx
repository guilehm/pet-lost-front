import React, { useEffect } from 'react'
import PetCard from './PetCard'


const PetCardGroup = ({ activePets, actions }) => {
    useEffect(() => {
        actions.fetchActivePets()
    }, [actions])

    const pets = activePets.results || []

    return (
        <div>pet card group</div>
    )
}

export default PetCardGroup
