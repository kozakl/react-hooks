import {useEffect, useState} from 'react';

export function useCheckboxUncheckedError(checked:boolean,
                                          errorMessage:string) {
    console.log('useCheckboxUncheckedError hook is deprecated');
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
