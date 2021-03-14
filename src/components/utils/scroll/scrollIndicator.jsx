import React from 'react';
import DownArrow from './down-arrow.svg';

let getDown = {
    color: "white",
    width: "5vw",
    marginTop: "20vh",
    position: "relative",
    animation: "upDown 2s linear infinite normal"
}

const ScrollIndicator = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <img src={DownArrow} style={getDown} alt="down arrow" />
        </div>
    );
}

export default ScrollIndicator;