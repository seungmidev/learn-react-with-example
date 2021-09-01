import React, { useEffect, useState } from 'react';
import './MelonForm.css'

const MelonForm = ({onSearch}) => {
    const [text, setText] = useState('')

    const changeInput = (e) => {
        const {value} = e.target
        setText(value)
    }

    useEffect(() => {
        onSearch(text)
    }, [text])

    const onSubmit = (e) => {
        e.preventDefault()
        //onSearch(text)
    }

    return (
        <form className="MelonForm" onSubmit={onSubmit}>
            <input type="text" placeholder="곡명을 입력하세요" value={text} onChange={changeInput} />
        </form>
    );
};

export default MelonForm;