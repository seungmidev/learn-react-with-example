import React, { Component } from 'react';
import './Test13.css'

class Test13 extends Component {
    state = {
        data: [
            {no: 1, name: '유재석', age: 20, addr: '서울', isActive: false},
            {no: 2, name: '이효리', age: 30, addr: '제주', isActive: true},
            {no: 3, name: '제시', age: 40, addr: '경기', isActive: true},
            {no: 4, name: '엄정화', age: 50, addr: '전주', isActive: false},
            {no: 5, name: '화사', age: 60, addr: '경남', isActive: true},
            {no: 6, name: '김종민', age: 70, addr: '강원', isActive: false},
        ]
    }

    render() {
        const {data} = this.state

        return (
            <div className="Test13">
                <h2>출연진 명단</h2>
                <table>
                    <colgroup>
                        <col className="w1" />
                        <col className="w2" />
                        <col className="w3" />
                        <col className="w4" />
                        <col className="w5" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>나이</th>
                            <th>주소</th>
                            <th>참여여부</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item => <tr key={item.no}>
                                <td>{item.no}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.addr}</td>
                                <td>
                                    {/* {item.isActive ? '참여':'미참여'} */}
                                    {item.isActive && '참여'}
                                    {item.isActive || '미참여'}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Test13;