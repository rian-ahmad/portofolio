import React, { Component } from 'react';
import { SocialIcon } from "react-social-icons";

class SocialMedia extends Component {
    state = {}
    ClassSocialContainer = ""
    ClassSocialItem = "mx-2"

    render() {
        return (
            <div className={this.ClassSocialContainer}>
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