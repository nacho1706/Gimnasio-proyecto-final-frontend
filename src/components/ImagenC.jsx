import React from 'react'

const ImagenC = ({urlImagen, altImagen, widthImagen}) => {
  return (
    <>
   <div className='justify-content-center'>
   <img className='img' src={urlImagen} alt={altImagen} width={widthImagen} 
   style={{ maxWidth: `${widthImagen}px`, height: 'auto' }}/>
   </div>
    </>
  )

}
export default ImagenC;