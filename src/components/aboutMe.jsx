import React, { useState } from 'react';
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from 'react-spring';
import FadeIn from './utils/fadeIn'

const AboutMe = () => {
    const [set] = useState(true)
    const { inView, ref } = useInView({ delay: 500 })
    const fadeIn = useSpring({
        opacity: inView ? 1 : 0
    })

    return (
        <div className="about-me container text-light my-5">
            <FadeIn start={inView} onChange={() => set((state) => !state)}>
                <span className='about-title w-100 d-flex justify-content-center'>About Me</span>
            </FadeIn>
            <animated.div style={fadeIn}>
                <div ref={ref} className="row blockquote p-3">
                    <p className="text-justify">
                        Highly enthusiast Web Developer, IT Support, and
                        Teacher with strong work ethic and love challenges.
                        Experienced in IT Support/Helpdesk and Teach basic
                        web programming to high school student.
                            </p>
                    <p className="text-justify">
                        Currently work as a teacher in SMK IPTEK tangsel, and
                        open to work as web developer
                            </p>
                    <p className="text-justify">
                        I've been working in my own project CBT (Computer Based Test),
                        this project built with native php, and in phase to upgrade it to laravel
                        and ReactJS with Redux. You can check this out below
                            </p>
                </div>
            </animated.div>
        </div>
    );
}

export default AboutMe;