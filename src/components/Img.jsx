import React from 'react'

const Img = ({urlImagen, altImagen, widthImagen}) => {
  return (
    <>
     <img src={urlImagen} alt={altImagen} width={widthImagen} />
    </>
  )
}

export default Img