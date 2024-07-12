import React from 'react'
import NavbarP from '../components/NavbarP'
import FototerC from '../components/FototerC'

const Nosotros = () => {
  return (
    <>
    <NavbarP />
    <div className='d-flex d-column justify-content-center align-items-center m-5'>
        <div className='d-flex d-column justify-content-center align-items-center m-5'> 
           <img  className="m-3" src="https://www.img2go.com/assets/img/landing_page/upscale_mobile_after@2x.jpg" alt="" width={200}/>
             <p className='text-white'>Albarracin Ignacio</p>
         </div>
        <div className='d-flex d-column justify-content-center align-items-center m-5'>
        <img className='m-3' src='https://www.img2go.com/assets/img/landing_page/upscale_mobile_after@2x.jpg' alt=''  width={200}/>
        <p className="text-white" >Prado Agustina</p>
        </div>
        
    </div>
    <FototerC />
    </>
)
}

export default Nosotros