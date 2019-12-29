import {useEffect} from 'react';

export function useScroll(scroll:(value:number, dir?:number)=> void)
{
    useEffect(()=> {
        let requestAnimation = true,
            lastScrollY = window.scrollY;
        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onScroll);
        
        onScroll();
        function onScroll() {
            if (requestAnimation) {
                requestAnimation = false;
                window.requestAnimationFrame(()=> {
                    requestAnimation = true;
                    
                    scroll(window.scrollY, window.scrollY > lastScrollY ? 1 : -1);
                    lastScrollY = window.scrollY;
                });
            }
        }
        return ()=> {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        }
    }, []);
}
