import React, { useEffect } from 'react'
import PetCard from './PetCard'


const PetCardGroup = ({ activePets, actions }) => {
    useEffect(() => {
        actions.fetchActivePets()
    }, [actions])

    return (
        <section className="blog_w3ls pb-lg-5 pb-4" id="posts">
            <div className="container py-sm-5 py-4">
                <div className="title-desc text-center pb-sm-3 mb-lg-5">
                    <h3 className="main-title-w3pvt">recent blog</h3>
                    <p>Helping animals  working on environmental issues.</p>
                </div>
                <div className="row mt-4">

                    <PetCard
                        src="images/g1.jpg"
                        title="Cras ultricies ligula sed."
                        description="At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit
                            ametLorem ipsum dolor sit amet,sed diam nonumy."
                        date="01.10.2018"
                        link="#exampleModal2"
                    />

                </div>
            </div>
        </section>
    )
}

export default PetCardGroup