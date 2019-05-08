import {useState} from 'react';

export function useCheckboxControl(initialChecked:boolean)
{
    console.log('useCheckboxControl hook is deprecated use useCheckbox hook instead');
    const [checked, setChecked] = useState(initialChecked),
          [error, setError] = useState();
    return {
        checked,
        error,
        onChange: ()=> setChecked(!checked),
        setError: (error:string)=> setError(error)
    }
}
