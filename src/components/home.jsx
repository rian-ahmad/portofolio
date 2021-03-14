import React from 'react';
import ScrollIndicator from './utils/scroll/scrollIndicator'
import Logo from './img/logo.png'
import About from './about'

const Home = () => {
    return (
        <div id="home" style={{ fontFamily: 'Roboto Mono, monospace', height: '100vh' }}>
            <div className="row mt-1">
                <div id="logo" className="col-md">
                    <img src={Logo} alt="logo" className="img-fluid mx-auto d-block mt-5" style={{ maxHeight: "50vh" }} />
                </div>
                <div className="col-md my-auto">
                    <div className="mt-5 text-md-left">
                        <About />
                    </div>
                </div>
            </div>
            <ScrollIndicator />
        </div>
    );
}

export default Home;