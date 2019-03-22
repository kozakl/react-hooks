import {useEffect, useRef} from 'react';

export function useInterval(callback:Function, timeout?: number)
{
    const lastCallback = useRef<Function>();
    useEffect(()=> {
        lastCallback.current = callback;
    }, [callback]);
    
    useEffect(()=> {
        function onInterval() {
            lastCallback.current();
        }
        if (timeout) {
            let interval = setInterval(onInterval, timeout);
            return ()=>
                clearInterval(interval);
        }
    }, [timeout]);
}
