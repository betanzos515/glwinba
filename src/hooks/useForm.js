import { useState } from "react";

export const useForm = ( initialState = {} )=>{
    
    const [ values , setValues ] = useState(initialState);

    const handleInputChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const resetForm = (newState = initialState)=>{
        setValues(newState)
    }

    return [values, handleInputChange, resetForm];
    
}
