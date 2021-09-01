import React, { useRef, useState } from 'react';

const Test14 = () => {
    const unameRef = useRef()
    // 상태초기값 => 숫자, 문자, [], {}, 논리
    const [form, setForm] = useState({
        uname: '',
        pw: '',
        email: ''
    })
    // form.uname, form.pw, form.email

    const changeName = (e) => {
        const {value} = e.target

    }
    const changePw = (e) => {
        const {value} = e.target
    }
    const changeEmail = (e) => {
        const {value} = e.target
    }

    const onReset = () => {
        unameRef.current.focus()
    }

    return (
        <div>
            <h2>input 여러개 관리</h2>
            <p>
                <input type="text" value={form.uname} onChange={changeName} ref={unameRef} />
                <input type="text" value={form.pw} onChange={changePw} />
                <input type="text" value={form.email} onChange={changeEmail} />
                <button onClick={onReset}>초기화</button>
            </p>
            <h4>이름: {form.uname}</h4>
            <h4>비번: {form.pw}</h4>
            <h4>이메일: {form.email}</h4>
        </div>
    );
};

export default Test14;