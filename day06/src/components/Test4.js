import React, { useEffect, useState } from 'react';

const Test4 = () => {
    const [count, setCount] = useState(1)

    /*useEffect(() => {
        console.log('useEffect')
        const id = setInterval(() => {
            setCount(count + 1)
        }, 1000)

        return() => {
            console.log('clearInterval')
            clearInterval(id)
        }
    })*/

    useEffect(() => {
        console.log('useEffect')
        const id = setInterval(() => {
            setCount(count => count + 1) // 이전 값을 받아서 +1을 해라
        }, 1000)

        return() => {
            console.log('clearInterval')
            clearInterval(id)
        }
    }, [])

    return (
        <div style={{margin:30}}>
            <h1>숫자 : {count}</h1>
        </div>
    );
};

export default Test4;