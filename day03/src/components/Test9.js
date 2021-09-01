import React, { useRef } from 'react';

const Test9 = () => {
    const idRef = useRef(null) // 초기값은 공백 or null
    const pwRef = useRef(null)

    const click = () => {
        const data = {
            id: idRef.current.value, // 값에 해당하는 중간값을 사용하려면 current 필수
            pw: pwRef.current.value
        }

        // JSON.stringify(value, replacer, space)
        const json = JSON.stringify(data, null, 5)
        console.log(json)
    }

    return (
        <div>
            {/* useRef의 수업용일뿐, 실제예제로는 적합하지않음 */}
            <input type="text" ref={idRef} />
            <input type="text" ref={pwRef} />
            <button onClick={click}>확인</button>
        </div>
    );
};

export default Test9;

/*
userRef
    DOM을 직접 선택해야하는 상황일 때
    1. 특정요소의 크기를 가져올 때
    2. 스크롤바 위치값
    3. * focus

- userRef 남용금지
*/