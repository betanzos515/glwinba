import React from 'react';

import './styles/cargar.css'
export const Carga = ({ setCargarDocumento }) => {

  const handleChange = e =>{
    console.log(e);
    setTimeout(()=>{
      setCargarDocumento(false);
    },1000);
  }

  return(
    <div className='cargar' draggable={true}>
        <input className='subir-archivo' onChange={handleChange} type='file' draggable/>
        <i className="fas fa-upload"></i>
        <p>Da click para cargar tu documento o puedes arrastrar y soltar</p>
    </div>
  )
};

