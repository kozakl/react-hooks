import {useEffect, useState} from 'react';

export function useLocation()
{
    const [location, setLocation] = useState(window.location);
    useEffect(()=> {
        window.addEventListener('hashchange', onChange);
        
        function onChange() {
            setLocation({...window.location});
        }
        return ()=>
            window.removeEventListener('hashchange', onChange);
    }, []);
    
    return location;
}
