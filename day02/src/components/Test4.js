import React, { Component } from 'react'; //의존성(노드모듈 안에 있는걸 가져옴)
import './Test4.css'


class Test4 extends Component {
    render() {
        return (
            // class는 예약어라 사용불가, className 사용
            <div className="wrap">
                <div className="box box1">Test</div>
                <div className="box box2">Test</div>
                <div className="box box3">Test</div>
                <div className="box box4">Test</div>
            </div>
        );
    }
}

export default Test4;