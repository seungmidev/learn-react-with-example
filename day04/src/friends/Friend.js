import React, { useState } from 'react';
import '../utils/css/reset.css'
import './style.css'
import freind from '../utils/api/friend'
import FriendList from './FriendList';

const Friend = () => {
    const [data, setData] = useState(freind)

    const removeAll = () => {
        setData([])
    }

    return (
        <div className="wrap">
            <h1>친구들 총인원 : {data.length}</h1>
            <FriendList data={data} />
            <p className="btn">
                <button onClick={removeAll}>전체 삭제</button>
            </p>
        </div>
    );
};

export default Friend;