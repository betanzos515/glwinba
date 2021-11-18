import React from 'react'
import '../../styles/UI/Modulo.css';
export const Modulo = ({titulo}) => {
    return (
        <div className='modulo'>
            <i class="far fa-address-card"></i>
            <p>{titulo}</p>
        </div>
    )
}
