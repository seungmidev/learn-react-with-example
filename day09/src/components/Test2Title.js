import React from 'react';

const Test2Title = () => {
    console.log('Test2Title')
    
    return (
        <div>
            <h3>나이와 급여</h3>
            <p>* React.memo(컴포넌트) :  컴포넌트의 return 값을 기억</p>
        </div>
    );
};

export default React.memo(Test2Title);