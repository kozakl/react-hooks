import {useEffect, useState} from 'react';

export function useMatchMedia(query:string)
{
    const [matches, setMatches] = useState(window.matchMedia(query).matches);
    useEffect(()=> {
        const media = window.matchMedia(query);
        media.addEventListener('change', onChange);
        
        function onChange() {
            setMatches(media.matches);
        }
        return ()=>
            media.removeEventListener('change', onChange);
    }, []);
    
    return matches;
}
