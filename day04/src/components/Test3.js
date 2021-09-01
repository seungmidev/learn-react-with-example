import React, { useRef, useState } from 'react';

const Test3 = () => {
    const no = useRef(1) // 고유번호 생성
    const [data, setData] = useState([])
    const names = '홍길동, 강호동, 유재석, 박명수, 지석진, 조세호, 이광수, 송지효, 이효리, 이승미'.split(',') // 배열 반환

    const onAdd = () => {
        const ran = Math.floor(Math.random()*names.length)
        setData([
            ...data,
            {
                id:no.current++,
                text:names[ran]
            }
        ])
    }

    return (
        <div>
            <h2>고유번호</h2>
            <button onClick={onAdd}>추가</button>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id} / {item.text}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test3;