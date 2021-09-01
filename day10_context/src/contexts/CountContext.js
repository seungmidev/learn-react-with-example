import React, { createContext, useContext, useState } from 'react';

// export const CountContext = createContext()
const CountContext = createContext()

const CountProvider = (props) => {
    const [count, setCount] = useState(0)

    const increment = () => {setCount(count + 1)}
    const decrement = () => {setCount(count - 1)}

    return (
        <CountContext.Provider value={{count, increment, decrement}}>
            {props.children}
        </CountContext.Provider>
    );
};

export default CountProvider;
// 사용자 정의 훅
export const useCount = () => {
    const {count, increment, decrement} = useContext(CountContext)
    return {count, increment, decrement}
}


// import React, { createContext, useState } from 'react';

// export const CountContext = createContext()

// const CountProvider = (props) => {
//     const [count, setCount] = useState(0)

//     const increment = () => {setCount(count + 1)}
//     const decrement = () => {setCount(count - 1)}

//     return (
//         <CountContext.Provider value={{count, increment, decrement}}>
//             {props.children}
//         </CountContext.Provider>
//     );
// };

// export default CountProvider;