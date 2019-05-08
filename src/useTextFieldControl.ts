import {ChangeEvent, useState} from 'react';

export function useTextFieldControl(initialValue:string,
                                    validator?:(value:string)=> boolean) {
    console.log('useTextFieldControl hook is deprecated use useTextField hook instead');
    const [value, setValue] = useState(initialValue),
          [error, setError] = useState();
    return {
        value,
        error,
        onChange: (event:ChangeEvent<HTMLInputElement>)=> {
            if (validator) {
                if (validator(event.target.value)) {
                    setValue(event.target.value);
                }
            } else {
                setValue(event.target.value);
            }
        },
        setError: (error:string)=> setError(error)
    }
}
