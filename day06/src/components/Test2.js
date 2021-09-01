import React, { useEffect, useLayoutEffect, useRef } from 'react';

const Test2 = () => {
    const ref1 = useRef()

    useEffect(() => {
        // ref1.current.focus()
    }, [])

    useLayoutEffect(() => {
        ref1.current.focus()
    }, [])

     return (
        <div style={{margin:30}}>
            <input type="text" ref={ref1} />
            <input type="text" />
        </div>
    );
};

export default Test2;