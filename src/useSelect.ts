import {ChangeEvent, useState} from 'react';

export function useSelect(initialValue:number)
{
    const [value, setValue] = useState(initialValue),
          [error, setError] = useState();
    return {
        value,
        error,
        onChange: (event:ChangeEvent<HTMLInputElement>)=>
            setValue(+event.target.value),
        setError: (error:string)=> setError(error)
    }
}
