import React from 'react'

const API_CROP_URL =
    process.env.REACT_APP_API_CROP_URL || 'https://gui-bloodborne-nginx.herokuapp.com/api/smartcrop/download'

const CROP_MAX_WIDTH = 256
const CROP_MAX_HEIGHT = 256


const PetCard = ({ src, title, description, date, link }) => {

    return (

        <div className="col-lg-4 col-md-6 mt-sm-0 mt-4 mb-4">
            <div className="card">
                <div className="card-header p-0 position-relative">
                    <a href={link} data-toggle="modal" aria-pressed="false" data-target={link}
                        role="button">
                        <img className="card-img-bottom"
                            src={`${API_CROP_URL}/?url=${src}&width=${CROP_MAX_WIDTH}&height=${CROP_MAX_HEIGHT}`} alt={title} />
                        <span className="fa fa-user post-icon bg-theme" aria-hidden="true" data-blast="bgColor"></span>

                    </a>
                </div>
                <div className="card-body">
                    <h5 className="blog-title card-title font-weight-bold">
                        <a href={link} data-toggle="modal" aria-pressed="false" data-target={link}
                            role="button">{title}</a>
                    </h5>
                    <p>{description}</p>
                    <label className="mt-2"> <span className="fa fa-calendar mr-3"></span>{date}</label>
                    <button type="button" className="btn blog-btn wthree-bnr-btn" data-toggle="modal" aria-pressed="false"
                        data-target={link}>
                        Mais detalhes
                    </button>
                </div>
            </div>
        </div>

    )
}


export default PetCard