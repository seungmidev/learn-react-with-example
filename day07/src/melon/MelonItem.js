import React from 'react';
import numeral from "numeral";
import {FcLikePlaceholder, FcLike} from "react-icons/fc";
import {AiOutlineVideoCamera, AiFillCaretUp, AiFillCaretDown, AiOutlineDash} from "react-icons/ai";

const MelonItem = ({music, onLike, onOpen}) => {
    const {id, rank, title, singer, poster, state, like, done, album} = music

    return (
        <tr>
            <td>{rank}</td>
            <td className="img">
                <img src={poster} width="50" />
                <p>
                    <span>{title}</span>
                    {singer}
                </p>
            </td>
            <td>{album}</td>
            <td className="like">
                <i onClick={() => onLike(id)}>{done ? <FcLike />:<FcLikePlaceholder />}</i>
                {numeral(like).format(0,0)}
            </td>
            <td>
                <i onClick={() => onOpen(id)}><AiOutlineVideoCamera /></i>
            </td>
            <td>
                <i>
                    {state ==='상승' && <AiFillCaretUp color="red" />}
                    {state ==='하강' && <AiFillCaretDown color="blue" />}
                    {state ==='유지' && <AiOutlineDash />}
                </i>
            </td>
        </tr>
    );
};

export default MelonItem;