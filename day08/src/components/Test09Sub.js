import React, { useMemo } from 'react';

const getColor = (color) => {
    console.log(getColor)
    switch(color) {
        case 'red': 
            return '빨강';
        case 'pink':
             return '분홍';
        case 'yellow': 
            return '노랑';
        case 'tomato': 
            return '토마토';
        default: 
            return '없음'
    }
}

const getMovie = (movie) => {
    console.log(getMovie)
    switch(movie) {
        case '노마드랜드': 
            return '드라마';
        case '크루엘라':
             return '드라마, 범죄, 코미디';
        case '미나리': 
            return '드라마';
        default: 
            return '없음'
    }
}

const Test09Sub = ({color, movie}) => {
    const colorInfo = useMemo(() => getColor(color), [color]) 
    const movieInfo = useMemo(() => getMovie(movie), [movie]) 

    return (
        <div>
                <h3>내가 좋아하는 색은 {color}이고, 색명은 {colorInfo}입니다.</h3>
            <h3>내가 좋아하는 영화는 {movie}이고, 영화의 장르는 {movieInfo}입니다.</h3>
        </div>
    );
};

export default Test09Sub;