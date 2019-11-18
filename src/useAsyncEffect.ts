import {DependencyList, useEffect} from 'react';

export function useAsyncEffect(effect:Function, deps?:DependencyList) {
    useEffect(()=> {
        effect();
    }, deps);
}
