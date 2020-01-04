import React, { useEffect } from 'react'


const Banner = ({banners, actions}) => {

    useEffect(() => {
        actions.fetchBanners()
    }, [actions])

    let addButtons = banner => {
        let { buttonOne, buttonOneLink, buttonTwo, buttonTwoLink } = banner

        let markup = (text, link, second) => {
            if (!text) return ''
            let className = "btn bg-theme mt-4 w3_pvt-link-bnr scroll"
            if (second) className += " ml-4"
            return (
                <a className={className}
                    data-blast="bgColor"
                    href={link}
                    role="button">{text}
                </a>
            )
        }
        return [markup(buttonOne, buttonOneLink), markup(buttonTwo, buttonTwoLink, true)]

    }

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
                                <a className="btn bg-theme ml-4 mt-4 w3_pvt-link-bnr scroll" data-blast="bgColor" href="#announce"
                                    role="button">Anuncie agora</a>
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