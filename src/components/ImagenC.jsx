import React from 'react'

const ImagenC = ({urlImagen, altImagen, widthImagen}) => {
  return (
    <>
    <img src={urlImagen} alt={altImagen} width={widthImagen} />
    </>
  )

}
export default ImagenC;