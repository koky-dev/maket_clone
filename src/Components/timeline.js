import React from 'react'
import Bag from './../assets/bag.png'

const timeline = () => {
    return (
        <div className='timeline'>
            <div className="container pt-5">
                <h2 className='text-center'>Consulter tous les détails d’un produit</h2>
                <p className='text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                <div className="row timeline-img d-flex justify-content-center align-item-center">
                    <div className="col-6 d-flex justify-content-end align-items-center">
                        <img src={Bag} alt="" className='bag'/>
                    </div>
                    <div className="col-6 align-item-start">
                        <div className="timeline-header">
                            <h5>Description :</h5>
                            <p>STILORD 'Tom' Vintage Sac à main
                                Cuir Élégant Sac à l'Épaule Unisexe Sacoche</p>
                        </div><br />
                        <div className="timeline-header">
                            <h5>Prix :</h5>
                            <p>28.000 CFA</p>
                        </div><br />
                        <div className="timeline-header">
                            <h5>Poids :</h5>
                            <p>0.25 g</p>
                        </div><br />
                        <div className="timeline-header">
                            <h5>Couleur :</h5>
                            <p>Marron</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default timeline
