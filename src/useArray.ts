import {useState} from 'react';

export function useArray<T>(initialValue:Array<T>)
{
    const [value, setValue] = useState(initialValue),
          [changed, setChanged] = useState(false),
          [error, setError] = useState(null);
    return {
        value,
        changed,
        setChanged,
        error,
        setError,
        get: (index:number)=>
            value[index],
        set: (index:number, element:T)=> {
            value[index] = element;
            setValue([...value]);
            setChanged(value.toString() !== initialValue.toString());
        },
        setValue: (value:Array<T>)=> {
            setValue(value);
            setChanged(value.toString() !== initialValue.toString());
        },
        add: (element:T)=> {
            value.push(element);
            setValue(value);
            setChanged(value.toString() !== initialValue.toString());
        },
        removeById: (id:number)=> {
            setValue(value.filter((element:any)=>
                element?.id !== id));
            setChanged(value.toString() !== initialValue.toString());
        },
        removeIndex: (index:number)=> {
            setValue([
                ...value.slice(0, index),
                ...value.slice(index + 1)
            ]);
            setChanged(value.toString() !== initialValue.toString());
        }
    }
}
