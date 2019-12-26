import React from 'react'


const PetCard = ({ src, title, description, date, link }) => {

    return (

        <div className="col-lg-4 col-md-6 mt-sm-0 mt-4">
            <div className="card">
                <div className="card-header p-0 position-relative">
                    <a href={link} data-toggle="modal" aria-pressed="false" data-target={link}
                        role="button">
                        <img className="card-img-bottom" src={`https://gui-bloodborne.herokuapp.com/api/smartcrop/download/?url=${src}&width=256&height=256`} alt={title} />
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