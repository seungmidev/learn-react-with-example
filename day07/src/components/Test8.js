import React from 'react';
import styled, {css} from 'styled-components'

const Container = styled.div`
    border:1px solid #000; padding:30px; margin:10px; width:${props => props.w}; background:${props => props.bg ? props.bg:'beige'};
`
const Box = styled.button`
    width:${props => props.width}; height:40px; margin:10px; background:${props => props.bg}; border:none;

    // 주어진 속성에 별도의 css를 설정할 수 있다
    ${
        props => props.test && css `
            width:200px; height:200px; border-radius:100%; font-size:25px; cursor:pointer; transition:.3s;
            &:hover {background-color:#000; color:#fff;}
        `
    }
`

const Test8 = () => {
    return (
        <Container w="500px" bg="pink">
            <Box width="200px">버튼</Box>
            <Box width="150px" bg="yellow">버튼</Box>
            <Box width="100px" bg="tomato">버튼</Box>
            <Box width="80px">버튼</Box>
            <Box test>버튼</Box>
        </Container>
    );
};

export default Test8;