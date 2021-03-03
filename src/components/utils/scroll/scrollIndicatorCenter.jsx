import React, { Component } from 'react';
import DownArrow from './down-arrow.svg';

class scrollUtil extends Component {
    state = {}
    getDown = {
        color: "white",
        width: "5vw",
        position: "relative",
        animation: "upDown 2s linear infinite normal"
    }

    render() {
        return (
            <div style={{ margin: "40vh auto 0 40vw" }}>
                <img src={DownArrow} style={this.getDown} alt="down arrow" />
            </div>
        );
    }
}

export default scrollUtil;