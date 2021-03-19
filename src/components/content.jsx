import React, { useState } from 'react';
import img1 from './img/web_admin_dashboard.PNG'
import { useInView } from 'react-intersection-observer';
import FadeIn from './utils/fadeIn';
import MoreDescription from './utils/moreDescription';

const Content = () => {
    const { inView, ref } = useInView({})
    const [set] = useState(true)
    const tags = ["CBT", "Anasihin", "ujian", "online"]

    return (
        <div className="container my-5">
            <FadeIn start={inView} onChange={() => set((state) => !state)}>
                <span id="projectOpening" ref={ref} className="d-flex justify-content-center text-light text-center mt-5">my works</span>
            </FadeIn>
            <div className="row blockquote bg-light mt-3 p-2">
                <div className="col-md-6 p-2">
                    <img src={img1} className="img-rounded img-fluid" alt="Cinque Terre" />
                </div>
                <div className="col-md-6 p-3">
                    <h2 className="mb-1">CBT - Anasihin</h2>
                    <div className="d-flex mb-2" id="tags">
                        {tags.map(tag => <h3 key={tag} className="pr-2">{tag}</h3>)}
                    </div>
                    <blockquote className="blockquote text-justify">
                        <p>
                            (<strong>CBT</strong>) Computer Based Test is a web based application for create a live online test or quiz,
                            based on <a href="https://cbtcandy.com/">CandyCBT </a>and programmed for An-Nasihin Senior High School.
                        </p>

                        <MoreDescription />

                        <p>
                            You can get this repository at <a href="https://github.com/rian-ahmad/CBT-Candy_An-Nasihin">github</a>
                        </p>

                        <footer className="blockquote-footer small text-muted">My very first project</footer>
                    </blockquote>
                </div>
            </div>
        </div >
    );
}

export default Content;