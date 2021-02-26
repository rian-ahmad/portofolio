import React, { Component } from 'react';

class Home extends Component {
    state = {}
    StyleContainerHome = {
        fontFamily: 'Roboto Mono',
        marginLeft: "10vw"
    }

    render() {
        return (
            <div id="home" style={this.StyleContainerHome}>
                <div className="mx-auto" style={{ position: "relative", top: "20vh", }}>
                    <h6 className="text-light" style={{ fontSize: "1.5vw" }}>I'M RIAN AHMAD</h6>
                    <h1 className="text-light" style={{ fontSize: "5vw" }}>ENTHUSIAST</h1>
                    <h1 className="text-light" style={{ fontSize: "5vw" }}>WEB DEVELOPER</h1>
                </div>
            </div>
        );
    }
}

export default Home;