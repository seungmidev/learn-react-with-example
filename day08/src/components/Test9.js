import React, { useState } from 'react';
import Test09Sub from './Test09Sub';

const Test9 = () => {
    const [color, setColor] = useState('')
    const [movie, setMovie] = useState('')

    const onColor = (e) => {
        setColor(e.target.value)
    }

    const onMovie = (e) => {
        setMovie(e.target.value)
    }

    return (
        <div>
            <h2>당신이 좋아하는 색은?</h2>
            <p>
                <input type="text" onChange={onColor} /> <br />
                <span>예시) red, pink, yellow, tomato</span>
            </p>

            <hr />

            <h2>당신이 좋아하는 영화는?</h2>
            <p>
                <label>노마드랜드</label>
                <input type="radio" value="노마드랜드" name="movie" onChange={onMovie} />
            </p>
            <p>
                <label>크루엘라</label>
                <input type="radio" value="크루엘라" name="movie" onChange={onMovie} />
            </p>
            <p>
                <label>미나리</label>
                <input type="radio" value="미나리" name="movie" onChange={onMovie} />
            </p>

            <hr />

            <Test09Sub color={color} movie={movie} />
        </div>
    );
};

export default Test9;