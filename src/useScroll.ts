import {useEffect} from 'react';

export function useScroll(scroll:(value:number)=> void)
{
    useEffect(()=> {
        let request = true;
        window.addEventListener('scroll', onScroll);
        
        onScroll();
        function onScroll() {
            if (request) {
                request = false;
                window.requestAnimationFrame(()=> {
                    request = true;
                    scroll(window.scrollY);
                });
            }
        }
        return ()=>
            window.removeEventListener('scroll', onScroll);
    }, []);
}
