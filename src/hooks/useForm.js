import { useEffect, useState } from 'react';

export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState(initialForm);

    useEffect(() => {
        if(localStorage?.getItem("username")){
            setFormState({username: localStorage.getItem("username")});
        }
    }, [])
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        
    }
}