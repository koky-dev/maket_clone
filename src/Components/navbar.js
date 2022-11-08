/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../index.css'
import Logo from './../assets/logo_top.png'

const navbar = () => {
    return (
        <div className='container row mt-2 mx-auto'>
            <div className="col-2 mt-2">
                <img src={Logo} alt="" className='logo'/>
            </div>
            <div className="col-8 d-flex justify-content-center">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Contacts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Se Connecter</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="col-2 button mt-3">
                <a href="" target="_blank" rel="" className='btn btn-md' role='button'>Télécharger l'app</a>
            </div>
        </div>
    )
}

export default navbar