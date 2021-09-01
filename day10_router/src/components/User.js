import React from 'react';
import { useParams } from 'react-router-dom';

const User = ({data}) => {
    // :title 받아오기
    const {title} = useParams()

    return (
        <div>
            <h1>User Page</h1>
            <hr />
            {
                data.filter(item => item.title === title)
                    .map(item => <div key={item.title}>
                        <h2>제목: {item.title}</h2>
                        <h3>세부설명: {item.info}</h3>
                    </div>)
            }
        </div>
    );
};

export default User;