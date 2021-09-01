import React, { useState } from 'react';

const Test18 = () => {
    /*
        class 선언 : state = {변수:초기값}
        class 변경 : this.setState({변수:변경값})
    */
    // const [state, setState] = useState(초기값)
    const [name, setName] = useState('홍길동')

    return (
        <div>
            <h1>값 출력 : {name}</h1>
        </div>
    );
};

export default Test18;