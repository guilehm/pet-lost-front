import React from 'react'


const NotFoundPage = () => (
    <React.Fragment>
        <link href="https://fonts.googleapis.com/css?family=Quicksand:700" rel="stylesheet" />
        <link type="text/css" rel="stylesheet" href="https://gui-pets.s3.amazonaws.com/static/web/css/404.css" />
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-bg">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h1>oops!</h1>
                <h2>Erro 404 : Página não encontrada</h2>
                <a href="/">voltar</a>
            </div>
        </div>
    </React.Fragment>
)


export default NotFoundPage
