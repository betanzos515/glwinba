import '../../styles/UI/Modulo.css';

import { Link } from 'react-router-dom'

export const Modulo = ({ titulo, bg='' }) => {
    return (
        <Link to='/productos/servicios-especializados' className={ `modulo ${bg}` }>
            <i className="far fa-address-card"></i>
            <p>{ titulo }</p>
        </Link>
    )
}
