import React, { useContext } from 'react';
import { ChangeColorContext } from '../../contexts/ChangeColorContext';

const ChangeColor = () => {
    const {color, onColor} = useContext(ChangeColorContext)

    return (
        <div>
            <h1 style={{color:color}}>컬러 : {color}</h1>
            <p>
                <button onClick={() => onColor('navy')}>navy</button>
                <button onClick={() => onColor('hotpink')}>hotpink</button>
                <button onClick={() => onColor('orange')}>orange</button>
                <button onClick={() => onColor('blue')}>blue</button>
                <button onClick={() => onColor('green')}>green</button>
            </p>
        </div>
    );
};

export default ChangeColor;