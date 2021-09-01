import React, { Component } from 'react';

class Test8 extends Component {
    // class영역
    handleClick1 = () => {
        alert("연습1")
    }
    handleClick2 = () => {
        alert("연습2")
    }
    handleClick3 = () => {
        alert("연습3")
    }
    handleClick4 = (num) => {
        alert(num)
    }
    // const 함수형 = () => {}

    render() {
        return (
            <div>
                {/* class영역의 값을 출력할 경우 this */}
                {/* 함수형 : onClick={handleClick1} */}
                <button onClick={this.handleClick1}>클릭1</button>
                <button onClick={this.handleClick2}>클릭2</button>
                <button onClick={this.handleClick3}>클릭3</button>
                {/* 실행되는 문구가 한 줄이면 생략해서 작성 가능 */}
                <button onClick={() => alert("연습4")}>클릭4</button>
                <button onClick={() => alert("연습5")}>클릭5</button>
                <br />
                <br />
                {/* 
                    onClick={this.함수명(값)} -> 바로 실행
                    값이 전달될 경우는 반드시 함수로 한번 묶어줘야함
                    onClick={() => this.함수명(값)}
                */}
                <button onClick={() => this.handleClick4(100)}>값 전달</button>
                <button onClick={() => this.handleClick4(200)}>값 전달</button>
                <button onClick={() => this.handleClick4(300)}>값 전달</button>
            </div>
        );
    }
}

export default Test8;