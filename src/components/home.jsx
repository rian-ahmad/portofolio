import React from 'react';
import ScrollIndicator from './utils/scroll/scrollIndicator'
import Logo from './img/logo.png'
import About from './utils/about'

const Home = () => {
    return (
        <div id="home" className="container-fluid mb-5">
            <div className="row">
                <div id="logo" className="col-sm-4">
                    <img src={Logo} alt="logo" className="img-fluid mx-auto my-5 d-block p-2" />
                </div>
                <div className="col-sm-8 my-auto">
                    <About />
                </div>
            </div>
            <ScrollIndicator />
        </div>
    );
}

export default Home;