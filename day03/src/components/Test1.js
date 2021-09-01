import React from 'react';

const Test1Sub = (props) => { // 클래스와 다르게 함수형은 this.props 안하고 this 빠짐
    return (
        <div>
            <h4>이름: {props.name} ({typeof props.name})</h4>
            <h4>나이: {props.age} ({typeof props.age})</h4>
        </div>
    );
};

const Test1 = () => {
    const data1 = {name: '강아지', age: 3}
    const data2 = {name: '고양이', age: 2}

    return (
        <div>
            <Test1Sub name = '홍길동' age = {20} />
            <Test1Sub name = '유재석' age = {'20'} />
            <Test1Sub name = {data1.name} age = {data1.age} />
            <Test1Sub name = {data2.name} age = {data2.age} />
            <Test1Sub {...data1} />
            <Test1Sub {...data2} />
        </div>
    );
};

export default Test1;