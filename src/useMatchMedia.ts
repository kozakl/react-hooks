import {useState} from 'react';
import {useIsomorphicLayoutEffect} from './useIsomorphicLayoutEffect';

export function useMatchMedia(change:(media:MediaQueryList)=> void, query:string)
{
    const [matches, setMatches] = useState(
        typeof window !== 'undefined' &&
            window.matchMedia(query).matches
    );
    
    useIsomorphicLayoutEffect(()=> {
        const media = window.matchMedia(query);
        media.addListener(onChange);
        
        onChange();
        function onChange() {
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
