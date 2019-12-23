import React from 'react'


const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-expand-lg navbar-light navbar-fixed-top">
                <h1>
                    <a class="navbar-brand" href="index.html" data-blast="color">
                        PetLost
                    </a>
                </h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-lg-auto text-center">
                        <li class="nav-item active">
                            <a class="nav-link" href="index.html" data-blast="color">Home
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item  mt-lg-0 mt-3">
                            <a class="nav-link scroll" href="#lost">Desaparecidos</a>
                        </li>
                        <li class="nav-item mt-lg-0 mt-3">
                            <a class="nav-link scroll" href="#found">Encontrados</a>
                        </li>
                        <li class="nav-item  mt-lg-0 mt-3">
                            <a class="nav-link scroll" href="#announce">Anuncie grátis</a>
                        </li>
                    </ul>
                    <button type="button" class="btn  wthree-link-bnr bg-theme rounded-circle text-center mt-lg-0 mt-3" data-toggle="modal"
                        aria-pressed="false" data-target="#exampleModal" data-blast="bgColor"> <span class="fa fa-user text-white"></span>
                    </button>
                </div>

            </nav>
        </header>
    )
}

export default Header