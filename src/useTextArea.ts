import {ChangeEvent, useState} from 'react';

export function useTextArea(initialValue:string,
                            validator?:(value:string)=> boolean) {
    const [value, setValue] = useState(initialValue),
          [changed, setChanged] = useState(false),
          [error, setError] = useState(null);
    return {
        value,
        changed,
        error,
        onChange: (event:ChangeEvent<HTMLTextAreaElement>)=> {
            if (validator) {
                if (validator(event.target.value)) {
                    setValue(event.target.value);
                }
            } else {
                setValue(event.target.value);
            }
            setChanged(initialValue !== event.target.value);
        },
        setError: (error:string)=> setError(error)
    }
}
