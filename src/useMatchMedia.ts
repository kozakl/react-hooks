import {useEffect, useState} from 'react';

export function useMatchMedia(change:(event:MediaQueryListEvent)=> void, query:string)
{
    const [matches, setMatches] = useState(window.matchMedia(query).matches);
    
    useEffect(()=> {
        const media = window.matchMedia(query);
        media.addListener(onChange);
        
        function onChange(event:MediaQueryListEvent) {
            setMatches(media.matches);
            if (change) {
                change(event);
            }
        }
        return ()=>
            media.removeListener(onChange);
    }, [query]);
    
    return matches;
}
