import {useEffect} from 'react';

export function useScrollTarget(
    target:HTMLElement,
    scroll:(value:number, dir?:number)=> void) {
    useEffect(()=> {
        let requestAnimation = true,
            lastScrollY = window.scrollY;
        target.addEventListener('scroll', onScroll);
        
        onScroll();
        function onScroll() {
            if (requestAnimation) {
                requestAnimation = false;
                window.requestAnimationFrame(()=> {
                    requestAnimation = true;
                    
                    scroll(
                        target.scrollTop,
                        target.scrollTop > lastScrollY ? 1 : -1
                    );
                    lastScrollY = target.scrollTop;
                });
            }
        }
        return ()=>
            target.removeEventListener('scroll', onScroll);
    }, []);
}
