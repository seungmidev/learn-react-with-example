import React, { Component } from 'react';

class Test1 extends Component {
    render() {
        return (
            <> { /* Fragment 또는 공백으로 두면 그룹핑 - 소스에는 div로 떨어짐 */}
                <h2>JSX문법</h2>
                <p>한줄 이상일 경우에는 div 묶어준다</p>
                <p>반드시 닫는 태그가 존재해야한다</p>
                <p>빈태그는 / 사용</p>
                <input type="text" />
            </>
        );
    }
}

export default Test1;