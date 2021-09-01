import React, { useReducer } from 'react';

const initialState = {width: 150} // 초기값 = 숫자, {}, []
const reducer = (state, action) => {
    switch(action.type) {
        case 'PLUS':
            return {width: state.width + action.step}
        case 'MINUS':
            return {width: state.width - action.step}
        case 'RESET':
            return {width: 150}
        default:
            return state
    }
}

// state.width
const Test5 = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div style={{width:state.width, height:100, margin:10, background:'pink', transition:'.4s'}}></div>
            <p>
                <button onClick={() => dispatch({type: 'PLUS', step: 100})}>증가 100</button>
                <button onClick={() => dispatch({type: 'MINUS', step: 50})}>감소 50</button>
                <button onClick={() => dispatch({type: 'RESET'})}>초기화</button>
            </p>
            {/* action type : PLUS, MINUS, RESET */}
        </div>
    );
};

export default Test5;