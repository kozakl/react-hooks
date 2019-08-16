import {useEffect, useState} from 'react';

export function useMatchMedia(query:string)
{
    const [matches, setMatches] = useState(window.matchMedia(query).matches);
    
    useEffect(()=> {
        const media = window.matchMedia(query);
        media.addListener(onChange);
        
        function onChange() {
            setMatches(media.matches);
        }
        return ()=>
            media.removeListener(onChange);
    }, [query]);
    
    return matches;
}
