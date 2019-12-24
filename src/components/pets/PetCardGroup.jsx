import React from 'react'
import PetCard from './PetCard'


const PetCardGroup = () => (

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


                <div className="col-lg-4 col-md-6 mt-md-0 mt-sm-5 mt-4">
                    <div className="card">
                        <div className="card-header p-0 position-relative">
                            <a href="#exampleModal3" data-toggle="modal" aria-pressed="false" data-target="#exampleModal3"
                                role="button">
                                <img className="card-img-bottom" src="images/g2.jpg" alt="Card cap" />
                                <span className="fa fa-user post-icon bg-theme" aria-hidden="true" data-blast="bgColor"></span>
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="blog-title card-title font-weight-bold">
                                <a href="#exampleModal3" data-toggle="modal" aria-pressed="false" data-target="#exampleModal3"
                                    role="button">magna porta auris.</a>
                            </h5>
                            <p>At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit
                                ametLorem ipsum dolor sit amet,sed diam nonumy.</p>
                            <label className="mt-2"> <span className="fa fa-calendar mr-3"></span>02.11.2018</label>
                            <button type="button" className="btn blog-btn wthree-bnr-btn" data-toggle="modal" aria-pressed="false"
                                data-target="#exampleModal3">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>


                <div className="col-lg-4 col-md-6 mt-lg-0 mt-4 mx-auto">
                    <div className="card">
                        <div className="card-header p-0  position-relative">
                            <a href="#exampleModal4" data-toggle="modal" aria-pressed="false" data-target="#exampleModal4"
                                role="button">
                                <img className="card-img-bottom" src="images/g3.jpg" alt="Card cap" />
                                <span className="fa fa-user post-icon bg-theme" aria-hidden="true" data-blast="bgColor"></span>
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="blog-title card-title font-weight-bold">
                                <a href="#exampleModal4" data-toggle="modal" aria-pressed="false" data-target="#exampleModal4"
                                    role="button">Cras ultricies ligula sed.</a>
                            </h5>
                            <p>At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit
                                ametLorem ipsum dolor sit amet,sed diam nonumy.</p>
                            <label className="mt-2"> <span className="fa fa-calendar mr-3"></span>10.11.2018</label>
                            <button type="button" className="btn blog-btn wthree-bnr-btn" data-toggle="modal" aria-pressed="false"
                                data-target="#exampleModal4">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

)

export default PetCardGroup