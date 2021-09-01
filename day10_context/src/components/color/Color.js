import React, { useContext } from 'react';
import { useColor } from '../../contexts/ColorContext';
//import { ColorContext } from '../../contexts/ColorContext';

const Color = () => {
    //const {color, onRed, onPink, onLime, onSkyblue, onTomato} = useContext(ColorContext) // 값을 받아오는 역할
    const {color, onRed, onPink, onLime, onSkyblue, onTomato} = useColor()

    return (
        <div>
            <h1 style={{color:color}}>컬러 : {color}</h1>
            <p>
                <button onClick={onRed}>red</button>
                <button onClick={onPink}>pink</button>
                <button onClick={onLime}>lime</button>
                <button onClick={onSkyblue}>skyblue</button>
                <button onClick={onTomato}>tomato</button>
            </p>
        </div>
    );
};

export default Color;