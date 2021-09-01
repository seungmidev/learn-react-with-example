import React, { useState } from 'react';
import '../utils/css/reset.css'
import './style.css'
import data from '../utils/api/movie.json'
import MovieView from './MovieView';
import MovieList from './MovieList';
import Modal from './Modal';

const Movies = () => {
    const [movies , setMovies] = useState(data)
    const [movieid, setMovieid] = useState(data[0])
    const [isActive, setIsActive] = useState(false)

    const onOver = (id) => {
        // setMovieid(movies[id - 1])

        // Array.prototype.find() => 첫 번째 요소의 값을 반환, 없다면 undefined를 반환
        setMovieid(movies.find(item => item.rank === id))
        // Array.prototype.findIndex() => 배열의 첫 번째 요소에 대한 인덱스를 반환, 없으면 -1을 반환
    }

    const onOpen = () => {
        setIsActive(true)
    }

    const onClose = () => {
        setIsActive(false)
    }

    return (
        <div className="gallery">
            <MovieView movieid={movieid} onOpen={onOpen} onClose={onClose} />   
            <MovieList movies={movies} onOver={onOver} />
            {
                isActive && <Modal movieid={movieid} onClose={onClose} />  
            }
        </div>
    );
};

export default Movies;