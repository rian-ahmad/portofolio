import React, { useState } from 'react';
import img1 from './img/web_admin_dashboard.PNG'
import { useInView } from 'react-intersection-observer';
import Trail from './utils/trail'

const ProjectGallery = () => {
    const { inView, ref } = useInView({})
    const [set] = useState(true)
    const tags = ["CBT", "Anasihin", "ujian", "online"]

    return (
        <div className="container my-5">
            <Trail open={inView} onChange={() => set((state) => !state)}>
                <span ref={ref} className="d-flex justify-content-center text-light text-center mt-5">my works</span>
            </Trail>
            <div className="row blockquote bg-light mt-5 p-2">
                <div className="col-sm-5 p-2">
                    <img src={img1} className="img-rounded img-fluid" alt="Cinque Terre" />
                </div>
                <div className="col-sm-6 p-2">
                    <h2 className="mb-1">CBT-Anasihin</h2>
                    <div className="d-flex mb-2" id="tags">
                        {tags.map(tag => <h3 key={tag} className="pr-2">{tag}</h3>)}
                    </div>
                    <blockquote className="blockquote">
                        <p>
                            This CBT is an open source web and android application, built from <a href="https://cbtcandy.com/">CandyCBT </a>
                            with modifications and tweaks for An-Nasihin senior high school.
                        </p>
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

export default ProjectGallery;