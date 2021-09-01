import React, { useRef, useState } from 'react';

const Test14 = () => {
    const unameRef = useRef()
    const [uname, setUname] = useState('')
    const [pw, setPpw] = useState('')
    const [email, setEmail] = useState('')

    const changeName = (e) => {
        const {value} = e.target
        setUname(value)

    }
    const changePw = (e) => {
        const {value} = e.target
        setPpw(value)
    }
    const changeEmail = (e) => {
        const {value} = e.target
        setEmail(value)
    }

    const onReset = () => {
        setUname('')
        setPpw('')
        setEmail('')
        unameRef.current.focus()
    }

    return (
        <div>
            <h2>input 여러개 관리</h2>
            <p>
                <input type="text" value={uname} onChange={changeName} ref={unameRef} />
                <input type="text" value={pw} onChange={changePw} />
                <input type="text" value={email} onChange={changeEmail} />
                <button onClick={onReset}>초기화</button>
            </p>
            <h4>이름: {uname}</h4>
            <h4>비번: {pw}</h4>
            <h4>이메일: {email}</h4>
        </div>
    );
};

export default Test14;