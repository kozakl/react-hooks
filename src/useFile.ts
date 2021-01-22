import {ChangeEvent, useRef,
        useState} from 'react';

export function useFile()
{
    const ref = useRef();
    const [files, setFiles] = useState<FileList>(),
          [changed, setChanged] = useState(false),
          [error, setError] = useState(null);
    return {
        ref,
        files,
        changed,
        setChanged,
        error,
        onChange: (event:ChangeEvent<HTMLInputElement>)=> {
            setFiles(event.target.files);
            setChanged(!!event.target.files);
        },
        setError: (error:string)=> setError(error)
    }
}
