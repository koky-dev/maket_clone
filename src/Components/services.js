import React from 'react'
import ArrowDown from './../assets/arrow.png'
import MotorCycle from './../assets/motorcylce.png'
import ServiceBottomImage from './../assets/service_bottom.png'

import './../index.css'

const services = () => {
  return (
    <div className='services'>
      <div className="container mb-5">
        <h1 className='text-center mb-2'>Services</h1>
        <img src={ArrowDown} alt="" className='d-block mx-auto' />
        <div className="row pt-5">
          <div className="col-lg-6 col-md-6 col-xs-12 mt-5">
            <h3>Livraisons rapides & fiables
              partout dans le monde</h3>
            <p>It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
              The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 d-flex justify-content-center">
            <img src={MotorCycle} alt="" className='service_img_right'/>
          </div>
        </div>
      </div>
      <div className="container second_row pt-5">
        <div className="row d-flex flex-row-reverse">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h3>Constuler des catalogues divers
              de plusieurs boutiques</h3>
            <p>It is a long established fact that a reader will be distracted 
            by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal 
            distribution of letters, as opposed to using 'Content here, content here', 
            making it look like readable English.</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
            <img src={ServiceBottomImage} alt="" className='service_img_right'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default services
