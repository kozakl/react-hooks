import {ChangeEvent, useState} from 'react';

export function useSelect(initialValue:number)
{
    const [value, setValue] = useState(initialValue),
          [changed, setChanged] = useState(false),
          [error, setError] = useState(null);
    return {
        value,
        changed,
        setChanged,
        error,
        onChange: (event:ChangeEvent<HTMLInputElement>)=> {
            setValue(+event.target.value);
            setChanged(initialValue !== +event.target.value);
        },
        setError: (error:string)=> setError(error)
    }
}
