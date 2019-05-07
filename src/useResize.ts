import {useLayoutEffect} from 'react';

export function useResize(resize:()=> void, initCall?:boolean)
{
    useLayoutEffect(()=> {
        window.addEventListener('resize', resize);
        
        if (initCall) {
            resize();
        }
        return ()=>
            window.removeEventListener('resize', resize);
    }, []);
}
