import React, { useState } from 'react';

const Test17 = () => {
    const [data, setData] = useState([
        {name: '홍길동', age: 20},
        {name: '김철수', age: 10},
        {name: '강호동', age: 30},
        {name: '유재석', age: 40}
    ])
    return (
        <div>
            {
                data.map((item, idx) => <p key={idx}>
                    {idx} / {item.name} / {item.age}
                </p>)
            }
        </div>
    );
};

export default Test17;