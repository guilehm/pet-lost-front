import React from 'react'


const Banner = () => {
    return (
        <div class="callbacks_container">
            <ul class="rslides" id="slider3">
                <li class="banner banner1">
                    <div class="container">
                        <div class="banner-text">
                            <div class="slider-info">
                                <h3>Pet Lost</h3>
                                <span class="line"></span>
                                <p>Fazendo pets mais felizes</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="banner banner3">
                    <div class="container">
                        <div class="banner-text">
                            <div class="slider-info">
                                <h3>Ajude um Pet</h3>
                                <span class="line"></span>
                                <p>A encontrar sua família</p>
                                <a class="btn bg-theme mt-4 w3_pvt-link-bnr scroll" data-blast="bgColor" href="#lost"
                                    role="button">Desaparecidos</a>
                                <a class="btn bg-theme ml-4 mt-4 w3_pvt-link-bnr scroll" data-blast="bgColor" href="#found"
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