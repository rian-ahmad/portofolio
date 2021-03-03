import React, { Component } from 'react';
import { Animator, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky } from "react-scroll-motion";
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';

class ProjectGallery extends Component {
    state = {}
    ContainerStyle = {
        marginLeft: "6vw",
        marginTop: "50vh"
    }

    FontStyle = {
        fontFamily: 'Roboto Mono',
        color: "white",
        letterSpacing: "1vw",
        margin: "10% 0",
        fontSize: "7vw",
        textAlign: "center",
        width: "90vw"
    }

    render() {
        return (
            <div style={this.ContainerStyle} className="container-fluid">
                <ScrollPage page={2}>
                    <Animator animation={this.getAnimFadeUp}>
                        <h1 style={this.FontStyle}>Look at my works</h1>
                    </Animator>
                </ScrollPage>

                <ScrollPage page={3} />

                <ScrollPage page={4}>
                    <Animator animation={this.getAnimPage4}>
                        <div className="row blockquote" style={{ width: "90vw" }}>
                            <div className="col-sm-5">
                                <img src={img1} className="img-rounded img-fluid" alt="Cinque Terre" />
                            </div>
                            <div className="col-sm-6 text-light" style={{ backgroundColor: "rgba(100, 100, 255, 0.9)" }}>
                                <h3 style={{ marginBottom: 1 }}>Lorem Ipsum</h3>
                                <p style={{ fontSize: "0.5em" }}>Morbi non enim ultrices, fermentum ipsum id, tristique odio.</p>
                                <blockquote className="blockquote">
                                    <p>
                                        consectetur adipiscing elit. Donec lobortis nec neque sit amet venenatis. In auctor fermentum sapien non finibus.
                                        Nunc viverra tortor neque, nec pretium dui lobortis eget.
                                    </p>
                                    <footer className="blockquote-footer" style={{ fontSize: "0.8em", color: "whitesmoke" }}>Lorem ipsum dolor sit amet</footer>
                                </blockquote>
                            </div>
                        </div>
                    </Animator>
                </ScrollPage>

                <ScrollPage page={5}>
                    <Animator animation={this.getAnimPage5}>
                        <div className="row blockquote" style={{ width: "90vw" }}>
                            <div className="col-sm-5">
                                <img src={img2} className="img-rounded img-fluid" alt="Cinque Terre" />
                            </div>
                            <div className="col-sm-6 text-light" style={{ backgroundColor: "rgba(100, 100, 255, 0.9)" }}>
                                <h3 style={{ marginBottom: 1 }}>Sed ornare dui ut nulla auctor</h3>
                                <p style={{ fontSize: "0.5em" }}>Morbi non enim ultrices, fermentum ipsum id, tristique odio.</p>
                                <blockquote className="blockquote">
                                    <p>
                                        Integer pulvinar hendrerit lectus quis vulputate. Nam posuere, eros in auctor elementum,
                                        ipsum turpis imperdiet enim, vitae tristique nibh neque eget nulla.
                                    </p>
                                    <footer className="blockquote-footer" style={{ fontSize: "0.8em", color: "whitesmoke" }}>Lorem ipsum dolor sit amet</footer>
                                </blockquote>
                            </div>
                        </div>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={6} />
            </div>
        );
    }

    getAnimFadeUp() {
        return batch(Fade(), Move(), Sticky());
    }

    getAnimPage4() {
        return batch(Fade(), Sticky(), MoveOut(0, -200));
    }

    getAnimPage5() {
        return batch(FadeIn(), MoveIn(0, 500), Sticky(), Fade());
    }
}

export default ProjectGallery;