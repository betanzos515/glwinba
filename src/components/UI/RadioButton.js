import { useState } from 'react'

export const RadioButton = ({ nombre }) => {

    const [ state, setState ] = useState(false);

    const handleClick = e =>{
        setState(!state);
        console.log(e.target.value);
    }

    return (
        <div className='radio'>
            <input checked={state}  onClick={ handleClick } type="radio" id={ nombre } name={ nombre } value={ nombre } />
            <label>{ nombre }</label>
        </div>
    )
}
