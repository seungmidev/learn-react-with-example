import React, { useState } from 'react';
import Test16Animal from './Test16Animal';
import Test16Name from './Test16Name';
import Test16Display from './Test16Display';

const Test16 = () => {
    const [name, setName] = useState('홍길동')
    const [ani, setAni] = useState('강아지')

    const onName = (e) => {
        const {value} = e.target
        setName(value)
    }
    const onAni = (e) => {
        const {value} = e.target
        setAni(value)
    }

    return (
        <div>
            {/* name={name} => props={값} */}
            <Test16Name name={name} onName={onName} /> 
            <hr />
            <Test16Animal ani={ani} onAni={onAni} />
            <hr />
            <Test16Display name={name} ani={ani} />
        </div>
    );
};

export default Test16;

