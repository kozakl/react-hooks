import {useState} from 'react';
import {ContentState, convertFromHTML,
        convertToRaw, EditorState} from 'draft-js';
import {default as draftToHtml} from 'draftjs-to-html';

export function useRichTextArea(initialValue:string) {
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
        error,
        onChange: (state:EditorState)=> {
            setState(state);
            setChanged(true);
        },
        setState: (value:string)=>
            setState(
                EditorState.createWithContent(
                    ContentState.createFromBlockArray(
                        convertFromHTML(value) as any))
            ),
        setError: (error:string)=>
            setError(error),
        getValue: ()=>
            draftToHtml(convertToRaw(state.getCurrentContent())),
        hasText: ()=>
            state.getCurrentContent().hasText()
    }
}
