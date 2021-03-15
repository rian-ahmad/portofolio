import React from 'react';
import DownArrow from './down-arrow.svg';

const ScrollIndicator = () => {
    const getDown = {
        color: "white",
        width: "5vw",
        marginTop: "20vh",
        position: "relative",
        animation: "upDown 2s linear infinite normal"
    }
    return (
        <div className="text-center mb-5">
            <img src={DownArrow} style={getDown} alt="down arrow" />
        </div>
    );
}

export default ScrollIndicator;