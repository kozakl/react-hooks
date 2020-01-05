import {useEffect} from 'react';

export function useDocumentTitle(title:string, restoreOriginal?:boolean)
{
    useEffect(()=> {
        const original = document.title;
        document.title = title;
        return ()=> {
            if (restoreOriginal) {
                document.title = original;
            }
        };
    }, [title]);
}
