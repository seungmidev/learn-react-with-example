import React from 'react';
import './Modal.css'
import {AiOutlineCloseCircle} from "react-icons/ai";

const Modal = ({find, onClose}) => {
    const {title, singer, key} = find
    return (
        <div className="Modal">
            <div className="bg" onClick={onClose}></div>
            <div className="popup">
                <h2>곡: {title}</h2>
                <div>
                    <iframe src={`https://www.youtube.com/embed/${key}`} frameborder="0"></iframe>
                </div>
                <p>가수명: {singer}</p>
                <span onClick={onClose}>
                    <i><AiOutlineCloseCircle /></i>
                </span>
            </div>
        </div>
    );
};

export default Modal;