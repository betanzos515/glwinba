
export const RadioButton = ({ nombre, setPermiso, permisos }) => {

    const handleChange = e =>{
        setPermiso([ ...permisos, e.target.value ]);
    }
    return (
        <div className='radio'>
            <input  type="checkbox" id={ nombre } onChange={handleChange} name={ nombre } value={ nombre } />
            <label>{ nombre }</label>
        </div>
    )
}
