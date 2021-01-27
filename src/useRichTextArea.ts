import {useState} from 'react';
import {ContentState, convertFromHTML,
        convertToRaw, EditorState} from 'draft-js';
import {default as draftToHtml} from 'draftjs-to-html';

export function useRichTextArea(initialValue:string = '') {
    const [state, setState] = useState(
        EditorState.createWithContent(
            ContentState.createFromBlockArray(
                convertFromHTML(initialValue) as any))
    );
    const [changed, setChanged] = useState(false),
          [error, setError] = useState(null);
    return {
        state,
        changed,
        setChanged,
        error,
        setError,
        setValue: (value:string)=>
            setState(
                EditorState.createWithContent(
                    ContentState.createFromBlockArray(
                        convertFromHTML(value) as any))
            ),
        getValue: ()=>
            draftToHtml(convertToRaw(state.getCurrentContent())),
        isEmpty: ()=>
            !state.getCurrentContent().hasText(),
        onChange: (state:EditorState)=> {
            setState(state);
            setChanged(true);
        }
    }
}
