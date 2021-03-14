import React, { Component } from 'react';
import SocialMedia from "./socialMedia";

class Footer extends Component {
    state = {}

    render() {
        return (
            <div style={{ fontFamily: 'Roboto Mono' }} className="container-fluid text-light">
                <footer className="row">
                    <div className="footer col-md-8">
                        <h4>Let's create something together!</h4>
                        <p><a href="https://drive.google.com/file/d/1EbwoLEl9ySo493lCxbRFaSR5FVM8kG14/view?usp=sharing">
                            Know me better </a>
                            and <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rian.ahmad212@gmail.com">
                                drop a line</a>
                        </p>
                    </div>

                    <div className="col-md-4 d-flex"><SocialMedia /></div>
                    <div style={{ fontFamily: "Roboto Mono", width: "90vw", textAlign: "center" }} className="mt-5">
                        <small>AUTHOR: RIAN AHMAD | {new Date().getFullYear()}</small>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;