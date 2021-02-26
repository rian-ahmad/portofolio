import React, { Component } from 'react';

class Footer extends Component {
    state = {}
    StyleFooter = {
        fontFamily: 'Roboto Mono',
        marginLeft: '6vw',
        padding: "10vw 0"
    }

    render() {
        return (
            <div style={this.StyleFooter} className="footer text-light">
                <h2>Let's create something together!</h2>
                <p><a href="https://drive.google.com/file/d/1EbwoLEl9ySo493lCxbRFaSR5FVM8kG14/view?usp=sharing">
                    Know me better </a>
                    and <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rian.ahmad212@gmail.com">drop a line</a>
                </p>
            </div>
        );
    }
}

export default Footer;