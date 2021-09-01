import React, { useCallback, useState } from 'react';
import Test2Count from './Test2Count';
import Test2Title from './Test2Title';

const Test2 = () => {
    const [age, setAge] = useState(29)
    const [money, setMoney] = useState(1000000)

    const onAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const onMoney = useCallback(() => {
        setMoney(money + 1000000)
    }, [money])

    return (
        <div>
            <Test2Title />
            <Test2Count text="나이" count={age} />
            <button onClick={onAge}>나이증가</button>
            <hr />
            <Test2Count text="급여" count={money} />
            <button onClick={onMoney}>급여증가</button>
        </div>
    );
};

export default Test2;