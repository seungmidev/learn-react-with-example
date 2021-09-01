import React, { useEffect, useState } from 'react';

const MouseMove = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const move = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }
    // 화면에 그려진 후 한번만
    useEffect(() => {
        console.log('useEffect')
        window.addEventListener('mousemove', move)

        // 정리(숨기기 버튼을 눌러서 가려놓아도 이벤트는 실행되므로 오류가 뜸)
        return() => {
            window.removeEventListener('mousemove', move)
        }
    }, [])

    return (
        <div>
            <h2>마우스 좌표</h2>
            <div style={{border:'1px solid #000', width:300, height:65, fontSize:30, lineHeight:2, textAlign:'center'}}>
                X : {x} / Y : {y}
            </div>
        </div>
    );
};

const Test3 = () => {
    const [isActice, setIsActive] = useState(false)
    const onToggle = () => {
        setIsActive(!isActice)
    }

    return (
        <div style={{margin:20}}>
            <button onClick={onToggle}>
                {isActice ? '숨기기':'보이기'}
            </button>
            {isActice && <MouseMove />}
        </div>
    );
};

export default Test3;