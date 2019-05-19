import {useEffect, useRef} from 'react';

export function useInterval(callback:Function, timeout?:number)
{
    const lastCallback = useRef<Function>();
    
    useEffect(()=> {
        lastCallback.current = callback;
    }, [callback]);
    
    useEffect(()=> {
        if (timeout) {
            const interval = setInterval(()=>
                lastCallback.current(), timeout);
            return ()=>
                clearInterval(interval);
        }
    }, [timeout]);
}
