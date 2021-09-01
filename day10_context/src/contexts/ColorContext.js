import React, { createContext, useContext, useState } from 'react';

//export const ColorContext = createContext() // 관리자
const ColorContext = createContext() // 관리자

const ColorProvider = (props) => {
    // color의 모든 행동과 상태값
    const [color, setColor] = useState('black')
    const onRed = () => {setColor('red')}
    const onPink = () => {setColor('pink')}
    const onLime = () => {setColor('lime')}
    const onSkyblue = () => {setColor('skyblue')}
    const onTomato = () => {setColor('tomato')}

    return (
        // Provider 공급자
        <ColorContext.Provider value={{color, onRed, onPink, onLime, onSkyblue, onTomato}}>
            {props.children}
            {/* <Color /> */}
        </ColorContext.Provider>
    );
};

export default ColorProvider;
// 다이렉트로 내려주는 법 (강사님 스타일) , 복잡하게 쓰이면 redux를 사용
export const useColor = () => {
    const {color, onRed, onPink, onLime, onSkyblue, onTomato} = useContext(ColorContext)
    return {color, onRed, onPink, onLime, onSkyblue, onTomato}
}