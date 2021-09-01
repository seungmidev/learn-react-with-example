import React from 'react';
import './Test4.css'
import myStyle from './Test4.module.css'

const Test4 = () => {
    return (
        <div className="wrap">
            {/* cssModule */}
            <div className="box">test4.css</div>
            <div className={myStyle.box}>Test4.module.css</div>

            {/* 다중 클래스 - 백틱처리 */}
            <div className="size bg">test4.css</div>
            <div className={`${myStyle.size} ${myStyle.bg}`}>Test4.module.css</div>
            <div className={`size ${myStyle.bg}`}>test4.css + Test4.module.css</div>

            {/* 다중 클래스 배열 join으로 연결 */}
            <div className={[myStyle.size, myStyle.bg].join(' ')}>Test4.module.css</div>
            <div className={["size", myStyle.bg].join(' ')}>test4.css + Test4.module.css</div>

            {/* 독립 클래스 :global 클래스명 */}
            <div className="mybox"></div>
        </div>
    );
};

export default Test4;

/*
    >> 파일명.module.css => 클래스 이름의 중첩을 제거하기 위해 사용

    - aaa.css => .box {} => <태그 className="">
    - aaa.module.css => .box {} => aaa_box_xxx_xxx 이런식으로 클래스가 붙음(임의의 클래스명)
        파일명_클래스명_임시이름
        <태그 className={import한 이름.클래스명}

    - 작업을 하다보면 클래스명이 중복되는 경우가 있는데 이를 방지하기 위해 사용
    - 아이디명은 유일성 => 재사용에 맞지 않기 때문에 큰영역에 주로 사용하고 컴포넌트에서는 클래스를 사용
*/