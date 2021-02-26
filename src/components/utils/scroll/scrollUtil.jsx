import React, { Component } from 'react';
import DownArrow from './down-arrow.svg';

class scrollUtil extends Component {
    state = {}
    getDown = {
        color: "white",
        width: "5vw",
        position: "relative",
        marginTop: "90vh",
        animation: "upDown 2s linear infinite normal"
    }

    render() {
        return (
            <div style={{ height: "50vh" }}>
                <img src={DownArrow} style={this.getDown} alt="down arrow" />
            </div>
        );
    }
}

export default scrollUtil;