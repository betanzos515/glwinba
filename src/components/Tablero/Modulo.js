import '../../styles/UI/Modulo.css';

import { Link } from 'react-router-dom'

export const Modulo = ({ titulo, bg='' }) => {
    return (
        <Link to='/productos/servicios/dueDiligence' className={ `modulo ${bg}` }>
            <i className="far-servicios far fa-address-card"></i>
            <p>{ titulo }</p>
        </Link>
    )
}
