import React from 'react';
import SocialMedia from "./socialMedia";

const Footer = () => {
    return (
        <div style={{ fontFamily: 'Roboto Mono' }} className="container-fluid text-light mt-5">
            <footer className="row mt-5">
                <div className="footer col-md-8">
                    <h4>Let's create something together!</h4>
                    <p><a href="https://drive.google.com/file/d/1EbwoLEl9ySo493lCxbRFaSR5FVM8kG14/view?usp=sharing">
                        Know me better </a>
                and <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rian.ahmad212@gmail.com">
                            drop a line</a>
                    </p>
                </div>

                <div className="col-md-4 d-flex justify-content-center mb-5"><SocialMedia /></div>
                <small className="w-100 text-center mt-5">AUTHOR: RIAN AHMAD | {new Date().getFullYear()}</small>
            </footer>
        </div>
    );
}

export default Footer;