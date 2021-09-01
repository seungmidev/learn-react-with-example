import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test1 = () => {
    const [count, setCount] = useState(0)
    const ref1 = useRef()
    const ref2 = useRef()
    const click1 = () => {
        setCount(count + 1)
        ref1.current.style.color = 'pink'
        ref2.current.style.color = 'skyblue'
    }

    // 화면에 그려진 후 실행
    useEffect(() => {
        console.log('useEffect')
        ref1.current.style.color = 'tomato'
    })

    // 화면에 그려지기 전 실행
    useLayoutEffect(() => {
        console.log('useLayoutEffect')
        ref2.current.style.color = 'lime'
    })

    // useEffect가 안될 때 useLayoutEffect 사용(보통 useEffect가 주사용)

    return (
        <div style={{margin:20}}>
            <h1>카운트 : {count}</h1>
            <h2 ref={ref1}>useEffect</h2>
            <h2 ref={ref2}>useLayoutEffect</h2>
            <button onClick={click1}>컬러, 숫자 변경</button>
        </div>
    );
};

export default Test1;

/*
    리액트의 class 생명주기 메서드에 친숙하다면, useEffect Hook을 componentDidMount와 componentDidUpdate, componentWillUnmount가 합쳐진 것으로 생각해도 좋습니다. 

    useEffect
    - 화면에 렌더린이 완료된 후 수행
    - 컴포넌트가 렌더링 될 때 마다 수행
    - class의 componentDidMount와 componentDidUpdate, componentWillUnmount
    - 문법 => useEffect(콜백함수, [변수])

    마운트란?
    - 리액트에서 컴포넌트를 특정 영역에 끼워넣는 것
    - App.js를 #root에 끼워넣기 => ReactDOM.render(App.js, #root)

    useEffect의 Hook
    - 마운드 됐을 때(처음 나타날 때)
    - 업데이트 될 때 (특정 props, state가 바뀔 때)
    - 언마운트 될 때 (사라질 때)

    1. mount / update
    useEffect(() => {
        실행문
    })

    2. mount
    useEffect(() => {
        실행문
    }, [])

    3. 특정 props, state가 바뀔 때마다 update
    useEffect(() => {
        실행문
    }, [의존변수])

    4. 정리(Clean-up)
    - 메모리의 누수를 막기 위해 UI컴포넌트를 제거하기 전에 수행
    - 컴포넌트가 여러번 렌더링 된다면 다음 effect가 수행되기 전에 이전 effect를 정리함
    useEffect(() => {
        return() => {
            정리 내용
        }
    }, [props])

    사용범위
    - props로 받은 값을 처리
    - 외부 API(ajax 처리) => axios, fetch
    - setInterval, setTimeout
    - 외부 라이브러리
*/