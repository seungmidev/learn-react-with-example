import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pink, skyblue, yellow } from '../../store/modules/color';

const Color = () => {
    // 상태값 가져오기(state.리듀서파일명.state명)
    const color = useSelector(state => state.color.color)
    const dispatch = useDispatch()

    return (
        <div>
            <h1 style={{color:color}}>컬러 : {color}</h1>
            <p>
                <button onClick={() => dispatch(pink())}>pink</button>
                <button onClick={() => dispatch(skyblue())}>skyblue</button>
                <button onClick={() => dispatch(yellow())}>yellow</button>
            </p>
        </div>
    );
};

export default Color;