import React from 'react';
import { SocialIcon } from 'react-social-icons';

const style = {
    width: "5vw", height: "5vw", marginRight: "1rem"
}

const SocialMedia = () => {
    return (
        <div>
            <SocialIcon
                url="https://www.instagram.com/ryan.ahmds/"
                bgColor="white"
                style={style}
            />
            <SocialIcon
                url="https://web.facebook.com/ryan.ahmad.98"
                bgColor="white"
                style={style}
            />
            <SocialIcon
                url="https://github.com/rian-ahmad"
                bgColor="white"
                style={style}
            />
            <SocialIcon 
                url="https://www.linkedin.com/in/ryan-ahmad-a5a8481ba/"
                bgColor="white"
                style={style}
            />
        </div>
    );
}

export default SocialMedia;