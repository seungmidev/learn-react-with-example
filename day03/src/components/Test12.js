import React, { useState } from 'react';

const Test12 = () => {
    const [check, setCheck] = useState(false)
    const handleChange = (e) => { // 폼요소에 onChange가 들어가면 event가 꼭 들어감
        const {checked} = e.target
        setCheck(checked)
    }
    const click = () => {
        alert(`checked ${check}`)
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={check} onChange={handleChange} />
                체크박스
            </label>
            <button onClick={click}>확인</button>
            {
                check &&
                <div style={{width:300, height:200, marginTop:40, backgroundColor:'blue'}}></div>
            }
        </div>
    );
};

export default Test12;