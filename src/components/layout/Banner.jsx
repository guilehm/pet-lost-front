import React, { useEffect } from 'react'


const Banner = ({ banners, actions }) => {

    useEffect(() => {
        actions.fetchBanners()
    }, [actions])

    return (
        <div>banner</div>
    )
}


export default Banner
