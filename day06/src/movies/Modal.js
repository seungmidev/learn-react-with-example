import React from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';

const Modal = ({movieid, onClose}) => {
    const {movieNm, thumbUrl, director} = movieid

    return (
        <div className="modal">
            <div className="bg"></div>
            <div className="popup">
                <h2>{movieNm}</h2>
                <div>
                    <img src={thumbUrl} alt={movieNm} />
                </div>
                <h3>감독 : {director}</h3>
                <p className="close" onClick={onClose}>
                    <AiOutlineCloseCircle />
                </p>
            </div>
        </div>
    );
};

export default Modal;