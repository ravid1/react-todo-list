import {useState} from 'react';


export function useInput(initialValue: any) {

    const [value, setValue] = useState(initialValue);

    return {
        value,
        resetValue: () => setValue(''),
        onChange: (e: any) => {
            setValue(e.target.value)
        }
    }
}
