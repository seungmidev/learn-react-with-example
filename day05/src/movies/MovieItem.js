import React from 'react';
import numeral from "numeral";
import { AiFillCaretUp, AiFillCaretDown, AiOutlineDash } from "react-icons/ai";

const MovieItem = ({movie}) => {
    const {rank, movieNm, salesAmt, audiCnt, rankInten} = movie

    return (
        <tr>
            <td>{rank}</td>
            <td>{movieNm}</td>
            <td>{numeral(salesAmt).format(0,0)}원</td>
            {/* numeral(xxx).format(0,0) => 천단위 끊어주기 */}
            <td>{numeral(audiCnt).format(0,0)}명</td>
            <td>
                {rankInten > 0 && <AiFillCaretUp color="red" />}
                {rankInten < 0 && <AiFillCaretDown color="blue" />}
                {rankInten === 0 && <AiOutlineDash color="#333" />}
                {rankInten}
            </td>
        </tr>
    );
};

export default MovieItem;