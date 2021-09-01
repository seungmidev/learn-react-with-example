import React, { useState } from 'react';

const Test8 = () => {
    const [userid, setUserid] = useState('')
    const [userpw, setUserpw] = useState('')

    const changeId = (e) => {
        // 비구조할당
        const {value} = e.target
        setUserid(value)

        // setUserid(e.target.value)
    }
    const changePw = (e) => {
        // 비구조할당
        const {value} = e.target
        setUserpw(value)

        // setUserpw(e.target.value)
    }
    const onReset = () => {
        setUserid('')
        setUserpw('')
    }

    return (
        <div>
            <input type="text" onChange={changeId} value={userid} />
            <input type="text" onChange={changePw} value={userpw} />
            <button onClick={onReset}>초기화</button>
            <h2>id: {userid} / pw: {userpw}</h2>
        </div>
    );
};

export default Test8;