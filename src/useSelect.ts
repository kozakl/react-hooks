import {ChangeEvent, useState} from 'react';

export function useSelect(initialValue:number)
{
    const [value, setValue] = useState(initialValue),
          [changed, setChanged] = useState(),
          [error, setError] = useState();
    return {
        value,
        changed,
        error,
        onChange: (event:ChangeEvent<HTMLInputElement>)=> {
            setValue(+event.target.value);
            setChanged(initialValue !== +event.target.value);
        },
        setError: (error:string)=> setError(error)
    }
}
