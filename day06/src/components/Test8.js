import React, { useEffect, useState } from 'react';

const Test8 = () => {
    const [data, setData] = useState([
        {no:1, name:'dog'},
        {no:2, name:'cat'},
        {no:3, name:'수달'},
        {no:4, name:'기린'},
        {no:5, name:'토끼'},
        {no:6, name:'햄스터'},
        {no:7, name:'Cat'},
        {no:8, name:'doG'},
        {no:9, name:'lee'},
        {no:10, name:'홍길동'}
    ])
    const [fdata, setFdata] = useState([])

    const [text, setText] = useState('')

    const onText = (e) => {
        const {value} = e.target
        setText(value)
    }

    useEffect(() => {
        // false가 아닌 값을 반환
        setFdata(data.filter(item => item.name.indexOf(text) !== -1))
    }, [text])

    return (
        <div>
           <input type="text" onChange={onText} />
           <ul>
               {fdata.map(item => <li key={item.no}>
                   {item.no} / {item.name}
               </li>)}
           </ul>
        </div>
    );
};

export default Test8;