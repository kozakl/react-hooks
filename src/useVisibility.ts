import {useEffect, useState} from 'react';

export function useVisibility(change?:(visibility:boolean)=> void)
{
    const [visibility, setVisibility] = useState(!document.hidden);
    
    useEffect(()=> {
        document.addEventListener('visibilitychange', onChange);
        
        function onChange() {
            setVisibility(!document.hidden);
            if (change) {
                change(!document.hidden);
            }
        }
        return ()=>
            document.removeEventListener('visibilitychange', onChange);
    }, []);
    
    return visibility;
}
