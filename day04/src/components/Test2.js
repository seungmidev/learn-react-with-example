import React, { useState } from 'react';

const Test2 = () => {
    const [data, setData] = useState([])
    // [{id:1, text:'문자'}, {id:2, text:'문자'}]

    const onAdd = () => {
        const newData = {id:data.length, text:'테스트' + Math.floor(Math.random()*10)}
        setData([...data, newData])
    }

    const onAdd3 = () => {
        // 스프레드 연산자
        setData([
            ...data,
            {
                id:data.length, 
                text:'테스트' + Math.floor(Math.random()*10)
            }
        ])
    }

    const onAdd2 = () => {
        // concat
        const newData = data.concat({id:data.length, text:'테스트' + Math.floor(Math.random()*10)})
        setData(newData)
    }

    const onAdd1 = () => {
        setData(data.concat({id:data.length, text:'테스트' + Math.floor(Math.random()*10)}))
    }

    return (
        <div>
            <h2>데이터 추가</h2>
            <p><button onClick={onAdd}>추가</button></p>
            <ul>
                {
                    // idx는 단순 출력만 할 때는 이렇게 사용해도 됨, key={idx}
                    // 데이터를 삭제하거나 수정할 때면 순서가 달라지므로 item.id를 사용하는게 좋음
                    data.map((item) => <li key={item.id}>
                        {item.id} / {item.text}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test2;