import React, { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    border:1px solid #000; width:${props => props.w}; margin:10px; padding:25px;
    h2 {font-size:40px; color:#000; margin-bottom:20px;}
`;
const Button = styled.button`
    margin:5px; font-size:30px; padding:0 30px 20px; cursor: pointer; outline:none; border:none;

    &.up::after {content:"📤"}
    &.down::after {content:"📤"}

    &:hover {background-color:tomato}

    &:disabled {filter:grayscale(100%); background-color:#ddd; cursor:not-allowed;}
`;

const Test9 = () => {
    const [count, setCount] = useState(1)
    const [max, setMax] = useState(10)
    const [min, setMin] = useState(0)

    const incrememt = () => {
        setCount(count > max ? max : count + 1)
    }

    const decrememt = () => {
        setCount(count < min ? min : count - 1)
    }

    return (
        <Container w="400px">
            <h2>숫자: {count}</h2>
            <Button className="up" onClick={incrememt} disabled={count === max}></Button>
            <Button className="down" onClick={decrememt} disabled={count === min}></Button>
        </Container>
    );
};

export default Test9;

// 숫자 증가 0~10까지