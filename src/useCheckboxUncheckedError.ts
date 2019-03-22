import {useEffect, useState} from 'react';

export function useCheckboxUncheckedError(checked:boolean,
                                          errorMessage:string) {
    const [error, setError] = useState();
    useEffect(()=> {
        if (!checked) {
            setError(errorMessage);
        } else {
            setError('');
        }
    }, [checked]);
    
    return error;
}
