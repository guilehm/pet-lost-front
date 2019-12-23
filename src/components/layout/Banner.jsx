import React from 'react'


const Banner = () => {
    return (
        <div className="callbacks_container">
            <ul className="rslides" id="slider3">
                <li className="banner banner1">
                    <div className="container">
                        <div className="banner-text">
                            <div className="slider-info">
                                <h3>Pet Lost</h3>
                                <span className="line"></span>
                                <p>Fazendo pets mais felizes</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="banner banner3">
                    <div className="container">
                        <div className="banner-text">
                            <div className="slider-info">
                                <h3>Ajude um Pet</h3>
                                <span className="line"></span>
                                <p>A encontrar sua família</p>
                                <a className="btn bg-theme mt-4 w3_pvt-link-bnr scroll" data-blast="bgColor" href="#lost"
                                    role="button">Desaparecidos</a>
                                <a className="btn bg-theme ml-4 mt-4 w3_pvt-link-bnr scroll" data-blast="bgColor" href="#found"
                                    role="button">Encontrados</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Banner