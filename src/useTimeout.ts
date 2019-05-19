import {useEffect, useRef} from 'react';

export function useTimeout(callback:Function, timeout?:number,
                                              ...deps:any) {
    const lastCallback = useRef<Function>();
    
    useEffect(()=> {
        lastCallback.current = callback;
    }, [callback]);
    
    useEffect(()=> {
        if (timeout) {
            const interval = setTimeout(()=>
                lastCallback.current(), timeout);
            return ()=>
                clearTimeout(interval);
        }
    }, [timeout, ...deps]);
}
