import {useEffect, useRef} from 'react';

export function useTimeout(callback:Function, timeout?:number,
                                              ...deps:any) {
    const lastCallback = useRef<Function>();
    useEffect(()=> {
        lastCallback.current = callback;
    }, [callback]);
    
    useEffect(()=> {
        function onInterval() {
            lastCallback.current();
        }
        if (timeout) {
            let interval = setTimeout(onInterval, timeout);
            return ()=>
                clearTimeout(interval);
        }
    }, [timeout, ...deps]);
}
