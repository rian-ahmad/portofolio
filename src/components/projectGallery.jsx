import React, { useState } from 'react';
import img1 from './img/1.jpg';
import { useInView } from 'react-intersection-observer';
import Trail from './utils/trail'

const ProjectGallery = () => {
    const { inView, ref } = useInView({})
    const [set] = useState(true)

    return (
        <div className="container-fluid mt-5">
            <Trail open={inView} onChange={() => set((state) => !state)}>
                <span ref={ref}  className="d-flex justify-content-center text-light text-center">Look at my works</span>
            </Trail>
            {/* <animated.div ref={ref} className="text-dark display-4 text-center title-box">Look at my works</animated.div> */}
            <div className="row blockquote bg-light mt-5">
                <div className="col-sm-5">
                    <img src={img1} className="img-rounded img-fluid" alt="Cinque Terre" />
                </div>
                <div className="col-sm-6">
                    <h3 style={{ marginBottom: 1 }}>Lorem Ipsum</h3>
                    <p style={{ fontSize: "0.5em" }}>Morbi non enim ultrices, fermentum ipsum id, tristique odio.</p>
                    <blockquote className="blockquote">
                        <p>
                            consectetur adipiscing elit. Donec lobortis nec neque sit amet venenatis. In auctor fermentum sapien non finibus.
                            Nunc viverra tortor neque, nec pretium dui lobortis eget.
                                        </p>
                        <footer className="blockquote-footer" style={{ fontSize: "0.8em", color: "whitesmoke" }}>Lorem ipsum dolor sit amet</footer>
                    </blockquote>
                </div>
            </div>
        </div >
    );
}

export default ProjectGallery;