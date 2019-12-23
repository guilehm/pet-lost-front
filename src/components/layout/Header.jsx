import React from 'react'


const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-expand-lg navbar-light navbar-fixed-top">
                <h1>
                    <a className="navbar-brand" href="index.html" data-blast="color">
                        PetLost
                    </a>
                </h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-lg-auto text-center">
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html" data-blast="color">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item  mt-lg-0 mt-3">
                            <a className="nav-link scroll" href="#lost">Desaparecidos</a>
                        </li>
                        <li className="nav-item mt-lg-0 mt-3">
                            <a className="nav-link scroll" href="#found">Encontrados</a>
                        </li>
                        <li className="nav-item  mt-lg-0 mt-3">
                            <a className="nav-link scroll" href="#announce">Anuncie grátis</a>
                        </li>
                    </ul>
                    <button type="button" className="btn  wthree-link-bnr bg-theme rounded-circle text-center mt-lg-0 mt-3" data-toggle="modal"
                        aria-pressed="false" data-target="#exampleModal" data-blast="bgColor"> <span className="fa fa-user text-white"></span>
                    </button>
                </div>

            </nav>
        </header>
    )
}

export default Header