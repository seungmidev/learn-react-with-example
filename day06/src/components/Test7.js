import React, { useState } from 'react';

// src 안에 있는 이미지
import img1 from '../utils/images/img1.jpg'
import img2 from '../utils/images/img2.jpg'

// js형식의 이미지
import image from '../utils/api/image'

const Test7 = () => {
    const [img, setImg] = useState(image)

    return (
        <div>
            <p>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </p>
            <p>
                {/* public 안에 있는 이미지 */}
                <img src="./images/m0.jpg" alt="" />
                <img src="./images/m1.jpg" alt="" />
            </p>
            <p>
                {/* js형식의 이미지 */}
                <img src={img[0].img} alt="" />
                <img src={img[1].img} alt="" />
                <img src={img[2].img} alt="" />
            </p>
        </div>
    );
};

export default Test7;