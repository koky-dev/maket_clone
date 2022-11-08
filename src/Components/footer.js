import React from 'react'
import LogoFooter from './../assets/logo_footer.png'

const footer = () => {
  return (
    <div className='container pt-5'>
      <div className="logo_footer d-flex justify-content-center mb-5">
        <img src={LogoFooter} alt="" />
      </div>
      <div className="row d-flex justify-content-center mx-auto">
        <div className="col-lg-4 col-md-4 col-xs-12 mb-5">
            <h5>NAVIGATION</h5><br />
            <ul className="list-group list-group-flush">
                <li className="list-group-item mb-3">Démarrer</li>
                <li className="list-group-item mb-3">Services</li>
                <li className="list-group-item mb-3">Inscription</li>
                <li className="list-group-item mb-3">Contacts</li>
            </ul>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12">
            <h5>USAGES</h5><br />
            <ul className="list-group list-group-flush">
                <li className="list-group-item mb-3">Lorem ipsum</li>
                <li className="list-group-item mb-3">Social commerce</li>
                <li className="list-group-item mb-3">Dropshippers</li>
            </ul>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12">
            <h5>SUPPORTS</h5><br />
            <ul className='list-group list-group-flush'>
                <li className='list-group-item mb-3'>Nous Contacter</li>
                <li className='list-group-item mb-3'>Carrières</li>
            </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-xs-12">
            <p>Copyright 2022 Maket All rights reserved</p>
        </div>
        <div className="col-lg-6 col-sm-12 col-xs-12">
            <div className="row">
                <div className="col-6 d-flex justify-content-end">
                    <a href="#" className='btn'>Légales</a>
                </div>
                <div className="col-6">
                    <a href="#" className='btn'>Terms and conditions</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default footer
