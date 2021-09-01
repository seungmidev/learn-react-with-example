import React, { Component } from 'react';
/* 
    컴포넌트 분리 : 부모에서 자식으로 값을 전달할 경우
    props 처리 : 속성이름은 사용자 정의
*/

class Sub extends Component {
    // class영역
    render() {
        // js영역
        // 비구조할당
        const {color, name, age, addr, sex, tel, done} = this.props

        return (
            <div style={{width:400, padding:20, margin:40, color:'#fff', backgroundColor:color}}>
                <h2>Sub는 자식 컴포넌트</h2>
                <ul>
                    <li>이름 : {name}</li>
                    <li>나이 : {age}</li>
                    <li>주소 : {addr}</li>
                    <li>성별 : {sex}</li>
                    <li>전화 : {tel}</li>
                    <li>참여여부 : {done ? "참여":"비참여"}</li>
                </ul>
            </div>
        );
    }
}

class Sub1 extends Component {
    render() {
        return (
            <div style={{width:400, padding:20, color:'#fff', backgroundColor:this.props.color}}>
                <h2>Sub는 자식 컴포넌트</h2>
                <ul>
                    <li>이름 : {this.props.name}</li>
                    <li>나이 : {this.props.age}</li>
                    <li>주소 : {this.props.addr}</li>
                    <li>성별 : {this.props.sex}</li>
                    <li>전화 : {this.props.tel}</li>
                    <li>참여여부 : {this.props.done ? "참여":"비참여"}</li>
                </ul>
            </div>
        );
    }
}

class Test6 extends Component {
    render() {
        return (
            <div>
                <Sub 
                    // 속성 = 값
                    name = "홍길동"
                    // {숫자, 논리값}
                    age = {29}
                    addr = "강남구"
                    tel = "010-9876-5432"
                    sex = "여자"
                    done = {true}
                    color = "skyblue"
                />
                <hr />
                <Sub 
                    name = "유재석"
                    age = {33}
                    color = 'tomato'
                    addr = "동작구"
                    tel = "010-1234-5678"
                    sex = "여자"
                    done = {false}
                />
            </div>
        );
    }
}

// 기본값 Test6 - 밖으로 내보내는 기본
export default Test6;