import React, { Component } from 'react';
import { Animator, ScrollPage, batch, FadeIn, Move, Sticky } from "react-scroll-motion";
import SocialMedia from "./socialMedia";

class Footer extends Component {
    state = {}
    StyleFooter = {
        fontFamily: 'Roboto Mono',
        marginLeft: '6vw',
    }

    render() {
        const FadeUp = this.getAnimFadeUp();
        return (
            <div style={this.StyleFooter} className="container-fluid text-light">
                <ScrollPage page={7}>
                    <Animator animation={FadeUp}>
                        <div style={{ marginBottom: "20vh" }}>
                            <h1 style={{ fontSize: "7vw" }}>I'M RIAN AHMAD</h1>
                            <h6 style={{ fontSize: "2vw" }}>ENTHUSIAST TEACHER AND WEB DEVELOPER</h6>
                        </div>
                        <footer className="row mt-5">
                            <div className="footer col-md-8">
                                <h4>Let's create something together!</h4>
                                <p><a href="https://drive.google.com/file/d/1EbwoLEl9ySo493lCxbRFaSR5FVM8kG14/view?usp=sharing">
                                    Know me better </a>
                    and <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rian.ahmad212@gmail.com">drop a line</a>
                                </p>
                            </div>

                            <div className="col-md-4 d-flex justify-content-center"><SocialMedia /></div>
                            <div style={{ fontFamily: "Roboto Mono", width: "90vw" }} className="mt-5">
                                <small className="d-flex justify-content-center">AUTHOR: RIAN AHMAD | 2021</small>
                            </div>
                        </footer>
                    </Animator>
                </ScrollPage>
            </div>
        );
    }

    getAnimFadeUp() {
        return batch(FadeIn(0.5, 1), Move(), Sticky());
    }
}

export default Footer;