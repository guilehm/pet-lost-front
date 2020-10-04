import React, { useEffect } from 'react'


const Banner = ({ banners, actions }) => {

    useEffect(() => {
        actions.fetchBanners()
    }, [actions])

    const addButtons = banner => {
        const { buttonOne, buttonOneLink, buttonTwo, buttonTwoLink } = banner

        let markup = (text, link, second) => {
            if (!text) return ''
            let className = "btn bg-theme mt-4 w3_pvt-link-bnr scroll"
            if (second) className += " ml-4"
            return (
                <a key={link} className={className}
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
            <ul className="rslides">
                {banners.slice(0, 1).map(banner =>
                    <li className="banner" key={banner.slug} style={bannerStyle(banner.picture)}>
                        <div className="container">
                            <div className="banner-text">
                                <div className="slider-info">
                                    <h3>{banner.title}</h3>
                                    <span className="line"></span>
                                    <p>{banner.subtitle}</p>
                                    {addButtons(banner)}
                                </div>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

const bannerStyle = url => ({
    background: `url(${url}) center no-repeat`
})

export default Banner
