import {useEffect, useState} from 'react';

export function useMatchMedia(change:(event:MediaQueryList)=> void, query:string)
{
    const [matches, setMatches] = useState(window.matchMedia(query).matches);
    
    useEffect(()=> {
        const media = window.matchMedia(query);
        media.addListener(onChange);
        
        onChange(media);
        function onChange(event:MediaQueryListEvent) {
            setMatches(media.matches);
            if (change) {
                change(media);
            }
        }
        return ()=>
            media.removeListener(onChange);
    }, [query]);
    
    return matches;
}
