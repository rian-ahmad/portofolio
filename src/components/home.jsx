import React from 'react';
import ScrollIndicator from './utils/scroll/scrollIndicator'
import Logo from './img/logo.png'
import About from './utils/about'

const Home = () => {
    return (
        <div id="home" className="container-fluid mb-5">
            <div className="row">
                <div id="logo" className="col-md-4">
                    <img src={Logo} alt="logo" className="img-fluid mx-auto d-block mt-5 p-2" />
                </div>
                <div className="col-md mt-5">
                    <About />
                </div>
            </div>
            <ScrollIndicator />
        </div>
    );
}

export default Home;