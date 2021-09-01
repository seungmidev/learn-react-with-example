import React from 'react';
import styled from 'styled-components'

// 사용자가 컴포넌트 이름처럼 지정하고 태그로 대체해서 사용
const Container = styled.div`
    width:300px; padding:20px; border: 1px solid #000; margin: 20px;
`
const Box1 = styled.section`
    padding: 20px; background-color:pink; transition: all.5s; margin-bottom: 15px;
    &:hover {background-color:skyblue;}
`
const Box2 = styled('article')`
    padding: 15px; background-color: yellow; transition: all.3s; box-sizing: border-box; width:100%; margin-bottom:10px;
    &:hover {width:150%; background-color:lime;}
`
const Button = styled('button')`
    padding:15px 50px; border:none; background-color:blue; color:#fff; transition: .4s;
    &:hover {background-color:red;}
`

const Test7 = () => {
    return (
        <div>
            <h2>styled-components</h2>
            <Container>
                <Box1>안녕하세요</Box1>
                <Box2>안녕하세요</Box2>
                <Button>확인</Button>
            </Container>
        </div>
    );
};

export default Test7;