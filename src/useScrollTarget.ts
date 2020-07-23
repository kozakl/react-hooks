import {MutableRefObject, useLayoutEffect} from 'react';

export function useScrollTarget(
    target:MutableRefObject<HTMLElement>,
    scroll:(value:number, dir?:number)=> void) {
    useLayoutEffect(()=> {
        let requestAnimation = true,
            lastScrollY = window.scrollY;
        target.current.addEventListener('scroll', onScroll);
        
        onScroll();
        function onScroll() {
            if (requestAnimation) {
                requestAnimation = false;
                window.requestAnimationFrame(()=> {
                    requestAnimation = true;
                    
                    scroll(
                        target.current.scrollTop,
                        target.current.scrollTop > lastScrollY ? 1 : -1
                    );
                    lastScrollY = target.current.scrollTop;
                });
            }
        }
        return ()=>
            target.current?.removeEventListener('scroll', onScroll);
    }, []);
}
