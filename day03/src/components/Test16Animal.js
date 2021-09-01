import React from 'react';

const Test16Animal = ({ani, onAni}) => {
    return (
        <div>
            동물: <input type="text" value={ani} onChange={onAni} />
        </div>
    );
};

export default Test16Animal;