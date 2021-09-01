import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({movies}) => {
    return (
        <div className="list">
            <table>
                <colgroup>
                    <col className="w1" />
                    <col className="w2" />
                    <col className="w3" />
                    <col className="w4" />
                    <col className="w5" />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">순위</th>
                        <th scope="col">영화명</th>
                        <th scope="col">매출액</th>
                        <th scope="col">관객수</th>
                        <th scope="col">증감률</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map(movie => <MovieItem key={movie.rank} movie={movie} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MovieList;