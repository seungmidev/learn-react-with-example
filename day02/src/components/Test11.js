import React, { Component } from 'react';

class Test11 extends Component {
    render() {
        // js영역
        const title = '언더커버'
        const arr = ['지진희', '김현주', '허준호', '정만식', '이승준']
        return (
            <div>
                <h2>{title}</h2>
                <p>{arr[0]}</p>
                <p>{arr[1]}</p>
                <p>{arr[2]}</p>
                <p>{arr[3]}</p>
                <p>{arr[4]}</p>
                <hr />
                {
                    arr.map((item, idx) => {
                        // key는 map을 쓸 때 써야함(고유값)
                        return (<p key={idx}>{idx} / {item}</p>)
                    })
                }
                <hr />
                {
                    arr.map((item, idx) => <p key={idx}>
                        {idx} / {item}
                    </p>)
                }
            </div>
        );
    }
}

export default Test11;