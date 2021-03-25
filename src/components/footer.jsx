import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { useInView } from 'react-intersection-observer';
import FadeIn from './utils/fadeIn';

const Footer = () => {
    const { inView, ref } = useInView({})
    const [set] = useState(true)
    return (
        <div className="container text-light mt-5">
            <footer className="row">
                <div className="col-md-8">
                    <h4 className="w-100">Let's create something together!</h4>
                    <h5><a href="https://drive.google.com/file/d/1EbwoLEl9ySo493lCxbRFaSR5FVM8kG14/view?usp=sharing">
                        Know me better </a>
                and <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rian.ahmad212@gmail.com">
                            drop a line</a>
                    </h5>
                </div>
                <div className="col-md-4 p-0" ref={ref}>
                    <FadeIn start={inView} onChange={() => set((state) => !state)}>
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
                    </FadeIn>
                </div>
                <small className="w-100 mt-2 text-center text-muted">&copy; RIAN AHMAD | {new Date().getFullYear()}</small>
            </footer>
        </div>
    );
}

export default Footer;