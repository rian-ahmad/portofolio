import React, { Component } from 'react';
import ScrollIndicator from "./utils/scroll/scrollIndicatorCenter";
import { Animator, ScrollPage, batch, Fade, MoveOut, Sticky } from "react-scroll-motion";

class Home extends Component {
    state = {}
    StyleContainerHome = {
        width: "90vw",
        height: "90vh",
        marginTop: "50vh",
        marginLeft: "10vh",
    }

    StyleFont = {
        fontFamily: 'Roboto Mono, monospace',
        fontSize: "7vw",
        textShadow: "2pt 1pt 3pt dodgerblue"
    }

    render() {
        return (
            <React.Fragment>
                <ScrollPage page={0}>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                        <div id="home" style={this.StyleContainerHome}>
                            <h1 style={this.StyleFont} className="text-light">I'M RIAN AHMAD</h1>
                            <h6 style={{ fontSize: "2vw" }} className="text-light">TEACHER AND WEB DEVELOPER</h6>
                            <ScrollIndicator />
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={1} />
            </React.Fragment>
        );
    }
}

export default Home;