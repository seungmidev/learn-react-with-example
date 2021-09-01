import React, { Component } from 'react';

class Test9 extends Component {
    // class영역 - state 객체 => 출력할 때 this
    // 변경될 변수 - 이름, 나이, 주소
    state = {
        name: '김철수',
        age: 29,
        addr:'강남구'
    }

    handleClick1 = () => {
        this.setState({
            name: '유재석',
            age: 31,
            addr: '동작구'
        })
    }
    handleClick2 = () => {
        this.setState({
            name: '이효리',
            age: 59,
            addr: '은평구'
        })
    }
    handleClick3 = () => {
        this.setState({
            name: '강호동',
            age: 60,
            addr: '중랑구'
        })
    }

    render() {
        return (
            <div>
                {/* 
                    값이 유동으로 처리할 경우
                    const 변수 = 값 (X)

                    react - 값이 변경된다(유동으로 변경될 경우)
                    1) class
                        선언: state = {키:초기값}
                        변경: this.setState({키:변경값})
                    2) 함수형
                        훅: const [state, setState] = useState(초기값)
                */}

                <h2>
                    이름: {this.state.name} /
                    나이: {this.state.age} /
                    주소: {this.state.addr}
                </h2>
                <p>
                    <button onClick={this.handleClick1}>변수1</button>
                    <button onClick={this.handleClick2}>변수2</button>
                    <button onClick={this.handleClick3}>변수3</button>
                    <br />
                    <br />
                    <button onClick={() => this.setState({
                        name: '이승기',
                        age: 28,
                        addr: '서초구'
                    })}>변경1</button>
                    <button onClick={() => this.setState({
                        name: '홍길동',
                        age: 20,
                        addr: '제주도'
                    })}>변경2</button>
                </p>
            </div>
        );
    }
}

export default Test9;