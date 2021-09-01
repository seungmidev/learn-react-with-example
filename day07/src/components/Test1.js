import React, { useState } from 'react';
import Test1Sub from './Test1Sub';

const list = [
    {id:1, name:'홍길동'},
    {id:2, name:'Dog'},
    {id:3, name:'CAt'},
    {id:4, name:'abc'},
    {id:5, name:'aBc'},
    {id:6, name:'이승미'},
    {id:7, name:'가나다'},
    {id:8, name:'테스트'},
    {id:9, name:'리액트'},
    {id:10, name:'MDN'},
    {id:11, name:'React'}
]

const Test1 = () => {
    const [data, setData] = useState(list)

    const onSearch = (text) => {
        //setData(list.filter(item => item.name.indexOf(text) !== -1))
        //const newData = new RegExp(글자, 옵션값)
        const newData = list.filter(item => {
            const re = new RegExp(text, 'ig')
            return item.name.match(re)
        })
        setData(newData)
    }

    return (
        <div>
            <Test1Sub onSearch={onSearch} />
            <ul>
                {data.map(item => <li key={item.id}>
                    {item.id} / {item.name}
                </li>)}
            </ul>
        </div>
    );
};

export default Test1;