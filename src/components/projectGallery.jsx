import React, { Component } from 'react';
import Logo1 from './img/1.jpg';
import Logo2 from './img/2.jpg';

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
        fontSize: "7vw"
    }

    render() {
        return (
            <div style={this.ContainerStyle} className="container-fluid">
                <h1 style={this.FontStyle}>Look at my works</h1>
                <div className="row blockquote">
                    <div className="col-sm-5">
                        <img src={Logo1} style={{ width: "35vw" }} className="img-rounded img-responsive" alt="Cinque Terre" />
                    </div>
                    <div className="col-sm-6 text-light">
                        <h2 style={{ marginBottom: 1 }}>Lorem Ipsum</h2>
                        <p style={{ fontSize: "0.8em" }}>Morbi non enim ultrices, fermentum ipsum id, tristique odio.</p>
                        <blockquote className="blockquote">
                            <p style={{ marginBottom: 1 }}>
                                Praesent at velit pharetra, ultrices turpis at, interdum ante.
                                Proin mattis odio ut risus sodales, ac consequat ipsum suscipit.
                                Aliquam hendrerit ex a felis hendrerit tincidunt. Aliquam commodo neque eget consectetur luctus.
                            </p>
                            <footer className="blockquote-footer" style={{ fontSize: "0.8em" }}>Lorem ipsum dolor sit amet</footer>
                        </blockquote>
                    </div>
                </div>

                <div className="row blockquote mt-5">
                    <div className="col-sm-5">
                        <img src={Logo2} style={{ width: "35vw" }} className="img-rounded" alt="Cinque Terre" />
                    </div>
                    <div className="col-sm-6 text-light">
                        <h3 style={{ marginBottom: 1 }}>Lorem Ipsum</h3>
                        <p style={{ fontSize: "0.8em" }}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                        <blockquote className="blockquote">
                            <p style={{ marginBottom: 1 }}>
                                Praesent hendrerit orci leo. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                Fusce interdum elit neque. Phasellus id felis pharetra, rhoncus ante ut, blandit erat.
                                Donec sollicitudin, dolor vel elementum faucibus, nibh libero bibendum erat, eu sollicitudin risus augue vel massa.
                            </p>
                            <footer className="blockquote-footer" style={{ fontSize: "0.8em" }}>Lorem Ipsum</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectGallery;