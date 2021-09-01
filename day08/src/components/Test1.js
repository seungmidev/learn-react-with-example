import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test1 = () => {
    const [data, setData] = useState([])

    // 외부에서 데이터 가져올 때
    useEffect(() => {
        getData1()
    }, [])

    const getData1 = async() => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        setData(res.data)
    }

    const getData2 = async() => { // async를 쓸 때는 await도 써주기
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const res1 = await res.json()
        setData(res1)
    }

    const getData3 = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                // console.log(res)
                setData(res.data)
            })
    }

    const getData4 = () => {
        /* fetch('url 주소')
        .then(받을 변수 => {
            setData(받을 변수.옵션)
        }) */
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(res => setData(res))
    }

    return (
        <div>
            <h2>데이터 불러오기</h2>
            {
                data.map(item => <p key={item.id}>
                    {item.id} / {item.title}
                </p>)
            }
        </div>
    );
};

export default Test1;