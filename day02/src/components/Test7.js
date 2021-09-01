import React, { Component } from 'react';
import Test7Sub from './Test7Sub';

class Test7 extends Component {
    render() {
        return (
            <div>
                <h1>Test7.js Main</h1>
                <hr />
                <Test7Sub 
                    // 속성(사용자 정의) = 값{숫자, 논리값}
                    title = "신상명세서"
                    name = "홍길동"
                    age = {29}
                    addr = "강남구"
                    tel = "010-9876-5432"
                    color = "darkkhaki"
                    done = {true}
                />
            </div>
        );
    }
}

export default Test7;