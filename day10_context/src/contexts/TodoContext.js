import React, { createContext, useRef, useState } from 'react';

export const TodoContext = createContext()

const TodoProvider = (props) => {
    const no = useRef(6)
    const [text, setText] = useState('홍길동')
    const [todos, setTodos] = useState([
        {id:1, text:'가나다', done:true},
        {id:2, text:'라마바', done:true},
        {id:3, text:'사아자', done:false},
        {id:4, text:'차카타', done:false},
        {id:5, text:'파하', done:true}
    ])

    const changeInput = (e) => {
        const {value} = e.target
        setText(value)
    }

    const onAdd = (text) => {
        if(!text) return
        setTodos([
            ...todos,
            {id:no.current++, text:text, done:false}
        ])
        setText('')
    }
    
    const onToggle = (id) => {
        const newData = todos.map(todo => todo.id === id ? 
            {...todo, done:!todo.done} : todo)
        setTodos(newData)
    }

    return (
        <TodoContext.Provider value={{todos, text, changeInput, onAdd, onToggle}}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;