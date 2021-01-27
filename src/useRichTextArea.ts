import {useState} from 'react';
import {ContentState, convertFromHTML,
        convertToRaw, EditorState} from 'draft-js';
import {default as draftToHtml} from 'draftjs-to-html';

export function useRichTextArea(initialValue:string = '') {
    const [value, setValue] = useState(
        EditorState.createWithContent(
            ContentState.createFromBlockArray(
                convertFromHTML(initialValue) as any))
    );
    const [changed, setChanged] = useState(false),
          [error, setError] = useState(null);
    return {
        changed,
        setChanged,
        error,
        setError,
        setValue: (value:string)=>
            setValue(
                EditorState.createWithContent(
                    ContentState.createFromBlockArray(
                        convertFromHTML(value) as any))
            ),
        getValue: ()=>
            draftToHtml(convertToRaw(value.getCurrentContent())),
        isEmpty: ()=>
            value.getCurrentContent().hasText(),
        onChange: (state:EditorState)=> {
            setValue(state);
            setChanged(true);
        }
    }
}
