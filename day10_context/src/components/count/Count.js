import React, { useContext } from 'react';
import { useCount } from '../../contexts/CountContext';
//import { ColorContext } from '../../contexts/ColorContext';
//import { CountContext } from '../../contexts/CountContext';

const Count = () => {
    //const {count, increment, decrement} = useContext(CountContext)
    //const {color} = useContext(ColorContext)
    const {count, increment, decrement} = useCount()

    return (
        <div>
            <h1>숫자 : {count} {/* {color} */}</h1>
            <p>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
            </p>
        </div>
    );
};

export default Count;