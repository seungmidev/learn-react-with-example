import React from 'react';

const Test6Sub = ({onDel, onAdd}) => {
    return (
        <div>
            {/* 삭제는 필터, 추가는 스프레드연산자와 concat */}
            <p>
                <button onClick={() => onDel(1)}>삭제1</button>
                <button onClick={() => onDel(2)}>삭제2</button>
            </p>
            <p>
                <button onClick={() => onAdd('이승기')}>추가1</button>
                <button onClick={() => onAdd('지진희')}>추가2</button>
            </p>
        </div>
    );
};

export default Test6Sub;