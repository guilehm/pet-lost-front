import React from 'react'


const Menu = () => (
    <header>
        <nav id="navbar" className="navbar">
            <div className="navbar__container">
                <img className="navbar__brand" src="https://gui-pets.s3.amazonaws.com/static/pet/picture/image/b9d34880-115e-4b4c-9cf7-ab8a76182aa1.jpg" alt="" />
                <label htmlFor="navbar-checkbox-toggler">
                    <span className="navbar__toggler">
                        <i className="fas fa-bars"></i>
                    </span>
                </label>
                <h1 className="navbar__brand__text">My Website</h1>
                <input type="checkbox" id="navbar-checkbox-toggler" defaultChecked />
                <div id="navbar-items" className="navbar__items">
                    <a className="navbar__item" href="/">home</a>
                    <a className="navbar__item" href="/">products</a>
                    <a className="navbar__item" href="/">services</a>
                    <a className="navbar__item" href="/">login</a>
                </div>
            </div>
        </nav>
    </header>
)


export default Menu
