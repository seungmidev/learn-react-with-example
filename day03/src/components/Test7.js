import React from 'react';

const Test7 = () => {
    // 폼 관련 event, evt, e
    const click = (e) => {
        console.log(e.target)
        console.log(e.currentTarget)
        /*
            e.target : 클릭한 부분
            e.currentTarget : 이벤트한 부분
        */
    }

    return (
        <div>
            <button onClick={click}>
                <span>확인</span> <br />
                <b>클릭</b>
            </button>
        </div>
    );
};

export default Test7;