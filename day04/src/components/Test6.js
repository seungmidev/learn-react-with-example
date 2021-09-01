import React, { useRef, useState } from 'react';
import Test6Sub from './Test6Sub';

const Test6 = () => {
    const no = useRef(6)
    const [data, setData] = useState([
        {id:1, name:'홍길동'},
        {id:2, name:'강호동'},
        {id:3, name:'유재석'},
        {id:4, name:'박명수'},
        {id:5, name:'이승미'}
    ])

    const onDel = (num) => {
        setData(data.filter(item => item.id !== num))
    }

    const onAdd = (name) => {
        setData([
            ...data,
            {id: no.current++, name}
        ])
    }

    return (
        <div>
            {
                data.map(item => <p key={item.id}>
                    {item.id} / {item.name}
                </p>)
            }
            <hr />
            <Test6Sub onDel={onDel} onAdd={onAdd} />
        </div>
    );
};

export default Test6;