import React, { Component } from 'react';

class Test15 extends Component {
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

    // 값 삭제
    click1 = () => {
        this.setState({
            data: this.state.data.filter(item => item.no !== 1)
        })
    }
    click2 = () => {
        const {data} = this.state
        this.setState({
            data: data.filter(item => item.no !== 2)
        })
    }
    click3 = () => {
        const {data} = this.state
        this.setState({
            data: data.filter(item => item.no !== 3)
        })
    }
    click4 = (num) => {
        const {data} = this.state
        this.setState({
            data: data.filter(item => item.no !== num)
        })
    }

    // 값 수정
    click5 = () => {
        const {data} = this.state
        this.setState({
            data: data.map(item => {
                if(item.no === 1) {
                    return {
                        ...item, // 스프레드 연산자
                        name: '이젠', 
                        age: 10, 
                        addr: '부산', 
                        isActive: true
                    }
                } else {
                    return item
                }
            })
        })
    }
    click6 = () => {
        const {data} = this.state
        this.setState({
            data: data.map(item => {
                if(item.no === 2) {
                    return {
                        ...item,
                        name: '코딩',
                        age: 80,
                        addr: '인천',
                        isActive: false
                    }
                }
                return item
            })
        })
    }
    // 삼항연산자
    click7 = () => {
        const {data} = this.state
        this.setState({
            data: data.map(item => item.no === 5 ?
                 {...item, name: '정재형', age: 30, addr: '세종'}:item)
        })
    }
    click8 = (num) => {
        const {data} = this.state
        this.setState({
            data: data.map(item => item.no === num ? 
                {...item, name: '홍길동', age:10}:item)
        })
    }

    render() {
        const {data} = this.state
        return (
            <div>
                <h1>삭제(filter), 수정(map - if)</h1>
                <div>
                    <button onClick={this.click1}>삭제1</button>
                    <button onClick={this.click2}>삭제2</button>
                    <button onClick={this.click3}>삭제3</button>
                </div>
                <hr />
                <div>
                    <button onClick={() => this.click4(4)}>삭제1</button>
                    <button onClick={() => this.click4(5)}>삭제2</button>
                    <button onClick={() => this.click4(6)}>삭제3</button>
                </div>
                <hr />
                <div>
                    <button onClick={this.click5}>수정1</button>
                    <button onClick={this.click6}>수정2</button>
                    <button onClick={this.click7}>수정3</button>
                </div>
                <hr />
                <div>
                    <button onClick={() => this.click8(3)}>수정4</button>
                </div>
                <ul>
                    {
                        data.map(item => <li key={item.no}>
                            {item.no}/ {item.name} / {item.age} / {item.addr} / {item.isActive ? '참여':'미참여'}
                        </li>)
                    }    
                </ul>             
            </div>
        );
    }
}

export default Test15;