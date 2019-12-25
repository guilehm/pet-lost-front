import React, { useEffect } from 'react'
import PetCard from './PetCard'


const PetCardGroup = ({ activePets, actions }) => {
    useEffect(() => {
        actions.fetchActivePets()
    }, [actions])

    const pets = activePets.results || []

    return (
        <section className="blog_w3ls pb-lg-5 pb-4" id="posts">
            <div className="container py-sm-5 py-4">
                <div className="title-desc text-center pb-sm-3 mb-lg-5">
                    <h3 className="main-title-w3pvt">recent blog</h3>
                    <p>Helping animals  working on environmental issues.</p>
                </div>
                <div className="row mt-4">

                    {pets.map(pet =>
                        <PetCard
                            key={pet.id}
                            src={pet.mainPicture.url}
                            title={pet.name}
                            description={pet.description}
                            date={pet.announcements.find(a => a.active === true).dateAdded}
                            link='/hardcoded'
                        />
                    )}

                </div>
            </div>
        </section>
    )
}

export default PetCardGroup