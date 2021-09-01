import React, { Component } from 'react';

class Test2 extends Component {
    render() {
        // js영역
        const title = "신사명세서"
        const name = "홍길동"
        const age = 29
        const addr = "서울"
        const tel = "010-1234-5678"
        const sex = "여자"

        return (
            // jsx영역
            <div>
                <h1>{title}</h1>
                <ul>
                    <li>이름 : {name}</li>
                    <li>나이 : {age}</li>
                    <li>주소 : {addr}</li>
                    <li>전화번호 : {tel}</li>
                    <li>성별 : {sex}</li>
                </ul>
                {/* jsx 주석처리 */}
                <p 
                    //{} 자바스크립트 출력할 경우
                    /* 태그 안에 주석처리 가능 */
                >나는 {name} 입니다.</p>
            </div>
        );
    }
}

export default Test2;