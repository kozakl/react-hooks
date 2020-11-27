import {ChangeEvent, useState} from 'react';

export function useCheckbox(initialChecked:boolean)
{
    const [checked, setChecked] = useState(initialChecked),
          [changed, setChanged] = useState(false),
          [error, setError] = useState(null);
    return {
        checked,
        changed,
        error,
        onChange: (event:ChangeEvent<HTMLInputElement>)=> {
            setChecked(!checked);
            setChanged(initialChecked !== event.target.checked);
        },
        setError: (error:string)=> setError(error)
    }
}
