import React from 'react';
import Test2Sub from './Test2Sub';

const Test2 = () => {
    // 함수영역
    return (
        <div>
            {/* jsx영역 */}
            <h2>함수형 컴포넌트, props</h2>
            <Test2Sub
                name = '홍길동' 
                age = {30}
                addr = '서울'
                tel = '010-1234-5678'
                sex = '여자'
                color = 'skyblue'
                done = {true}
            />
            <hr />
            <Test2Sub
                name = '김철수'
                tel = '010-9876-5432'
                color = 'pink'
            />
            <hr />
            <Test2Sub />
        </div>
    );
};

export default Test2;