import React, { Component } from 'react';

class Test3 extends Component {
    render() {
        //js처리
        //px단위 생략 가능
        //스타일은 - 제외하고 대문자로
        //스타일은 객체 형식으로 작성
        
        const style1 = {
            backgroundColor:"pink",
            fontSize:30,
            textIndent:20,
            lineHeight:'60px', //기본 단위가 em이라서 px을 쓰려면 단위 적어주기
            color:"gray"
        }
        const style2 = {
            fontSize:20,
            height:40,
            border:'1px solid #000',
            textAlign:'center',
            lineHeight:'40px'
        }
        const style3 = {
            fontSize:40,
            color:'blue',
            backgroundColor:'red'
        }
        return (
            <div>
                <h2 style={style1}>스타일</h2>
                <h2 style={style2}>스타일</h2>
                <h2 style={style3}>스타일</h2>
                <p style={{ //인라인 스타일로 넣을 경우는 {}를 두번
                    fontSize:40, lineHeight:3, backgroundColor:'tomato'
                }}>
                    스타일 연습중
                </p>
            </div>
        );
    }
}

export default Test3;