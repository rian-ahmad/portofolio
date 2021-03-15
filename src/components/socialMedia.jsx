import React from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialMedia = () => {
    return (
        <div id="social-icon" className="d-flex justify-content-center">
            <SocialIcon
                url="https://www.instagram.com/ryan.ahmds/"
                bgColor="white"
                className="m-2"
            />
            <SocialIcon
                url="https://web.facebook.com/ryan.ahmad.98"
                bgColor="white"
                className="m-2"
            />
            <SocialIcon
                url="https://github.com/rian-ahmad"
                bgColor="white"
                className="m-2"
            />
            <SocialIcon 
                url="https://www.linkedin.com/in/ryan-ahmad-a5a8481ba/"
                bgColor="white"
                className="m-2"
            />
        </div>
    );
}

export default SocialMedia;