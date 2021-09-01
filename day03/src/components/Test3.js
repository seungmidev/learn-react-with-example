import React, { useState } from 'react';

const Test3 = () => {
    // 이름, 컬러 유동으로 변경
    const [name, setName] = useState('아무개')
    const [color, setColor] = useState('pink')

    const onName1 = () => {
        setName('강호동')
    }
    const onName2 = () => {
        setName('유재석')
    }
    const onName3 = () => {
        setName('이효리')
    }

    return (
        <div>
            <h3 style={{color:color}}>
                이름: {name} / 색상: {color}
            </h3>
            <p>
                <button onClick={onName1}>강호동</button>
                <button onClick={onName2}>유재석</button>
                <button onClick={onName3}>이효리</button>
            </p>
            <p>
                <button onClick={() => setColor('lime')}>lime</button>
                <button onClick={() => setColor('tomato')}>tomato</button>
                <button onClick={() => setColor('skyblue')}>skyblue</button>
            </p>
        </div>
    );
};

export default Test3;

/*
Class
    상태값: 유동으로 값이 변경될 경우 => state
    state = {count: 0} => 선언
    this.setState({count: 10}) => 변경

Function
    const [state, setState] = useState(초기값)
    const [count, setCount] = useState(0)
    count = 0
    setCount(count)
    setCount(10) => 변경
*/