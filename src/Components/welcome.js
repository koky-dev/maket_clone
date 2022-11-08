import React from 'react'
import GooglePlay from './../assets/google_play.png'
import AppStore from './../assets/app_store.png'
import Phone from './../assets/phone.png'
import Circle from './../assets/circle.png'

export const Welcome = () => {
  return (
    <div className='container row mt-5 mx-auto'>
        <div className="col-lg-8 col-sm-12 col-xs-12">
            <div className="">
                <h2 className='text-sm-center text-lg-start'>Faites mieux vos courses avec Maket votre Shopping Assistance</h2>
            </div><br />
            <p className='text-sm-center text-lg-start'>
                There are many variations of passages of Lorem Ipsum <br /> available, 
                but the majority have suffered alteration in some <br /> form, 
                by injected humour, 
                or randomised words which <br /> don't look even slightly believable.
            </p>
            <div className="row d-flex justify-content-sm-center">
                <div className="col-lg-6 col-sm-12 col-xs-12">
                    <img src={GooglePlay} alt="" />
                </div>
                <div className="col-lg-6 col-sm-12 col-xs-12">
                    <img src={AppStore} alt="" />
                </div>
            </div>
            <div className="row mt-5 d-flex justify-content-sm-center">
                <p>Scanner pour télécharger</p>
                <div className="col-lg-6 col-sm-12 col-xs-12 d-flex justify-content-sm-center">
                    <img src={GooglePlay} alt="" />
                </div>
                <div className="col-lg-6 col-sm-12 col-xs-12 d-flex justify-content-sm-center">
                    <img src={GooglePlay} alt="" />
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-sm-12 col-xs-12 phone_section d-flex justify-content-center mx-auto">
            <img src={Phone} alt="" className='phone_image'/>
        </div>
    </div>
  )
}
