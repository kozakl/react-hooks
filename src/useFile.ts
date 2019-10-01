import {ChangeEvent, useState} from 'react';

export function useFile()
{
    const [files, setFiles] = useState(),
          [changed, setChanged] = useState(),
          [error, setError] = useState();
    return {
        files,
        changed,
        error,
        onChange: (event:ChangeEvent<HTMLInputElement>)=> {
            setFiles(event.target.files);
            setChanged(!!event.target.files);
        },
        setError: (error:string)=> setError(error)
    }
}
