import {useEffect} from 'react';

export function useResize(resize:()=> void)
{
    useEffect(()=> {
        window.addEventListener('resize', resize);
        
        return ()=>
            window.removeEventListener('resize', resize);
    }, []);
}
