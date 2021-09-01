import React, { useRef, useState } from 'react';
import './TodoForm.css'

const TodoForm = ({onAdd}) => {
    const textRef = useRef('')
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) return // 아무 내용도 없으면 반응X

        onAdd(text)
        setText('')
        textRef.current.focus()
    }

    const onText = (e) => {
        const {value} = e.target
        setText(value)
    }

    return (
        <form className="TodoForm" onSubmit={onSubmit}>
            <input type="text" value={text} placeholder="할 일을 입력하세요" onChange={onText} ref={textRef} />
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoForm;