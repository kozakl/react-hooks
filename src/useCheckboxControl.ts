import {useState} from 'react';

export function useCheckboxControl(initialChecked:boolean)
{
    const [checked, setChecked] = useState(initialChecked);
    const [error, setError] = useState();
    return {
        checked,
        error,
        onChange: ()=> setChecked(!checked),
        setError: (error:string)=> setError(error)
    }
}
