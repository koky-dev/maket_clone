import React from 'react'
import FeatureImgRight from './../assets/features_right.png'
import FeatureImgLeft from './../assets/features_left.png'

function features() {
    return (
        <div className='container'>
            <div className="row py-5 my-5">
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                    <h4>S’abonnerà une boutique</h4>
                    <p className='pb-5 pt-2'>It is a long established fact that a reader will be 
                    distracted by the readable content of a page when looking 
                    at its layout.
                    </p>
                    <img src={FeatureImgLeft} alt="" className='feature_img' />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                    <h4>Payez avec la monnaiede votre choix</h4>
                    <p className='pb-5 pt-2'>It is a long established fact that a reader will be 
                    distracted by the readable content of a page when looking 
                    at its layout.
                    </p>
                    <img src={FeatureImgRight} alt="" className='feature_img' />
                </div>
            </div>
        </div>
    )
}

export default features
