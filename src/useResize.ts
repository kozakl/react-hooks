import {useEffect} from 'react';

export function useResize(resize:()=> void, initCall?:boolean)
{
    useEffect(()=> {
        window.addEventListener('resize', resize);
        
        if (initCall) {
            resize();
        }
        return ()=>
            window.removeEventListener('resize', resize);
    }, []);
}
