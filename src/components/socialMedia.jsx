import React, { Component } from 'react';
import { SocialIcon } from "react-social-icons";

class SocialMedia extends Component {
    state = {}
    StyleSocialContainer = { position: "fixed", top: "1vw", marginTop: "10vh", height: "100vh" }
    ClassSocialContainer = "nav flex-column mx-auto"
    ClassSocialItem = "my-2"

    render() {
        return (
            <div className={this.ClassSocialContainer} style={this.StyleSocialContainer}>
                <SocialIcon className={this.ClassSocialItem}
                    url="https://www.instagram.com/ryan.ahmds/"
                    bgColor="white"
                    style={{ width: "5vw", height: "5vw" }}
                />
                <SocialIcon className={this.ClassSocialItem}
                    url="https://web.facebook.com/ryan.ahmad.98"
                    bgColor="white"
                    style={{ width: "5vw", height: "5vw" }}
                />
                <SocialIcon className={this.ClassSocialItem}
                    url="https://github.com/rian-ahmad"
                    bgColor="white"
                    style={{ width: "5vw", height: "5vw" }}
                />
                <SocialIcon className={this.ClassSocialItem}
                    url="https://www.linkedin.com/in/ryan-ahmad-a5a8481ba/"
                    bgColor="white"
                    style={{ width: "5vw", height: "5vw" }}
                />
            </div>
        );
    }
}

export default SocialMedia;